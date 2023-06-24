import { React } from "react";
import useNavigation from "../utils/navigationUtils";
import dynamic from "next/dynamic";

// import components
import GalleryPhoto from "@/components/GalleryPhoto";
import PageTitle from "@/components/PageTitle";
import Header from "@/components/Header";
import LoadSpinner from "@/components/LoadSpinner";

// Dynamic Imports
const CustomVideo = dynamic(() => import("../components/CustomVideo"), {
    loading: () => <LoadSpinner />,
    ssr: false,
});

// Landing Page | route = /landing
const Landing = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return(
        <>
        <Header backgroundImage="/img/landing_header.png" isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Dirt Bike"/>
        <PageTitle isPageChanging={isPageChanging} whiteText="&quot;Remembering, Preventing, and Healing:" greenText= "Together Against Strep A&quot;"  />
        <main>
            <section className="row">
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-1.png" alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-2.png" alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-3.png" alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-4.png" alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-5.png" alt="placeholder image"/>
                <GalleryPhoto isPageChanging={isPageChanging} src="/img/ph-6.png" alt="placeholder image"/>
            </section>

            <section className="row">
                <CustomVideo isPageChanging={isPageChanging} src={"/vid/ph-vid.mp4"}/>
            </section>
        </main>
        </>
    )
};

export default Landing;