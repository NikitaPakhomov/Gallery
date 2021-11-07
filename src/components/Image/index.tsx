import React from "react";

import ImagePopup from "../ImagePopup";

import styles from "./Image.module.css";

import useImage from "./useImage";

interface Props {
  id: number;
  thumbnailUrl: string;
  url: string;
  title: string;
  deleteCard: (id: number) => void;
}

const Image: React.FC<Props> = ({
  id,
  thumbnailUrl,
  title,
  deleteCard,
  url,
}) => {
  const { isVisible, setIsVisible } = useImage();

  return (
    <div className={styles.wrapper}>
      <figure className={styles.card}>
        <img
          alt={title}
          src={thumbnailUrl}
          loading="lazy"
          onClick={() => setIsVisible(true)}
        />
        <figcaption className={styles.description}>{title}</figcaption>
      </figure>
      <button
        className={styles.closeButton}
        onClick={() => {
          deleteCard(id);
        }}
      >
        ❌
      </button>
      {isVisible && (
        <ImagePopup url={url} setIsVisible={setIsVisible} title={title} />
      )}
    </div>
  );
};

export default Image;
