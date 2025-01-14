// app/page.jsx

import Footer from "../footer"; // Import the Home component
import GetCompanyResponse from "../GetCompanyResponse";

export default function Index() {
  console.log("Inside dynamic Route");
  
  return (
    <>   
      <GetCompanyResponse />
      <Footer />
    </>
  );
}
