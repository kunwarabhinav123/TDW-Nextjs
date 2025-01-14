import React from 'react';

const Header = ({ companydata }) => {
  console.log(typeof companydata);

  // Extract data with fallback to avoid undefined errors
  const compName = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_COMPANY || "";
  const gstNumber = companydata?.DATA?.FACTSHEET?.[0]?.DATA?.find(item => item.TITLE === 'GST No.')?.DATA || "";
  const city = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_CITY || "";
  const district = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_DISTRICT || "";
  const state = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_STATE || "";

  return (
    <header className="m63_wrp">
      {/* Company Logo and Name */}
      <span id="hp_data" className="tdn m63_cn_grp df clr5 flx1 aic">
        <figure id="topCLogo" className="bg4 df aic tac zi2 ofh">
          <a id="topCLogoLink" href="/">
            <img
              src="https://5.imimg.com/data5/SELLER/Logo/2023/7/329734732/EG/GL/MR/6421901/a-90x90.jpeg"
              alt="Company Logo"
            />
          </a>
        </figure>
        <div className="hAuto">
          <a id="topCName" className="clr5 tdn" href="/">
            <h1>{compName}</h1>
          </a>
          <div id="hdrLoc" className="clr1 ffw m63_wrp mb5">
            <a
              className="f16 fw4 clr1 tdn dib"
              href={`geo:0,0?z=7&q=23.05097000,72.65687000(${district || city || state})`}
            >
              <span className="m63_sprt dib m63_lochead"></span>
              {district && <>{district}{city && ', '}</>}
              {city && <>{city}{state && ', '}</>}
              {state && <>{state}</>}
            </a>
            {/* Conditionally render GST if available */}
            {gstNumber && (
              <p className="f12 d63_GST">
                <b>GST:</b> {gstNumber}
              </p>
            )}
          </div>
        </div>
      </span>

      {/* TrustSeal and Verified Exporter */}
      <div className="m63TsGst df">
        <div className="m63Ts df aic">
          <span className="TsGstSprt">
            <svg width="20px" height="20px" viewBox="0 0 14 13">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="PDP-UI-rewamp" transform="translate(-42.000000, -942.000000)">
                  <g id="Group-3" transform="translate(42.000000, 942.000000)">
                    <rect id="Rectangle" fill="#F0C92C" x="0" y="11" width="14" height="2"></rect>
                    <circle id="Oval" fill="#F0C92C" cx="7" cy="6" r="6"></circle>
                    <polyline
                      id="Path"
                      stroke="#E53E3E"
                      strokeLinecap="round"
                      points="4 5.71428571 5.71428571 8.28571429 10 4"
                    ></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span>
            <b>TrustSeal</b> Verified
          </span>
        </div>

        <div className="m63Gst df aic">
          <span className="TsGstSprt d63IVE">
            <img
              data-img="https://tdw.imimg.com/template-tdw/mobile/ive.png"
              alt="IndiaMART Verified Exporter"
              className="imgCenter"
              src="https://tdw.imimg.com/template-tdw/mobile/ive.png"
            />
          </span>
          <span>
            <b>IndiaMART</b> Verified Exporter
          </span>
        </div>
      </div>

      <div
        id="searchsuggest"
        style={{ display: "none", position: "fixed" }}
        className="m63_atosug bsb zi15 atosug HeaderSclStk"
      ></div>
    </header>
  );
};

export default Header;
