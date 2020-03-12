import React, { Component, createRef } from "react";
import style from "./styles.module.css";

class Modal extends Component {
  backdropRef = createRef();
  handleBackClose = ev => {
    const { current } = this.backdropRef;
    if (current && ev.target !== current) {
      return;
    }
    this.props.onClose();
  };
  handleCloseModal = ev => {
    if (ev.code !== "Escape") {
      return;
    }
    this.props.onClose();
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }
  render() {
    const [src, alt] = this.props.picture;
    return (
      this.props.picture.length !== 0 && (
        <div
          className={style.Overlay}
          ref={this.backdropRef}
          onClick={this.handleBackClose}
        >
          <div className={style.Modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
      )
    );
  }
}

export default Modal;
