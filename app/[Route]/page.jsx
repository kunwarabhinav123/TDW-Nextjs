// app/page.jsx

import Footer from "../Components/Footer"; 
import GetCompanyResponse from "../CompanyResponse";
import Header from "../Components/Header";
import Category from "../Components/Category"; 
import Aboutus from "../Components/Aboutus"
import NotFound from "../Components/Notfound"
import Catindex from "../Components/Catindex";
import Enquiry from "../Components/Enquiry"
// import RedirectRoute from "../getRedirectionRoute"
import { NextResponse } from "next/server";

// Assuming you have this component

export default async function Index() {
  let data = '';
  console.log("Inside dynamic Route");
  console.log("printing data");
  data = await GetCompanyResponse();
  // console.log(data, 'page');
  let pagename = data?.DATA?.PAGELINKTYPE;
  // console.log(pagename,'pagename');
  let pageComponent;

  // Use switch-case to render different Components based on pagename
  switch (pagename) {
    case 'category':
      pageComponent = <Category companydata={data} />;
      break;
    case 'aboutus':
      pageComponent = <Aboutus/>;
      break;
    case 'catindex':
      pageComponent = <Catindex/>;
      break;
      case 'enquiry':
        pageComponent = <Enquiry/>;
        break;
    default:
      pageComponent = <NotFound />; // Default to homepage if no match

  }

//   for (const key in RedirectRoute) {
//     if (pagename == key) {
//       let newUrl = "https://www.revomac.net/enquiry.html";
//       return NextResponse.redirect(newUrl, 301);
//     }
// }

  return (
    <>
      <Header companydata={data} />
      {pageComponent} {/* Render the correct component */}
      <Footer/>
    </>
  );
}
