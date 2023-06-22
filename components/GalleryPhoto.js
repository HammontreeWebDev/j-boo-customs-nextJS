import React, { useEffect, useState } from "react";
import useImageLoading from "../utils/imageLoadingUtils";
import dynamic from "next/dynamic";

// components 
const LoadSpinner = dynamic(() => import("./LoadSpinner"));

const GalleryPhoto = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const initialClass = isImageLoaded 
    ? "gallery-photo animate__animated animate__fadeIn"
    : "hidden";
    const exitClass = "gallery-photo animate__animated animate__fadeOut";

    if (!isMounted){
        return null
    }

    return(
        <>
        {isImageLoaded ? null : <LoadSpinner />}
        <img className={props.isPageChanging ? exitClass : initialClass} src={props.src} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad}/>
        </>
    )
}

export default GalleryPhoto;