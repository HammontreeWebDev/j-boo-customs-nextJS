import React from "react";
import useNavigation from "../utils/navigationUtils";
// import Iconify Icons
import { Icon } from "@iconify/react";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import FancyCard from "@/components/FancyCard";
import ContactInfo from "@/components/ContactInfo";
import FormContainer from "@/components/FormContainer";

const IconifyPhone = () => {
    return (
        < Icon icon="el:phone-alt" />
    )
}
const IconifyEmail = () => {
    return (
        <Icon icon="streamline:mail-send-email-send-email-paper-airplane" />
    )
}

// Contact Us Page | route = /contact_us
const ContactUs = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header backgroundImage={"/img/contact-us-header.png"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Contact" greenText="Us" />
            <main>
                {/* id props to override css for about me classes */}
                <section className="row">
                    <FancyCard isPageChanging={isPageChanging} fancyContainerId="fancy-override" titleColId="title-override" classSelector="contact-container" memberName="Contact Information" memberPhoto={"/img/contact-us-avatar.webp"} photoId="contact-photo" alt="white envelope with a red pencil"
                        contactInfo={
                            <div id="contact-section">
                                <ContactInfo title="Brad Brown | President" emailIcon={<IconifyEmail />} email="brad@j-boocustoms.org" phoneIcon={<IconifyPhone />} phone="xxx-xxx-xxxx" />

                                <ContactInfo title="Betsy Brown | Vice President" emailIcon={<IconifyEmail />} email="betsy@j-boocustoms.org" phoneIcon={<IconifyPhone />} phone="xxx-xxx-xxxx" />

                                <ContactInfo title="General Inquiry" emailIcon={<IconifyEmail />} email="information@j-boocustoms.org" />
                            </div>
                        }
                    />
                </section>

                <section className="row">
                    <FormContainer
                        isPageChanging={isPageChanging}
                        greenText="Contact"
                        whiteText="Form"
                        form={
                            <form className="contact-form">

                                <div className="form-row">
                                    <input className="form-input" type="text" placeholder="First Name" />
                                    <input className="form-input" type="text" placeholder="Last Name" />
                                    <input className="form-input" type="email" placeholder="youremail@address.com" />
                                    <input className="form-input" type="tel" placeholder="XXX-XXX-XXXX" />
                                </div>

                                <div className="form-row">
                                    <textarea name="message" placeholder="Write your message here...Messages that are sent using this contact form are forwarded to information@j-boocustoms.org" />
                                </div>

                                <button id="submitBtn" type="submit">SEND</button>
                            </form>
                        }
                    />
                </section>

            </main>
        </>
    )
};

export default ContactUs;