import React, { useState } from "react";
import useNavigation from "../utils/navigationUtils";
// import Iconify Icons
import { Icon } from "@iconify/react";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import FancyCard from "@/components/FancyCard";
import ContactInfo from "@/components/ContactInfo";
import FormContainer from "@/components/FormContainer";
import { ToastContainer, toast } from "react-toastify";

// * Keeping in case client would like to add their phone number in the future
// const IconifyPhone = () => {
//     return (
//         < Icon icon="el:phone-alt" />
//     )
// }

const IconifyEmail = () => {
    return (
        <Icon icon="streamline:mail-send-email-send-email-paper-airplane" />
    )
}

// Contact Us Page | route = /contact_us
const ContactUs = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();
    // ! keep track of state for the contact form
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formValues.firstName !== "" &&
            formValues.lastName !== "" &&
            formValues.phone !== "" &&
            formValues.email !== "" &&
            formValues.message !== ""
        ) {
            console.log(JSON.stringify({ ...formValues }))
            try {
                const response = await toast.promise(fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                }),
                    {
                        pending: 'Please Wait...',
                        success: {
                            render() {
                                return `
                                Contact Form Successfully Submitted! 
                                `
                            }
                        },
                        error: 'There was an issue processing your request!',
                    }
                );

                if (response.ok) {
                    // Email was sent successfully
                    console.log('Email Sent');

                } else {
                    // Failed to Send email
                    console.error('Failed to send email');

                }
            } catch (error) {
                console.error('Failed to send email', error); jjjay
            }

            // Clear out the form values after form is submitted
            setFormValues({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } else {
            // ! Prevent email from being sent and alert failure
            const waiting = toast.loading("Please Wait...")
            toast.update(waiting, {
                render: "Error! Please Fill Out All Required Fields. Thank You.",
                type: "error",
                isLoading: false,
                autoClose: 5000,
                closeOnClick: true,
                draggable: true,
            })
        }
    };

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
                                <ContactInfo title="Brad Brown | President" emailIcon={<IconifyEmail />} email="brad@j-boocustoms.org" />

                                <ContactInfo title="Betsy Brown | Vice President" emailIcon={<IconifyEmail />} email="betsy@j-boocustoms.org" />

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
                            <form className="contact-form" onSubmit={handleSubmit}>

                                <div className="form-row">
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name" />

                                    <input
                                        className="form-input"
                                        type="text"
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name" />

                                    <input
                                        className="form-input"
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        placeholder="youremail@address.com" />

                                    <input
                                        className="form-input"
                                        type="tel"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        placeholder="XXX-XXX-XXXX" />
                                </div>

                                <div className="form-row">
                                    <textarea
                                        name="message"
                                        value={formValues.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here...Messages that are sent using this contact form are forwarded to information@j-boocustoms.org" />
                                </div>

                                <button id="submitBtn" type="submit">SEND</button>
                            </form>
                        }
                    />
                </section>
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

export default ContactUs;