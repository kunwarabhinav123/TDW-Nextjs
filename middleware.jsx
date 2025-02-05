import { NextResponse } from 'next/server';
import { RedirectRoute_beforeAPI } from './app/getRedirectionRoute';
import { ForbiddenRoute_beforeAPI } from './app/getForbiddenRoute';

// Middleware function
export  function middleware(request) {
  const url = request.nextUrl;
  const referer = request.headers.get('referer');
  // console.log(request)
  if (url.pathname.startsWith('/_next')) {
    return NextResponse.next(); // Skip middleware for internal calls
  }

  console.log("inside middleware !!");
  // console.log(url);

  // Check the Redirection Route
  const checkRedirectURL = RedirectRoute_beforeAPI(url) // Pass only the pathname to the function
  if(checkRedirectURL){
    return NextResponse.redirect(checkRedirectURL, 301);
  }
  //Check Forbidden Condition 

  const checkForbidden = ForbiddenRoute_beforeAPI(url);
  if(checkForbidden) {
    return checkForbidden
  }

  // if (forbiden_condn.status === 403) {
  //   // return new NextResponse(forbiden_condn.message, { status: 403 });
    const html = new Response(forbiden_condn.message, {
      status: 403,
      headers: { 'Content-Type': 'text/html' },
    });
    return html;
  // }

    // Fetch Data from the Company API
    // let companyData = null;
    // try {
    //   companyData = await GetCompanyResponse(request); // Pass the `request` to your function
    // } catch (error) {
    //   console.error("Error fetching company data:", error);
    // }

    // // Check the Redirection Route (After API)
    // if (companyData) {
    //   const redirect_condn_after = RedirectRoute_afterAPI(url, companyData);
    //   if (redirect_condn_after) {
    //     return redirect_condn_after; // Handle redirection based on API data
    //   }
    // }
  
    // // Check Forbidden Condition (After API)
    // if (companyData) {
    //   const forbidden_condn_after = ForbiddenRoute_afterAPI(url, companyData);
    //   if (forbidden_condn_after?.status === 403) {
    //     return new Response(forbidden_condn_after.message, {
    //       status: 403,
    //       headers: { 'Content-Type': 'text/html' },
    //     });
    //   }
    // }


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

