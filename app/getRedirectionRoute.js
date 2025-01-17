import { NextResponse  } from "next/server";

export function RedirectRoute_beforeAPI(page_req) {
    const RedirectRoute = {
        "query.html": "enquiry.html"
    }
    // page_req = String(page_req).replace(/^\//, '');
    page_req = 'query.html';
    console.log("page requested "+ page_req);
    for (const key in RedirectRoute) {
        let newUrl = "https://www.revomac.net/enquiry.html";
        if (page_req == key) {
            console.log("Redirection to new url !!")
            return NextResponse.redirect(newUrl, 301);
        }
        else{
            return NextResponse.redirect(newUrl, 301);
        }
    }
   
}


export function RedirectRoute_afterAPI(data, page_req) {

}