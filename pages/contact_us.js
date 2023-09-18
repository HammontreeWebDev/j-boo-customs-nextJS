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
import Head from "next/head";

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

    // * Auto format phone number
    const formatPhoneNumber = (input) => {
        // remove non-numeric characters from the input value
        const numericValue = input.replace(/\D/g, "");

        // format numeric value into XXX-XXX-XXXX format
        const formattedValue = numericValue.replace(
            /^(\d{3})(\d{3})(\d{4})$/,
            "$1-$2-$3"
        );

        return formattedValue;
    };

    const handleChange = (e) => {

        // ! Check to see if input type is phone before updating state
        const value = e.target.name === "phone" ? formatPhoneNumber(e.target.value) : e.target.value;

        setFormValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: value,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formValues.firstName !== "" &&
            formValues.lastName !== "" &&
            formValues.phone !== "" &&
            formValues.phone.match(/^\d{3}-\d{3}-\d{4}$/) &&
            formValues.email !== "" &&
            formValues.email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/) &&
            formValues.message !== ""
        ) {
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
        <Head>
            <title>Contact Us | Jesse Ryder Brown Foundation</title>
            <meta 
            name="description" 
            content="Reach out to the Jesse Ryder Brown Foundation via the integrated contact form for questions or concerns."
            />
            <meta name="keywords" content="Jesse Brown, Jesse Ryder Brown Foundation, Strep A, contact" />
        </Head>
            <Header backgroundImage={"/img/contact-us-header.png"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} alt="Hand holding a cell phone"/>
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

                <section className="row row-container">
                    <FormContainer
                        isPageChanging={isPageChanging}
                        greenText="Contact"
                        whiteText="Form"
                        form={
                            <form className="contact-form" onSubmit={handleSubmit}>

                                <div className="form-row">
                                    <div className="input-container">
                                        <label className="input-label" htmlFor="firstName">
                                            First Name:
                                        </label>
                                        <input
                                            className="form-input"
                                            type="text"
                                            name="firstName"
                                            value={formValues.firstName}
                                            onChange={handleChange}
                                            placeholder="John" />
                                    </div>

                                    <div className="input-container">
                                        <label className="input-label" htmlFor="lastName">
                                            Last Name:
                                        </label>
                                        <input
                                            className="form-input"
                                            type="text"
                                            name="lastName"
                                            value={formValues.lastName}
                                            onChange={handleChange}
                                            placeholder="Smith" />
                                    </div>

                                    <div className="input-container">
                                        <label className="input-label" htmlFor="email">
                                            Email Address:
                                        </label>
                                        <input
                                            className="form-input"
                                            type="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            placeholder="example@email.com" />
                                    </div>

                                    <div className="input-container">
                                        <label className="input-label" htmlFor="phone">
                                            Phone Number:
                                        </label>
                                        <input
                                            className="form-input"
                                            type="tel"
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            placeholder="XXX-XXX-XXXX"
                                            pattern="\d{3}-\d{3}-\d{4}"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="message-container">
                                        <label className="input-label" htmlFor="message">
                                            Message:
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formValues.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here...Messages that are sent using this contact form are forwarded to information@j-boocustoms.org" />
                                    </div>
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