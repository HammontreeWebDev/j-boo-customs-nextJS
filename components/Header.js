import React, { useState, useEffect } from "react";
import useImageLoading from "../utils/imageLoadingUtils";
import dynamic from "next/dynamic";

// components
const LoadingDiv = dynamic(() => import("./LoadingDiv"), { ssr: false });

// images/icons
import { Icon, enableCache } from "@iconify/react";
enableCache("local");

const Header = (props) => {

    // keep track of state
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsNavCollapsed(window.innerWidth <= 1330);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // if image is loaded then fade in, otherwise hide the image completely -- loading div will conditionally render based on state in return statement
    const headerImageClass = isImageLoaded ? "background-img animate__animated animate__fadeIn" : "hidden";
    // if page is changing set the fadeout animation
    const exitClass = "background-img animate__animated animate__fadeOut";

    if (!isMounted) {
        return null
    }

    return (
        <header className="header-component">
            <img className="header-shape" src="/img/header-shape.svg" alt="Red Arch to enhance design" />

            {isImageLoaded ? null : <LoadingDiv />}

            <img id={props.headerImgId} className={props.isPageChanging ? exitClass : headerImageClass} src={props.backgroundImage} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad} />

            <div className="header-content">


                <h2 className="h1-header jrb-header">
                    Jesse Ryder Brown Foundation, Inc
                </h2>



                <button className={isNavCollapsed ? "toggle-nav-button" : "close-nav-button"} onClick={() => setIsNavCollapsed(!isNavCollapsed)}>
                    {isNavCollapsed ? (
                        <Icon icon="line-md:close-to-menu-alt-transition" />
                    ) : (
                        <Icon icon="line-md:menu-to-close-alt-transition" />
                    )}
                </button>

                <nav
                    id="dropdown-nav"
                    className={`nav-bar ${isNavCollapsed ? "collapsed dropdown-nav-hidden" : "dropdown-nav-visible"}`}>

                    <button onClick={() => props.handleNavigate("/")} className="subheading-text nav-btn">Home</button>

                    <button onClick={() => props.handleNavigate("/about_us")} className="subheading-text nav-btn">About Us</button>

                    <button onClick={() => props.handleNavigate("/jesses_story")} className="subheading-text nav-btn">Jesse&apos;s Story</button>

                    <button onClick={() => props.handleNavigate("/strep_a_awareness")} className="subheading-text nav-btn">Strep A Awareness</button>

                    <button onClick={() => props.handleNavigate("/contact_us")} className="subheading-text nav-btn">Contact Us</button>

                    <button onClick={() => props.handleNavigate("/donations")} className="subheading-text nav-btn">Donations</button>
                </nav>
                <div className="header-subtext tagline-container">
                    <p className="header-tagline">
                        J-Boo Customs Store
                        <br />
                        Coming Soon!
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;