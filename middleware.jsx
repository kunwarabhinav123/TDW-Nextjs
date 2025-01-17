import { NextResponse } from 'next/server';
import { RedirectRoute_beforeAPI } from './app/getRedirectionRoute';

// Middleware function
export async function middleware(request) {
  const url = request.nextUrl;
  const referer = request.headers.get('referer');

  if (url.pathname.startsWith('/_next')) {
    return NextResponse.next(); // Skip middleware for internal calls
  }

  console.log("inside middleware !!");
  console.log(url);

  // Check the Redirection Route
  const redirect_condn = RedirectRoute_beforeAPI(url); // Pass only the pathname to the function
  if (redirect_condn) {
    // If redirect_condn is true, perform the redirect
    return redirect_condn; 
  }

  // If no redirect, proceed to the next handler
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}

// Configure matcher to apply middleware
export const config = {
  matcher: '/:path*', // Match root URL or other paths (e.g., '/about', '/api/*')
};
