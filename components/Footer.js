import React from "react";
import Link from "next/link";

const Footer = () => {

    return(
        <footer className="footer-component">
            <img className="footer-shape" src="/img/footer.svg" alt="Red Arch to enhance design" />
            <p className="copyright">Copyright © 2023 - 2024 Jesse Ryder Brown Foundation, Inc.</p>
            <small className="small-text">Website Built By: <span><Link id="portfolio-link" className="hyperlink" href="https://www.kailebhammontree.com/" target="_blank" rel="noreferrer">Hammontree Full-Stack Solutions LLC</Link></span></small>
        </footer>
    )
}

export default Footer;