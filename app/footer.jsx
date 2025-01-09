import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="ps-footer ps-footer--2 jk-footer d-none d-sm-block">
                <div className="container">
                    <div className="ps-footer__middle">
                        <div className="row m-0 justify-content-between">
                            <div className="col-md-3 p-0">
                                <div className="ps-footer--block jk-footer-block">
                                    <h2 className="ps-block__title">Company</h2>
                                    <ul className="ps-block__list">
                                        <li><span className="ln2 bg1 ds1"></span><Link href="profile.html">Profile</Link></li>
                                        <li><span className="ln2 bg1 ds1"></span><Link href="franchisee.html">Distributor Enquiry Form</Link></li>
                                        <li><span className="ln2 bg1 ds1"></span><Link href="sitemap.html">Sitemap</Link></li>
                                        <li><span className="ln2 bg1 ds1"></span><Link href="enquiry.html">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ps-footer--block jk-footer-block">
                                    <h2 className="row ps-block__title">
                                        <Link href="bathroom-fittings.html" target="_top" className="col-md-12 p-0">Our Product Range</Link>
                                    </h2>
                                    <div className="row all-link-wrapper">
                                        <ul className="col-md-6 ps-block__list">
                                            <li><span className="ln2 bg1 ds1"></span><Link href="arya-collection.html">ARYA Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="ola-collection.html">OLA Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="kushaq-collection.html">KUSHAQ Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="nova-collection.html">NOVA Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="waves-collection.html">WAVES Collection</Link></li>
                                        </ul>
                                        <ul className="col-md-6 ps-block__list">
                                            <li><span className="ln2 bg1 ds1"></span><Link href="seltos-collection.html">SELTOS Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="saga-collection.html">SAGA Collection</Link></li>
                                            <li><span className="ln2 bg1 ds1"></span><Link href="flamingo-collection.html">FLAMINGO Collection</Link></li>
                                            <li>
                                                <Link href="bathroom-fittings.html" className="view-all">
                                                    <span>View All</span>
                                                    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <g clipPath="url(#clip0_291_7611)">
                                                            <path d="M16.172 12.9993L10.808 18.3633L12.222 19.7773L20 11.9993L12.222 4.22134L10.808 5.63534L16.172 10.9993H4V12.9993H16.172Z" fill="#4F4F4F"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_291_7611">
                                                                <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="ps-footer--address jk-footer-address">
                                    <div className="ps-footer__title">Share Us:</div>
                                    <ul className="jk-social">
                                        <li>
                                            <Link aria-label="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer.php?u=https://www.miralienterprise.com/" className="jk-social-link">
                                                <svg version="1.1" id="Layer_1" width="30" height="30" viewBox="0 0 408.788 408.788" style={{ enableBackground: 'new 0 0 408.788 408.788' }}>
                                                    <path style={{ fill: '#475993' }} d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085C408.786,24.662,384.124,0,353.701,0z"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        {/* Add other social links similarly */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-footer--bottom jk-footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    ©<strong>Mirali Enterprise</strong>. All Rights Reserved (
                                    <span className="txt6">
                                        <Link href="https://www.indiamart.com/terms-of-use.html" target="_blank" rel="noopener noreferrer">
                                            <u>Terms of Use</u>
                                        </Link>
                                    </span>
                                    )<br />
                                    Developed and Managed by{' '}
                                    <span className="txt6">
                                        <Link href="https://corporate.indiamart.com" target="_blank" rel="noopener noreferrer">
                                            <u>IndiaMART InterMESH Limited</u>
                                        </Link>
                                    </span>
                                </div>
                                <div className="col-12 col-md-1 offset-md-4">
                                    <Link aria-label="indiamart_membership" href="https://www.indiamart.com" className="d-block text-end" target="_blank" rel="noopener noreferrer">
                                        <span className="sprt ts im d-block"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
