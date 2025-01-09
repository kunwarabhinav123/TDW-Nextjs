import { headers } from 'next/headers';
import Header from './header'


export default async function GetCompanyResponse() {
    const reqHeaders = await headers();
    let domainName = reqHeaders.get("host") || "";
    console.log(domainName);
    if(domainName == 'localhost:3000'){
        domainName = 'miralienterprise-com';
    }
    else{
        domainName = domainName.replace(/\./g, '-')
    }
    const res = await fetch(
      `http://stg-company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link//modid/tdw/`,
      { cache: "no-store" } // Ensure fresh data is fetched on each request
    );
    const companyData = await res.json();
    //   console.log(companyData);
    return(
        <>
    { companyData && (
        <Header companydata={companyData}></Header>
    )
    }
       
        </>
    )
  }