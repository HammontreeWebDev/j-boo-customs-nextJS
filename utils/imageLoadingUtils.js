import { useState } from "react";

const useImageLoading = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return { isImageLoaded, handleImageLoad };
};

export default useImageLoading;