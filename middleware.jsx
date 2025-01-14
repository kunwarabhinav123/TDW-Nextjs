import { NextResponse } from 'next/server';
import { headers } from 'next/headers';


// Middleware function
export async function middleware(request) {
  // const url = request.nextUrl; 
  // const referer = request.headers.get('referer');

  // if (url.pathname.startsWith('/_next')) {
  //   return NextResponse.next(); // Skip middleware for internal calls
  // }
  // else if (!referer){
  //   const fullUrl = request.nextUrl.href; // Full URL of the request
  //   const pathname = request.nextUrl.pathname; // Just the path
  //   console.log('Full URL:', fullUrl);
  //   console.log('Pathname:', pathname);
  //   const reqHeaders = headers();
  //   var domainName = await reqHeaders.get('host');
  //   console.log(domainName);
  //   if(domainName == 'localhost:3000'){
  //       domainName = 'miralienterprise-com';
  //   }
  //   else{
  //       domainName = domainName.replace(/\./g, '-')
  //   }
  //   const res = await fetch(
  //     `http://stg-company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link//modid/tdw/`,
  //     { cache: "no-store" } // Ensure fresh data is fetched on each request
  //   );
  //   const companyData = await res.json();
  //   console.log("From middleware !!");
  //   console.log(companyData);
  //   return NextResponse.next();
  // }

  
  // Store current request url in a custom header, which you can read later
  console.log("Inside middleware !!");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  });
}

// Configure matcher to apply middleware
export const config = {
  matcher: '/:path*', // Match root URL or other paths (e.g., '/about', '/api/*')
};
