import React from "react";

const ContactInfo = (props) => {

    return (
        <div className="information-container">
            <h2 className="subheading-text underline">{props.title}</h2>
            <p>
                <span className="orange-text">{props.emailIcon}</span> {props.email}
                <br></br>
                <span className="orange-text">{props.phoneIcon}</span> {props.phone}
            </p>
        </div>
    )
}

export default ContactInfo;