import React from "react";

// icons
import { Icon, enableCache } from '@iconify/react';
enableCache('local');

const LoadSpinner = () => {

    return (
      <Icon className="loading-spinner" icon="line-md:loading-alt-loop" />
    )
}

export default LoadSpinner;