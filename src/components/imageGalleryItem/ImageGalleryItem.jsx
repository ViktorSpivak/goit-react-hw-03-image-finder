import React from "react";
import style from "./styles.module.css";
const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className={style.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem_image}
      />
    </li>
  );
};
export default ImageGalleryItem;
