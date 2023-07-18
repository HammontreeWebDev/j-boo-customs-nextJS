import React from "react";

const StandardCard = (props) => {

    // ! For Entire Div
    const initialClass = "card-container animate__animated animate__fadeIn";
    const exitClass = "card-container animate__animated animate__fadeOut";

    return (
        <div className={props.isPageChanging ? exitClass : initialClass}>

            <h2 className="card-title">
                <span className="light-green-text">
                    {props.greenTitle}
                </span>
                {props.whiteTitle}
            </h2>
            <p className="standard-text-body">
                {props.bodyText}
                <ul>
                    {props.UL}
                </ul>
            </p>
            {props.customContent}
        </div>
    )
};

export default StandardCard;