import React from "react";
import useNavigation from "../utils/navigationUtils";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ContentCard from "@/components/ContentCard";
import FancyCard from "@/components/FancyCard";
import Head from "next/head";


// About Us Page located at /about_us
const AboutUs = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
        <Head>
            <title>About Us | Jesse Ryder Brown Foundation</title>
            <meta 
            name="description" 
            content="Learn more about The Jesse Ryder Brown Foundation and meet the faces behind the Non-Profit Organization."
            />
        </Head>
            <Header headerImgId="aboutUsHeader" backgroundImage={"/img/custom-aboutUs.webp"} isPageChanging={isPageChanging} handleNavigate={handleNavigate}/>
            <PageTitle isPageChanging={isPageChanging} whiteText="About" greenText="Us" />
            <main>
                {/* Who we Are */}
                <section className="row">
                    <ContentCard isPageChanging={isPageChanging} greenText="Who" whiteText="We Are" bodyText={
                        <>
                            Our goal as a non-profit is to raise awareness about the terrible illness that took our Jesse. We still don&apos;t know the root of the cause, or how he got it. Doctors didn&apos;t have the necessary research and information to be able to figure out what was wrong with him fast enough, and even when they did figure out it was Group A Strep, they did not know how to fight it. This strain is so aggressive and attacked the weakest parts of his body before we even knew he was sick. We don&apos;t wish what we went through on any other family and we hope that by spreading awareness about the signs and symptoms, and raising money to fund research into finding the most effective treatment and diagnostics, then hopefully no other family will have to go through this. Multiple other children in our area have also gotten sick from Group A Strep, and by the grace of God a few of them survived without major deficits. Because we put Jesse&apos;s story out there, the parents were more aware that this is a possibility, and the doctors were ready in the same hospital Jesse was in. That is what we aim to keep doing.
                        </>
                    } />
                </section>

                {/* About Me Cards */}
                <section className="row">
                    <FancyCard isPageChanging={isPageChanging} classSelector="text-col fancy-text" memberName="Brad Brown | President"
                        memberPhoto={"/img/brad-avatar4x.webp"} alt="Brad Brown | President"
                        aboutText={<>
                           Brad is one of the most kind-hearted people you will meet. He is caring and genuine and his son and wife came before everything else. He is a family man through and through. When Jesse competed in BMX, Brad also competed in the local district racing with him. When Jesse was done with BMX, Brad followed him to the Florida Trail Riding series as well on his four wheeler. Nothing made Brad happier than riding with his son and seeing his son doing what he loved to do.
                        </>} />
                </section>

                <section className="row">
                    <FancyCard classSelector="text-col fancy-text" memberName="Betsy Brown | Vice President"
                        memberPhoto={"/img/betsy-avatar4x.webp"} alt="Betsy Brown | Vice President"
                        aboutText={<>
                            It is hard to put into words what an amazing person and mother Betsy is. Her son, like Brad, was her whole life. Betsy&apos;s dream was to be a mother and have a family. She wants nothing more than to keep Jesse&apos;s legacy alive and not to have any other family go through what they went through.
                        </>} />
                </section>
            </main>
        </>
    )
}

export default AboutUs;