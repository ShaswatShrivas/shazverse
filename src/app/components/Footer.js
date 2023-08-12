import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name}>Shazverse</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/shaswat15shrivas01/" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://in.linkedin.com/in/shaswat-shrivas-493992236?trk=profile-badge" target="_blank"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Go to</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/movie">Get started</a></li>
                        </ul>

                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="https://www.instagram.com/shaswat15shrivas01/" target="_blank">Profile</a></li>
                            <li><a href="https://in.linkedin.com/in/shaswat-shrivas-493992236?trk=profile-badge" target="_blank">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                        </ul>

                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Tools and language used while making this project</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="https://nextjs.org" target="_blank">JavaScript (Next Js)</a></li>
                            <li><a href="https://looka.com/" target="_blank">Looka AI</a></li>
                            <li><a href="https://www.jetbrains.com/help/webstorm/migrate-to-webstorm-from-other-tools.html" target="_blank">Webstorm</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Follow US</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Follow" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/"> Shazverse </Link> All rights reserved </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;