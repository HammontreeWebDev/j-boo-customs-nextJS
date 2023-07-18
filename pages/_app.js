import React from "react";
import Head from "next/head";

// css libraries
import "animate.css";

// css files
import "../styles/index.css";
import "../styles/contact-info.css";
import "../styles/contactus.css";
import "../styles/content-card.css";
import "../styles/custom-video.css";
import "../styles/donations.css";
import "../styles/fancy-card.css";
import "../styles/footer.css";
import "../styles/formcontainer.css";
import "../styles/gallery.css";
import "../styles/header.css";
import "../styles/jesse.css";
import "../styles/load-spinner.css";
import "../styles/loading-div.css";
import "../styles/page-title.css";
import "../styles/standard-card.css";
import "../styles/about-us.css";
import "../styles/strep_a_awareness.css";

// components
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
    return (
        // ! may need to find an SSR provider
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
};

export default App;