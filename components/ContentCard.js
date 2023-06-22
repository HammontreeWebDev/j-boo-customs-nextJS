import React from "react";

const ContentCard = (props) => {
    const initialClass = "content-card animate__animated animate__fadeIn";
    const exitClass = "content-card animate__animated animate__fadeOut";

    return (
        <div className={props.isPageChanging ? exitClass : initialClass}>

            <div className="custom-title">
                <h2 className="card-title text-center"><span className="green-text">{props.greenText}</span> {props.whiteText}</h2>
            </div>

            <div className="custom-card-body">
            <p className="body-text custom-body-text">{props.bodyText}</p>
            {props.customContent}
            </div>

        </div>
    )
}

export default ContentCard;