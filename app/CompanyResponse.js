import { headers } from 'next/headers';

export default async function GetCompanyResponse() {
  // Fetch headers
  const reqHeaders = await headers();

  // Extract domain name from host header
  let domainName = reqHeaders.get("host") || "";
  console.log("Domain Name:", domainName);

  // Adjust domain name for local development
  if (domainName === "localhost:3000"|| domainName === "localhost:3001") {
    domainName = "revomac-net";
  } else {
    domainName = domainName.replace(/\./g, "-");
  }

  // Determine protocol (x-forwarded-proto is commonly used in reverse proxies)
//   const protocol = reqHeaders.get("x-forwarded-proto") || "http";

const header_url = reqHeaders.get('x-url') || "";
const parsedUrl = new URL(header_url);
let pathname= parsedUrl.pathname;
console.log("before"+pathname); 
pathname = pathname.replace(/^\//, '');
console.log(pathname); 
if(pathname == '/'){
    pathname = '';
}

console.log(pathname); 
let company_api = `http://company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link/${pathname}/modid/tdw/`;
console.log("api_url"+company_api);
  try {
    const res = await fetch(
      company_api,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch company data: ${res.statusText}`);
    }

    const companyData = await res.json();
    return companyData;
  } catch (error) {
    console.error("Error fetching company data:", error);
    throw error; // Re-throw to handle it in the caller
  }
}
