'use client';

function Topnavigation() {
  return (
    <>
      <div className="container">
        {/* Left Navigation */}
        <div className="ps-navigation__left">
          <nav className="ps-main-menu">
            <ul className="menu">
              {/* Mega Menu for Product Range */}
              <li className="has-mega-menu">
                <a href="bathroom-fittings.html">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <g clipPath="url(#clip0_18_48)">
                      <path
                        d="M19.6875 18.375H1.31251C0.587605 18.375 0 17.7874 0 17.0625C0 16.3376 0.587605 15.75 1.31251 15.75H19.6875C20.4124 15.75 21 16.3376 21 17.0625C21 17.7874 20.4124 18.375 19.6875 18.375Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M19.6875 11.8125H1.31251C0.587605 11.8125 0 11.2249 0 10.5C0 9.77515 0.587605 9.1875 1.31251 9.1875H19.6875C20.4124 9.1875 21 9.7751 21 10.5C21 11.2249 20.4124 11.8125 19.6875 11.8125Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M19.6875 5.24999H1.31251C0.587605 5.24999 0 4.66238 0 3.93748C0 3.21257 0.587605 2.62497 1.31251 2.62497H19.6875C20.4124 2.62497 21 3.21257 21 3.93748C21 4.66238 20.4124 5.24999 19.6875 5.24999Z"
                        fill="#fff"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_18_48">
                        <rect width="21" height="21" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Our Product Range
                </a>
                <div className="mega-menu">
                  <div className="container">
                    <div className="mega-menu__row">
                      {[
                        { name: "ARYA Collection", href: "arya-collection.html" },
                        { name: "OLA Collection", href: "ola-collection.html" },
                        { name: "NOVA Collection", href: "nova-collection.html" },
                        { name: "KUSHAQ Collection", href: "kushaq-collection.html" },
                      ].map((collection, index) => (
                        <div className="mega-menu__column" key={index}>
                          <a href={collection.href}>
                            <h4>{collection.name}</h4>
                          </a>
                          <ul className="sub-menu--mega">
                            <li>
                              <a href={`${collection.href}#2-in-1-wall-mixer`}>2 In 1 Wall Mixer</a>
                            </li>
                            <li>
                              <a href={`${collection.href}#short-body-bib-cock`}>Short Body Bib Cock</a>
                            </li>
                            <li>
                              <a href={`${collection.href}#long-body-bib-cock`}>Long Body Bib Cock</a>
                            </li>
                            <li>
                              <a href={`${collection.href}#brass-pillar-cock`}>Brass Pillar Cock</a>
                            </li>
                            <li>
                              <a href={`${collection.href}#brass-angle-cock`}>Brass Angle Cock</a>
                            </li>
                            <a href={collection.href} className="mm_va fs14 tdu clr5">
                              View All Products
                            </a>
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mega-menu__row">
                      <a href="bathroom-fittings.html">
                        <span className="ps-btn ps-btn--warning d-flex align-items-center justify-content-center">
                          View All Categories
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Profile Menu */}
              <li className="has-mega-menu">
                <a href="profile.html" className="d-flex conta_p align-items-center">
                  Profile
                  <span className="sub-toggle">
                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none">
                      <path
                        d="M5.40907 4.31821L1.59091 0.5L0.5 1.59089L5.40907 6.5L10.3182 1.59089L9.22728 0.5L5.40907 4.31821Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </a>
                <div className="mega-menu pfl_mega_menu">
                  <div className="container">
                    <div className="mega-menu__row">
                      <ul className="sub-menu--mega d-flex flex-wrap">
                        <li className="mega-menu__column">
                          <a href="testimonial.html">Testimonial</a>
                        </li>
                        <li className="mega-menu__column">
                          <a href="about-the-company.html">About The Company</a>
                        </li>
                        <li className="mega-menu__column">
                          <a href="franchisee.html">Distributor Enquiry Form</a>
                        </li>
                        <li className="mega-menu__column">
                          <span
                            className="cp"
                            onClick={() =>
                              window.open(
                                "https://5.imimg.com/data5/SELLER/Doc/2024/1/375718600/EK/DZ/RP/21388812/flamingo-catalog-01-07-2022-compressed-1.pdf",
                                "_blank"
                              )
                            }
                          >
                            Download Brochure
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Contact Us */}
              <li className="has-mega-menu">
                <a
                  href="enquiry.html"
                  onClick={() => {
                    console.log("Contact Us clicked");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Navigation */}
        <div className="ps-navigation__right">
          <div className="ps-header__search header__search22">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Search submitted");
              }}
              id="cse-search-box"
              method="get"
              name="frm"
            >
              <div className="ps-search-table">
                <div className="input-group">
                  <input
                    className="form-control ps-input"
                    style={{ width: "304px" }}
                    type="text"
                    id="ss"
                    placeholder="Search Products/Services"
                    size="5"
                    autoComplete="off"
                  />
                  <div className="input-group-append d-flex justify-content-center cp">
                    <span
                      onClick={() => {
                        console.log("Search button clicked");
                      }}
                      className="search-btn d-flex justify-content-center align-items-center"
                    >
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          d="M11.0482 10.5737L14 13.5248L13.0248 14.5L10.0737 11.5482C8.9757 12.4285 7.60993 12.9072 6.20262 12.9052C2.77877 12.9052 0 10.1265 0 6.70262C0 3.27877 2.77877 0.5 6.20262 0.5C9.62646 0.5 12.4052 3.27877 12.4052 6.70262C12.4072 8.10993 11.9285 9.4757 11.0482 10.5737ZM9.67027 9.57372C10.5413 8.68174 11.0112 7.44288 11.0092 6.15952C11.0092 3.61867 8.74333 1.35284 6.20247 1.35284C3.66161 1.35284 1.39578 3.61867 1.39578 6.15952C1.39578 8.70038 3.66161 10.9662 6.20247 10.9662C7.48583 10.9682 8.72469 10.4982 9.61668 9.6271L9.67027 9.57372Z"
                          fill="#787373"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnavigation;
