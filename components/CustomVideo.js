import React from "react";
import useImageLoading from '../utils/imageLoadingUtils';
// components
import LoadSpinner from "./LoadSpinner";

const CustomVideo = (props) => {
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const initialClass = isImageLoaded ? "custom-video animate__animated animate__fadeIn" : "hidden";
    const exitClass = "custom-video animate__animated animate__fadeOut";

    return (
        <>
        {isImageLoaded ? null : <LoadSpinner />}
        <video className={props.isPageChanging ? exitClass : initialClass} src={props.src} controls={true} autoPlay={false} onLoad={handleImageLoad} onLoadedData={handleImageLoad}/>
        </>
    )
}

export default CustomVideo;