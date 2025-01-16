import Footer from "./components/Footer"; // Import the Footer component
import GetCompanyResponse from "./CompanyResponse";
import Topnavigation from "./components/Topnavigation";
import Homepage from "./Components/Index"
import Header  from "./components/Header";

export default async function Index() {
const data = await GetCompanyResponse();
console.log("api company data");
console.log(data);

  return (
    <> <Header companydata = {data} />
    <Homepage companydata = {data} />
      <Footer />
    </>
  );
}
