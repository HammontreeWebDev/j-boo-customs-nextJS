import { useState } from "react";
import { useRouter } from "next/router";

const useNavigation = () => {
  const [isPageChanging, setIsPageChanging] = useState(false);
  const navigate = useRouter();

  const handleNavigate = (navigateTo) => {
    setIsPageChanging(true);

    setTimeout(() => {
      setIsPageChanging(false);
      navigate.push(navigateTo);
    }, 700);
  };

  return { isPageChanging, handleNavigate };
};

export default useNavigation;