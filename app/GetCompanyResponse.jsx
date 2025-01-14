import { headers } from 'next/headers';
import Header from './header';
import HomePage from './components/Index';

export default async function GetCompanyResponse() {
  const reqHeaders = await headers();
  let domainName = reqHeaders.get("host") || "";
  console.log('Domain Name:', domainName);

  if (domainName === 'localhost:3000') {
    domainName = 'revomac-net';
  } else {
    domainName = domainName.replace(/\./g, '-');
  }

  const res = await fetch(
    `http://stg-company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link/block-making-machine.html/modid/tdw/`,
    { cache: "no-store" }
  );
  const companyData = await res.json();
  console.log('Fetched companyData:', companyData);

  return (
    <>
      {companyData ? (
        <>
          <Header companydata={companyData} />
          <HomePage companydata={companyData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
