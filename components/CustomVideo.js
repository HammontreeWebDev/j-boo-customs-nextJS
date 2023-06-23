import React, { useState, useEffect }from "react";
import dynamic from "next/dynamic";
import useImageLoading from "../utils/imageLoadingUtils";

// components
const LoadSpinner = dynamic(() => import("./LoadSpinner"), {ssr: false});

const CustomVideo = (props) => {
    const [isMounted, setIsMounted] = useState(false);
    const { isImageLoaded, handleImageLoad } = useImageLoading();


    useEffect(() => {
        setIsMounted(true);
    }, []);

    const initialClass = isImageLoaded ? "custom-video animate__animated animate__fadeIn" : "hidden";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    
        const logThis = () => {console.log(isImageLoaded);}


    if (!isMounted){
        return null
    }

    return (
        <>
        {isImageLoaded ? null : <LoadSpinner />}
        <video className={props.isPageChanging ? exitClass : initialClass} src={props.src} preload="auto" controls={true} playsInline={true} muted={true} onCanPlay={handleImageLoad} onLoadedData={handleImageLoad} />
        </>
    )
}

export default CustomVideo;