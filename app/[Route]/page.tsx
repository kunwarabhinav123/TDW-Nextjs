// app/page.tsx

import Footer from "../footer"; // Import the Home component
import GetCompanyResponse from "../GetCompanyResponse"

export default async function Index() {
  console.log("Inside dynamic Route");
  
    return(
      <>   
      <GetCompanyResponse></GetCompanyResponse>
      <Footer></Footer>
      </>
    )
}
