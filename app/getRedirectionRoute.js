import { NextResponse  } from "next/server";

export function RedirectRoute_beforeAPI(url) {
    const RedirectRoute = {
        "query.html": "enquiry.html"
    }
    let domainName= url.origin;
    let page_req = url.pathname;
    let page_req1 = String(page_req).replace(/^\//, '');
    console.log("page requested "+ page_req1);
    for (const key in RedirectRoute) {
        let newUrl = domainName+'/'+ RedirectRoute[key];
        if (page_req1 == key) {
            console.log("Redirection to new url !!")
            return NextResponse.redirect(newUrl, 301);
        }
        // else{
        //     return NextResponse.redirect(newUrl, 301);
        // }
    }
   
}
export function RedirectRoute_afterAPI(data, url) 
{
    console.log(data);
    console.log(url);
    let URL_DETAIL=data?.URL_DETAIL?.URL;
    if(URL_DETAIL=="/revomacindustries")
        console.log(URL_DETAIL);
    else
        console.log("URL not found");
}