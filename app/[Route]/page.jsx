// app/page.jsx

import Footer from "../Components/footer"; // Import the Home component
import GetCompanyResponse from "../CompanyResponse";
import Homepage from "../Components/Index"
import Header  from "../Components/header";

export default async function Index() {
  let data = '';
  console.log("Inside dynamic Route");
  console.log("printing data");
  data = await GetCompanyResponse();
  console.log(data);
  
  return (
    <>   
      <Header companydata = {data}>
    </Header>
    <Homepage companydata = {data}></Homepage>
      <Footer />
    </>
  );
}
