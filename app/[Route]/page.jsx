// app/page.jsx

import Footer from "../components/Footer"; 
import GetCompanyResponse from "../CompanyResponse";
import Header from "../components/Header";
import Category from "../components/Category"; 
import Aboutus from "../components/Aboutus"
import NotFound from "../components/Notfound"
import Catindex from "../components/Catindex";
import Enquiry from "../components/Enquiry"

// Assuming you have this component

export default async function Index() {
  let data = '';
  console.log("Inside dynamic Route");
  console.log("printing data");
  data = await GetCompanyResponse();
  console.log(data, 'page');
  let pagename = data?.DATA?.PAGELINKTYPE;
  console.log(pagename,'pagename');
  let pageComponent;

  // Use switch-case to render different components based on pagename
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

  return (
    <>
      <Header companydata={data} />
      {pageComponent} {/* Render the correct component */}
      <Footer/>
    </>
  );
}
