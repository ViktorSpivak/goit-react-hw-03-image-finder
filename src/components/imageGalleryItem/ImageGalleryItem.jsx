import React from "react";
import style from "./styles.module.css";
const ImageGalleryItem = ({ picture, alter }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img src={picture} alt={alter} className={style.ImageGalleryItem_image} />
    </li>
  );
};
export default ImageGalleryItem;
