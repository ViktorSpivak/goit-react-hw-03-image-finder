import React from "react";
import style from "./styles.module.css";
const Button = ({ onNextPictures }) => {
  return (
    <footer>
      <button
        className={style.Button}
        type="button"
        name="Load more"
        onClick={onNextPictures}
      >
        Load more
      </button>
    </footer>
  );
};
export default Button;
