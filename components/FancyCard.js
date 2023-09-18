import React, {useState, useEffect} from "react";
import useImageLoading from "../utils/imageLoadingUtils";
import dynamic from "next/dynamic";
import Image from "next/image";

// components
const LoadSpinner = dynamic(() => import("./LoadSpinner"), {ssr: false});

const FancyCard = (props) => {
    // keep track of state of image load using helper function
    const { isImageLoaded, handleImageLoad } = useImageLoading();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // ! For Images
    const imgClass = isImageLoaded ? "member-photo animate__animated animate__fadeIn" : "hidden";

    // ! For Entire Div
    const initialClass = "fancy-container animate__animated animate__fadeIn";
    const exitClass = "fancy-container animate__animated animate__fadeOut";

    if (!isMounted) {
        return null
    }

    return (
        <div id={props.fancyContainerId} className={props.isPageChanging ? exitClass : initialClass}>
            <img className="fancy-header" src="/img/fancy-card-header.svg" alt="Green Arch to enhance design" />

            <div id={props.titleColId} className="title-pic-col fancy-text">
                <h2 className="card-title reset-margin about-us-title">
                    {props.memberName}
                </h2>
                <Image id={props.photoId} className={imgClass} src={props.memberPhoto} alt={props.alt} onLoad={handleImageLoad} onLoadedData={handleImageLoad} width={285} height={285}/>
                {isImageLoaded ? null : <LoadSpinner />}
            </div>

            <div className={props.classSelector}>
                <p className="about-text">{props.aboutText}</p>
                {props.contactInfo}
            </div>
        </div>
    )
}

export default FancyCard;