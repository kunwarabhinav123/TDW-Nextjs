import { NextResponse } from 'next/server';
import { headers } from 'next/headers';


// Middleware function
export async function middleware(request) {
  // const url = request.nextUrl; 
  // const referer = request.headers.get('referer');

  if (url.pathname.startsWith('/_next')) {
    return NextResponse.next(); // Skip middleware for internal calls
  }
  else {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  });
  }
  
}

// Configure matcher to apply middleware
export const config = {
  matcher: '/:path*', // Match root URL or other paths (e.g., '/about', '/api/*')
};
