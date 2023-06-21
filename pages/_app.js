import React from 'react';
import Head from 'next/head';

// css files
import "../ styles/index.css";
import "../styles/contact-info.css";
import "../styles/contactus.css";
import "../styles/content-card.css";
import "../styles/custom-video.css";
import "../ styles/donations.css";
import "../ styles/fancy-card.css";
import "../ styles/footer.css";
import "../ styles/formcontainer.css";
import "../ styles/gallery.css";
import "../ styles/header.css";
import "../ styles/jesse.css";
import "../ styles/load-spinner.css";
import "../ styles/loading-div.css";
import "../ styles/page-title.css";
import "../ styles/standard-card.css";

// components
// Import layout here

const App = ({ Component, pageProps }) => {
    return (
        // ! may need to find an SSR provider
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* TODO: import link tag for favicon */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Acme&family=Athiti:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

        // TODO: wrap the below content in the Layout Component
            <Component {...pageProps} />
        </>
    )
}