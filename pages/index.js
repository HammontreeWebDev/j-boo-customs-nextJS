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
            <Header headerImgId="landing-header" backgroundImage="/img/landing_header_final.svg" isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Dirt Bike" />
            <PageTitle isPageChanging={isPageChanging} whiteText="&quot;Remembering, Preventing, and Healing:" greenText="Together Against Strep A&quot;" />
            <main>
                <section className="row">
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-1.png" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-2.png" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-3.png" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-4.png" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-5.png" alt="placeholder image" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-6.png" alt="placeholder image" />
                </section>

                <section className="row">
                    {isLoading && <LoadSpinner />}
                    <video className={isPageChanging ? exitClass : initialClass} preload="auto" controls={true} playsInline={true} autoPlay={true} muted={true} onPlay={removeLoader} onLoadedData={removeLoader} style={isLoading ? { visibility: "hidden" } : { visibility: "visible" }} src="/vid/ph-vid.mp4" />
                </section>
            </main>
        </>
    )
};

export default Landing;