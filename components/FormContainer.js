import React from "react";

const FormContainer = (props) => {

    // ! For Entire Div
    const initialClass = "form-card animate__animated animate__fadeIn";
    const exitClass = "form-card animate__animated animate__fadeOut";

    return (
        <div className={props.isPageChanging ? exitClass : initialClass}>

            <div className="form-title">
                <h2 className="card-title text-center"><span className="green-text">{props.greenText}</span> {props.whiteText}</h2>
            </div>

            <div className="form-card-body">
            {props.form}
            </div>

        </div>
    )
}

export default FormContainer;