// app/page.tsx

import Footer from "./footer"; // Import the Home component
import GetCompanyResponse from "./company_resp"
import HomePage from "./Components/Index"

export default async function Index() {
    return(
      <>   
      <GetCompanyResponse></GetCompanyResponse>
      <HomePage></HomePage>
      <Footer></Footer>
      </>
    )
}
