import React from "react";

const PageTitle = (props) => {

    const initialClass = "h1-header title-text animate__animated animate__backInLeft";
    const exitClass = "h1-header title-text animate__animated animate__fadeOut";

    return (
        <div className="page-title-bg">
            <h1 className={props.isPageChanging ? exitClass : initialClass}>{props.whiteText} <span className="green-text">{props.greenText}</span></h1>
        </div>
    )
}

export default PageTitle;