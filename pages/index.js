import React, { useState } from "react";
import useNavigation from "../utils/navigationUtils";

// import components
import GalleryPhoto from "@/components/GalleryPhoto";
import PageTitle from "@/components/PageTitle";
import Header from "@/components/Header";
import LoadSpinner from "@/components/LoadSpinner";

const Landing = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }

    const initialClass = "custom-video animate__animated animate__fadeIn";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    return (
        <>
            <Header headerImgId="landing-header" backgroundImage="/img/landing_header.webp" isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Dirt Bike" />
            <PageTitle isPageChanging={isPageChanging} whiteText="&quot;Remembering, Preventing, and Healing:" greenText="Together Against Strep A&quot;" />
            <main>
                <section className="row">
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo1.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo2.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo3.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo4.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo5.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo6.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo7.webp" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo8.webp" alt="placeholder image" />
                </section>
            </main>
        </>
    )
};

export default Landing;