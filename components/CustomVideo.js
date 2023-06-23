import React, { useState, useEffect }from "react";
import useImageLoading from "../utils/imageLoadingUtils";
import dynamic from "next/dynamic";
// components
const LoadSpinner = dynamic(() => import("./LoadSpinner"));

const CustomVideo = (props) => {
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const initialClass = isImageLoaded ? "custom-video animate__animated animate__fadeIn" : "hidden";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    if (!isMounted){
        return null
    }

    return (
        <>
        {!isImageLoaded && <LoadSpinner />}
        <video className={props.isPageChanging ? exitClass : initialClass} src={props.src} preload="auto" controls={true} playsInline={true} onCanPlayThrough={handleImageLoad}/>
        </>
    )
}

export default CustomVideo;