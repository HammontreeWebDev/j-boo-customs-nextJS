import React from "react";
import { useState } from "react";
import useNavigation from "../utils/navigationUtils";
import Link from "next/link";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import StandardCard from "@/components/StandardCard";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

// Strep A Awareness Page | route = /strep_a_awareness
const StrepAAwareness = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();
    const [copied, setCopied] = useState(false);

    const handleCopyURL = () => {
        const currentURL = window.location.href;
        const lastSlashIndex = currentURL.lastIndexOf("/");
        const trimmedURL = currentURL.substring(0, lastSlashIndex);
        navigator.clipboard
            .writeText(trimmedURL)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                // alert("The Website URL has been copied to your clipboard!")
                toast.success("The Website URL has been copied to your clipboard!")
            })
            .catch((error) => {
                console.error("Failed to copy URL: ", error);
                toast.warning("Failed to copy URL: ", error);
            });
    };

    return (
        <>
        <Head>
            <title>Strep A Awareness | Jesse Ryder Brown Foundation</title>
            <meta 
            name="description" 
            content="Take a deep dive into the ways that you can help the Jesse Ryder Brown Foundation fight back and learn the signs and symptoms of Strep A."
            />
            <meta name="keywords" content="Jesse Brown, Jesse Ryder Brown Foundation, Strep A" />
        </Head>
            <Header backgroundImage={"/img/awareness-header.png"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Doctor looking through microscope"/>
            <PageTitle isPageChanging={isPageChanging} whiteText="Strep A" greenText="Awareness" />
            <main>

                {/* fight back section */}
                <section className="row">
                    <StandardCard isPageChanging={isPageChanging} greenTitle="Help Us" whiteTitle=" Fight Back" bodyText={
                        <>
                            The Jesse Ryder Brown Foundation exists in order to raise awareness about Strep A. You can help us do that by <button id="shareBtn" className="light-green-text hoverLink" onClick={handleCopyURL}>sharing</button> this website with your friends, family and co-workers. Additionally, if you are able to give financially to the foundation, you can also <Link className="light-green-text hoverLink" href="/donations">donate</Link> directly to the foundation.
                            <br></br>
                            <br></br>
                            Your continued support goes a long way in helping the fight against Strep A.
                            <br></br>
                            <br></br>
                            If you have any concerns or questions, please <Link className="light-green-text hoverLink" href="/contact_us">contact us</Link>.
                        </>
                    } />
                </section>

                {/* signs and symptoms section */}
                <section className="row">
                    <StandardCard isPageChanging={isPageChanging} greenTitle="Signs &amp;" whiteTitle=" Symptoms" bodyText={
                        <>
                            Group A Strep is not your normal strep throat infection. Group A Strep lives on the skin and inside the throat. Once inside the bloodstream, Group A Strep can cause a huge amount of issues.
                            <br></br>
                            <br></br>
                            With Jesse, it presented as fever, general tiredness, and then progressed to a reddish-purple splotchy rash on his legs. The doctors believe since he sprained his ankle the week prior, the infection began to attack his injured ankle, the weakest part in his body. The rash spread up his legs and he was very cold. He was taken to the hospital the morning the rash was found. The strain of Group A Strep that attacked Jesse was so aggressive that by the time we realized the rash, it was already attacking his major organs, causing sepsis.
                            <br></br>
                            <br></br>
                            Other symptoms include:
                        </>
                    }
                        UL={
                            <>
                                <li>Difficulty Breathing</li>
                                <li>Pain When Swallowing</li>
                                <li>Swollen Lymph Nodes</li>
                            </>
                        } />

                        <small className="light-green-text medical-disclaimer">*Disclaimer: Please do not use the information provided on this page in lieu of a professional medical diagnoses. The information provided is not intended to treat or diagnose a medical condition. However, it is provided in order to spread awareness based on personal experience, therefore, if you or someone you know are experiencing any of the mentioned symptoms and/or are concerned in regard to Group A Strep please contact a medical professional right away to seek treatment. </small>
                </section>

                {/* Medical Journals Section */}
                {/*May add this section later, up to client*/}
                {/* <section className="row">
                    <StandardCard isPageChanging={isPageChanging} greenTitle="Medical" whiteTitle=" Journals/Resources" bodyText={
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </>
                    } />
                </section> */}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </main>
        </>
    )
};

export default StrepAAwareness;