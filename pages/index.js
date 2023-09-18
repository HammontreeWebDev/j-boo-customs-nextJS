import React, { useState } from "react";
import useNavigation from "../utils/navigationUtils";

// import components
import GalleryPhoto from "@/components/GalleryPhoto";
import PageTitle from "@/components/PageTitle";
import Header from "@/components/Header";
import LoadSpinner from "@/components/LoadSpinner";
import Head from "next/head";

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
        <Head>
            <title>Jesse Ryder Brown Foundation</title>
            <meta 
            name="description" 
            content="Welcome to the Jesse Ryder Brown Foundation. Take your time to learn about the Brown family and join their fight against Strep A."
            />
        </Head>
            <Header headerImgId="landing-header" backgroundImage="/img/landing_header.webp" isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Jesse with his motocross bike" />
            <PageTitle isPageChanging={isPageChanging} whiteText="&quot;Remembering, Preventing, and Healing:" greenText="Together Against Strep A&quot;" />
            <main>
                <section className="row">
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo1.webp" alt="Jesse on his bmx bike" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo2.webp" alt="Headshot of Jesse" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo3.webp" alt="Betsy talking to Jesse" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo4.webp" alt="Jesse on his mx bike holding up hand for a high five" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo5.webp" alt="Betsy hugging Jesse on his mx bike" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo6.webp" alt="jesse on his mx bike" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo7.webp" alt="jesse riding his bmx bike in a race" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo8.webp" alt="Jesse on his bmx bike in full gear" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing-photo9.webp" alt="Close up of Jesse with dirt on his face from riding" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing_photo10.webp" alt="Memorial Plaque" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing_photo11.webp" alt="Memorial Plaque" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing_photo12.webp" alt="Memorial Plaque" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing_photo13.webp" alt="Memorial Plaque" />
                    <GalleryPhoto isPageChanging={isPageChanging} src="/img/landing_photo14.webp" alt="Memorial Plaque" />
                </section>
            </main>
        </>
    )
};

export default Landing;