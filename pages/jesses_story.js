import React from "react";
import useNavigation from "../utils/navigationUtils";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Jesse from "@/components/Jesse";

// Jesse"s Story Page | route = /jesses_story
const JessesStory = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header backgroundImage={"/img/story-header.png"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Jesse&apos;s" greenText="Story" />
            <main>
                <section className="row">
                    <Jesse isPageChanging={isPageChanging} whiteTitle="Jesse Brown -" blueTitle="&#8220;J-Boo&#8221;" src={"/img/jesse-placeholder.png"} alt="placeholder image for jesse"
                        text={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br></br>
                                <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </>
                        } />
                </section>
            </main>
        </>
    )
};

export default JessesStory;