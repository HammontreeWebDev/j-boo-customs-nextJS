import React from "react";
import useNavigation from "../utils/navigationUtils";
import Link from "next/link";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import StandardCard from "@/components/StandardCard";

// Strep A Awareness Page | route = /strep_a_awareness
const StrepAAwareness = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header backgroundImage={"/img/awareness-header.png"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Strep A" greenText="Awareness" />
            <main>

                {/* fight back section */}
                <section className="row">
                    <StandardCard isPageChanging={isPageChanging} greenTitle="Help Us" whiteTitle=" Fight Back" bodyText={
                        <>
                            The Jesse Ryder Brown Foundation exists in order to raise awareness about Strep A. You can help us do that by <Link className="light-green-text" href="#">sharing</Link> this website with your friends, family and co-workers. Additionally, if you are able to give financially to the foundation, you can also <Link className="light-green-text" href="/donations">donate</Link> directly to the foundation.
                            <br></br>
                            <br></br>
                            Your continued support goes a long way in helping the fight against Strep A.
                            <br></br>
                            <br></br>
                            If you have any concerns or questions, please <Link className="light-green-text" href="/contact_us">contact us</Link>.
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
                            <ul>
                                <li>Difficulty Breathing</li>
                                <li>Pain When Swallowing</li>
                                <li>Swollen Lymph Nodes</li>
                                </ul>
                        </>
                    } />
                </section>

                {/* Medical Journals Section */}
                <section className="row">
                    <StandardCard isPageChanging={isPageChanging} greenTitle="Medical" whiteTitle=" Journals/Resources" bodyText={
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </>
                    } />
                </section>
            </main>
        </>
    )
};

export default StrepAAwareness;