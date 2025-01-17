export function getForbiddenRoute_beforeAPI(url) {
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
        return { status: 403, message: '<h1>Forbidden: Access to this resource is restricted.</h1>' };
    }
    else {
        return { status: 200 }
    }
}



export function getForbiddenRoute_afterAPI() {
    //list of all forbidden Route
}