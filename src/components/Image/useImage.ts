import { useState } from "react";

const useImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return { isVisible, setIsVisible };
};

export default useImage;
