import React from "react";
import useNavigation from "../utils/navigationUtils";

// import componentss
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ContentCard from "@/components/ContentCard";
import Link from "next/link";
import Head from "next/head";

// Donations Page | route = /donations
const Donations = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
        <Head>
            <title>Donations | Jesse Ryder Brown Foundation</title>
        </Head>
            <Header backgroundImage={"/img/donations_header.webp"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Donate" greenText="Now" />
            <main>
                <section className="row">
                    <ContentCard isPageChanging={isPageChanging} contentID="donations-card" greenText="Why You Should" whiteText=" Donate" bodyText={
                        <>
                            Your donation is going straight towards furthering research and awareness about Group A Strep. 
                            <br></br>
                            The pain of losing our Jesse will never be gone, however, it lessens the pain to know his story is helping other families and ensuring no one else has to go through what he did.
                            <br></br>
                            If you wish to donate to the Jesse Ryder Brown Foundation, simply click the Donate button below.
                            <br></br>
                            Additionally, if you have any questions or concerns, please do not hesitate to <Link className="green-text" href={"/contact_us"}>contact us</Link>.

                        </>
                    } customContent={
                        <Link id="donateBtn" href="https://donate.stripe.com/fZe14CgANfgi5osdQQ" target="_blank" rel="noreferrer">Donate</Link>
                    }
                    />
                </section>
            </main>
        </>
    )
};

export default Donations;