export function ForbiddenRoute_beforeAPI(url) {
    //list of all forbidden Route
    console.log("Inside forbidden functn");
    const forbiddenRoutes = [
        /\.php/,
        /\/wp-/,
        /\/wordpress\//,
        /\/href=/i,
        /\/reg\.html/,
        /\/member\//,
        /\/dglobby/,
        /\/hhcp/,
        /\/pc\.html/,
        /\/p2p\.html/,
        /\/zhuces\.php/,
        /\/main\.html/,
        /\/PageRegister\?uid=/,
        /\/\?c=Lottery/,
        /\/pc\//,
        /\/game\//,
        /\/home\//,
        /\/regpage\.do/,
        /\/Lobby\//,
        /\/lottery\//,
        /\/page\//,
        /\/v\//,
        /\/api\//,
        /\/lotteryV3\//,
        /\/main\//,
        /\/EleGame\//,
        /\/views\//,
        /\/\/\?s=index/,
        /\/\/\?a=fetch/
    ];

    let page_req = url.pathname;
    let page_req1 = String(page_req).replace(/^\//, '');
    console.log("page req in forbidden condn");
    console.log(page_req1);
    // Check against forbidden routes
    const isForbidden = forbiddenRoutes.some((pattern) => pattern.test(page_req1));
    if (isForbidden) {
        // Handle the forbidden case (e.g., returning a forbidden message or component)
        console.log("forbidden !!!");
        const mesg = '<h1>Forbidden: Access to this resource is restricted.</h1>';
        // return { status: 403, message: '<h1>Forbidden: Access to this resource is restricted.</h1>' };

          // if (forbiden_condn.status === 403) {
  //   // return new NextResponse(forbiden_condn.message, { status: 403 });
    const html = new Response(mesg, {
      status: 403,
      headers: { 'Content-Type': 'text/html' },
    });
    return html;
    
  // }
    }
    else {
      console.log("not forbidden")
        return false
    }
}



export function ForbiddenRoute_afterAPI(url, data) {
    const URL_DETAIL = data?.URL_DETAIL?.URL;
  
    if (!URL_DETAIL || URL_DETAIL.URL_STATUS === "404") {
      // Create a 404 response and terminate further execution
      return new Response("404 Not Found", {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }
  
    // No further processing; this behaves like exit in PHP
    return null;
  }