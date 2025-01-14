// app/page.tsx

import Footer from "./footer"; // Import the Home component
import GetCompanyResponse from "./GetCompanyResponse"
import Topnavigation from "./topnavigation"

export default async function Index() {
    return(
      <>   
      <GetCompanyResponse></GetCompanyResponse>
      <Footer></Footer>
      </>
    )
}
