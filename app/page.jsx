import Footer from "./Components/Footer"; // Import the Footer component
import GetCompanyResponse from "./CompanyResponse";
import Topnavigation from "./Components/Topnavigation";
import Homepage from "./Components/Index";
import Header from "./Components/Header";

export default async function Index() {
  const data = await GetCompanyResponse();
  console.log("api company data");
  console.log(data);

  return (
    <>
      <Header companydata={data} />
      <Homepage />
      <Footer />
    </>
  );
}
