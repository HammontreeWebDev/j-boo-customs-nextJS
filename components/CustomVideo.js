import React, { useState, useEffect } from "react";

const CustomVideo = (props) => {

    const initialClass = "custom-video animate__animated animate__fadeIn";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    return (
        <>
            <video className={props.isPageChanging ? exitClass : initialClass} preload="auto" controls={true} playsInline={true} muted={true}>
                <source src={props.src}/>
            </video>
        </>
    )
}

export default CustomVideo;