// app/page.jsx

import Footer from "../Components/footer"; 
import GetCompanyResponse from "../CompanyResponse";
import Header from "../Components/header";
import Category from "../Components/category"; 
import Aboutus from "../Components/Aboutus"
import NotFound from "../Components/Notfound"


// Assuming you have this component

export default async function Index() {
  let data = '';
  console.log("Inside dynamic Route");
  console.log("printing data");
  data = await GetCompanyResponse();
  console.log(data);
  let pagename = data.PAGELINKTYPE;

  let pageComponent;

  // Use switch-case to render different components based on pagename
  switch (pagename) {
    case 'category':
      pageComponent = <Category companydata={data} />;
      break;
    case 'aboutus':
      pageComponent = <Aboutus companydata={data} />;
      break;
    default:
      pageComponent = <NotFound />; // Default to homepage if no match
  }

  return (
    <>
      <Header companydata={data} />
      {pageComponent} {/* Render the correct component */}
      <Footer companydata={data}/>
    </>
  );
}
