import React from "react";
import style from "./styles.module.css";
const Button = ({ onNextPictures }) => {
  return (
    <div>
      <button
        className={style.Button}
        type="button"
        name="Load more"
        onClick={onNextPictures}
      >
        Load more
      </button>
    </div>
  );
};
export default Button;
