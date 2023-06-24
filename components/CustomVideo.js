import React, { useEffect, useState } from "react";
import useImageLoading from "../utils/imageLoadingUtils";
import dynamic from "next/dynamic";

// components 
const LoadSpinner = dynamic(() => import("./LoadSpinner"), { ssr: false });




const CustomVideo = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const initialClass = isImageLoaded ?
        "custom-video animate__animated animate__fadeIn"
        : "hidden";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    if (!isMounted) {
        return null
    }

    return (
        <>
            {isImageLoaded ? null : <LoadSpinner />}

            <video className={props.isPageChanging ? exitClass : initialClass} preload="auto" controls={true} playsInline={true} muted={true} onCanPlayThrough={handleImageLoad} onLoad={handleImageLoad} onLoadedData={handleImageLoad}>
                <source src={props.src} />
            </video>
        </>
    )
}

export default CustomVideo;