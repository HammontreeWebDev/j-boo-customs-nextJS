import React from "react";

// icons
import { Icon, enableCache } from "@iconify/react";
enableCache("local");

const LoadingDiv = () => {

    return (
        <div className="loading-div animate__animated animate__pulse animate__infinite">
            Loading <Icon className="loading-icon" icon="eos-icons:three-dots-loading" />
        </div>
    )
}

export default LoadingDiv;