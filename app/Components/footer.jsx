import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="df fdc m63_wrp f15 jcc">
                <div className="m63_cnt_dtl bg5 pr">
                    <ul className="m63_ftr_cta df jcc tac">
                        <li className="m63_sms cta mr10">
                            <Link 
                                href="enquiry.html" 
                                className="bg4 f16 tdn clr6 db br5"
                            >
                                <span className="m63_sprt db mb10 mlra"></span>SMS
                            </Link>
                        </li>
                        <li className="m63_eml cta mr10 ml5">
                            <Link 
                                href="enquiry.html" 
                                className="bg4 f16 tdn clr6 db br5"
                            >
                                <span className="m63_sprt db mb10 mlra"></span>Email
                            </Link>
                        </li>
                        <li className="m63_cal cta ml5">
                            <Link 
                                href="tel:08048987134" 
                                className="bg4 f16 tdn clr6 db br5"
                            >
                                <span className="m63_sprt db mb10 mlra"></span>Call Us
                            </Link>
                        </li>
                    </ul>
                  
                    <ul className="m63_cnt_ad df fdc fw4 f16">
                        <li className="mb20 df aic">
                            <Link 
                                href="tel:08048987134" 
                                className="df tdn clr5 aic"
                            >
                                <span className="m63_sprt m63_cn db mr10"></span>
                                <span className="db ml10"></span>
                                <span className="clr10">08048987134</span>
                            </Link>
                        </li>
                        <li className="mb20 df aic">
                            <span className="m63_sprt m63_cp db mr10"></span>
                            <span className="db ml10">Jigar Patel (Partner)</span>
                        </li>
                        <li className="df mb20">
                            <span className="m63_sprt m63_ca db mr10"></span>
                            <span className="db ml10">
                                <Link 
                                    href="https://www.revomac.net/" 
                                    className="clr5 tdn"
                                >
                                    Revomac Industries
                                </Link>
                                <br />
                                Plot No. 1 & 2, Shivadhin Industrial Park, Nr. HPCL Petrol Pump, Ahmedabad - Indore Highway, Chandial, Ahmedabad - 382433, Gujarat, India
                                <span>
                                    <Link 
                                        href="geo:0,0?z=7&q=23.05097000,72.65687000(Plot No. 1 & 2, Shivadhin Industrial Park, Nr. HPCL Petrol Pump Ahmedabad - Indore Highway, Ahmedabad - 382433, Gujarat, India)"
                                        className="aFnt df clr5 tdn" 
                                        aria-label="google-map"
                                    >
                                        <span className="db f14 m63_gt_drcn">
                                            <svg 
                                                className="fl" 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="12.891" 
                                                height="12.891" 
                                                viewBox="0 0 12.891 12.891"
                                            >
                                                <g id="get-directions-button" transform="translate(0 .003)">
                                                    <g id="directions" transform="translate(0 -.001)">
                                                        <path 
                                                            id="Path_216" 
                                                            d="M12.7 5.993L6.9.192a.623.623 0 0 0-.9 0l-5.8 5.8a.623.623 0 0 0 0 .9l5.8 5.8a.623.623 0 0 0 .9 0l5.8-5.8a.623.623 0 0 0 0-.899zM7.734 8.056V6.444H5.156v1.934H3.867V5.8a.609.609 0 0 1 .645-.645h3.222V3.544L9.99 5.8z" 
                                                            className="cls-1" 
                                                            data-name="Path 216" 
                                                            transform="translate(0 .001)" 
                                                            fill="#0092ff"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className="dib">Get Directions</span>
                                        </span>
                                    </Link>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="m63_lwr_ftr bg2 tac pr pb50" id="footer2">
                    <ul>
                        <li className="mb5 mt10">
                            <Link href="/" className="tdn clr4 db p5">Home</Link>
                        </li>
                        <li className="mb5">
                            <Link href="/about-us.html" className="tdn clr4 db p5">About Us</Link>
                        </li>
                        <li className="mb5">
                            <Link href="/brick-block-making-machine.html" className="tdn clr4 db p5">Products &amp; Services</Link>
                        </li>
                        <li className="mb5">
                            <Link href="/enquiry.html" className="tdn clr4 db p5">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="m63_ln bd mt10 mb5 mlra"></div>

                    <ul className="df jcc aic mt10 mb10">
                        <li className="clr4 f14 m63_sare mr5">
                            <span className="dib m63_sprt mr5 fl"></span>Share via
                        </li>
                        <li className="m63_sicn fbk ml10">
                            <Link 
                                target="_blank" 
                                href="https://www.facebook.com/sharer.php?u=https://www.revomac.net/" 
                                className="tdn clr4 db m63_sprt" 
                                aria-label="Facebook"
                            ></Link>
                        </li>
                        <li className="m63_sicn wap ml10">
                            <span 
                                target="_blank" 
                                className="tdn clr4 db m63_sprt"
                            ></span>
                        </li>  
                        <li className="m63_sicn twt ml10">
                            <Link 
                                target="_blank" 
                                href="https://twitter.com/share?url=https://www.revomac.net/&text=Revomac Industries" 
                                className="tdn clr4 db m63_sprt" 
                                aria-label="Twitter"
                            ></Link>
                        </li>
                    </ul>

                    <p className="clr4 mt25 f16 mb5 fw7">© Revomac Industries</p>
                    <Link 
                        href="https://www.indiamart.com" 
                        className="db tdn imLogo clr4 mt10 mb20"
                    >
                        <img 
                            src="https://tdw.imimg.com/template-tdw/mobile/imLogo.png" 
                            className="imicon imgCenter" 
                            alt="im Logo" 
                            data-img="https://tdw.imimg.com/template-tdw/mobile/imLogo.png" 
                            width="60" 
                        />
                    </Link>
                    <div 
                        className="m63_btt pa tac clr6 zi2" 
                        id="bckTop" 
                    >
                        <span className="db pr mb5"></span>
                    </div> 
                </div>
            </footer>
        </>
    );
}
