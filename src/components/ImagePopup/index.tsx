import React from "react";

import styles from "./ImagePopup.module.css";

interface Props {
  url: string;
  setIsVisible: (visible: boolean) => void;
  title: string;
}

const ImagePopup: React.FC<Props> = ({ url, setIsVisible, title }) => {
  return (
    <div className={styles.wrapper} onClick={() => setIsVisible(false)}>
      <div>
        <img src={url} loading="lazy" alt={title} />
      </div>
    </div>
  );
};

export default ImagePopup;
