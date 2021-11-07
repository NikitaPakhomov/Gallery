import React from "react";

import Image from "../Image";

import { ImageInfo } from "../../interface";
import styles from "./Gallery.module.css";

interface Props {
  imagesInfo: ImageInfo[];
  deleteCard: (id: number) => void;
}

const Gallery: React.FC<Props> = ({ imagesInfo, deleteCard }) => {
  return (
    <div className={styles.wrapper}>
      {imagesInfo &&
        imagesInfo.map(({ thumbnailUrl, title, id, url }) => (
          <Image
            id={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            deleteCard={deleteCard}
            key={id}
            url={url}
          />
        ))}
    </div>
  );
};

export default Gallery;
