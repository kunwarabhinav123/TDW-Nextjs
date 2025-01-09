import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import {Buttonheader}  from './Components/Buttonheader';

type HeaderProps = {
    companydata: any; // Modify based on your data structure
};

const Header = ({ companydata }: HeaderProps) => {
    console.log(typeof(companydata));
    const comp_name = companydata?.DATA.COMPANYDETAIL.DIR_SEARCH_COMPANY;
    console.log(comp_name);
  return (
    <header className="ps-header ps-header--5">
      <div className="ps-header__middle bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-md-7">
              <div className="ps-logo">
                <Link href="https://www.miralienterprise.com/">
                  <div>
                    <div className="dflt_logo d-flex justify-content-center align-items-center">
                      <div className="cmpny_logo d-flex justify-content-center align-items-center">
                        <Image
                          src="https://5.imimg.com/data5/SELLER/Logo/2023/12/365770242/WP/ZX/XD/21388812/jpeg-less-then-1mb-90x90.jpg"
                          alt="Mirali Enterprise"
                          width={90}
                          height={90}
                        />
                      </div>
                      <div className="cmpny_nme_loc_gst">
                        <h1>
                          <span className="fw-bolder lne1txt overflow-hidden">
                            {comp_name}
                          </span>
                        </h1>
                        <div className="d-flex align-items-center loc_gst mt5">
                          <p className="d-flex align-items-center fs14">
                            <svg
                              width="13"
                              height="17"
                              viewBox="0 0 13 17"
                              fill="none"
                            >
                              <path
                                d="M12.7892 6.32762C12.6144 3.20445..."
                                fill="#c2450f"
                              ></path>
                            </svg>
                            <span>Gokul Nagar, Jamnagar, Gujarat</span>
                          </p>
                          <p className="d-flex align-items-center fs14">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <path
                                d="M8.71665 0.5C4.34439 0.5..."
                                fill="#c2450f"
                              ></path>
                            </svg>
                            <span>
                              GST No.-<span className="fw-bold">24BDCPK7971G1ZG</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            {/* <Buttonheader></Buttonheader> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
