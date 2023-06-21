import React from "react";
import useImageLoading from '../utils/imageLoadingUtils';

// components
import LoadSpinner from "./LoadSpinner";

const GalleryPhoto = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const initialClass = isImageLoaded ? "gallery-photo animate__animated animate__fadeIn" : "hidden";
    const exitClass = "gallery-photo animate__animated animate__fadeOut";

    return(
        <>
        {isImageLoaded ? null : <LoadSpinner />}
        <img className={props.isPageChanging ? exitClass : initialClass} src={props.src} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad}/>
        </>
    )
}

export default GalleryPhoto;