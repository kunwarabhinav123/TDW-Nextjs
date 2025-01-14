import Footer from "./Components/footer"; // Import the Footer component
import GetCompanyResponse from "./CompanyResponse";
import Topnavigation from "./Components/topnavigation";
import Homepage from "./Components/Index"
import Header  from "./Components/header";

export default async function Index() {
const data = await GetCompanyResponse();
console.log("api company data");
console.log(data);

  return (
    <> <Header companydata = {data}>
    </Header>
    <Homepage companydata = {data}></Homepage>
      <Footer />
    </>
  );
}
