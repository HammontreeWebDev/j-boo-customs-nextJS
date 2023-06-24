import React, { useState } from "react";


// components 
import LoadSpinner from "./LoadSpinner";

const CustomVideo = (props) => {
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }

    const initialClass = isLoading ?
        "hidden"
        : "custom-video animate__animated animate__fadeIn";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    return (
        <>
        {isLoading && <LoadSpinner />}
            <video className={props.isPageChanging ? exitClass : initialClass} preload="auto" controls={true} playsInline={true} muted={true} onCanPlayThrough={removeLoader} onLoad={removeLoader} onLoadedData={removeLoader}>
                <source src={props.src} type="video/mp4" />
            </video>
        </>
    )
}

export default CustomVideo;