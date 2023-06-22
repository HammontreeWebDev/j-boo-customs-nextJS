import React, { useEffect, useState } from "react";
import useImageLoading from '../utils/imageLoadingUtils';
import dynamic from "next/dynamic";

// components
const LoadSpinner = dynamic(() => import("./LoadSpinner"));

const Jesse = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // ! For Images
    const imgClass = isImageLoaded ? "jesse-img animate__animated animate__fadeIn" : "hidden";

    // ! For Entire Div
    const initialClass = "jesse-container animate__animated animate__fadeIn";
    const exitClass = "jesse-container animate__animated animate__fadeOut";

    if (!isMounted){
        return null
    }

    return (
        <div className={props.isPageChanging ? exitClass : initialClass}>
            <div className="title-container">
                <div className="h1-header jesse-title">
                    {props.whiteTitle} <span className="light-blue-text">{props.blueTitle}</span>
                </div>
                <img className={imgClass} src={props.src} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad} />
                {isImageLoaded ? null : <LoadSpinner />}
            </div>

            <div className="text-container">
                <div className="jesse-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
};

export default Jesse;