import React from "react";

const Footer = () => {
    return(
        <div className="footer container">
            <div className="all-sec column">
                <div className="loc">
                    <strong>Location</strong>
                    <a href="">San Francisco, CA</a>
                    <a href="">San Francisco, CA</a>
                    <a href="">San Francisco, CA</a>
                </div>

                <div className="loc">
                    <strong>Portfolio</strong>
                    <a href="">Awwwards</a>
                    <a href="">Dribbble</a>
                    <a href="">Behance</a>
                </div>

                <div className="loc">
                    <strong>Social Media</strong>
                    <a href="">LinkedIn</a>
                    <a href="">Dribbble</a>
                    <a href="">Facebook</a>
                </div>

                <div className="loc">
                    <strong>Get in Touch</strong>
                    <a href="">+1 4159680623</a>
                    <a href="">Contact Us</a>
                    
                </div>

            </div>

            <div className="last-sec column">
            © 2024, Ramotion Inc. | Sitemap | Privacy Policy | Terms of Use | Cookie Policy
            </div>

            
        </div>
    )
}

export default Footer;