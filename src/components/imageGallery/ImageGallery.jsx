import React, { Component } from "react";

import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

import Button from "../button/Button";
import Loader from "react-loader-spinner";
import style from "./styles.module.css";

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    prevProps.picturesList.length !== this.props.picturesList.length &&
      this.setState({ isUpdate: false });
  }

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
    return (
      <div className={style.forLoader}>
        <ul className={style.ImageGallery} onClick={this.props.modalView}>
          {this.props.picturesList.map(pic => (
            <ImageGalleryItem {...pic} key={pic.id}></ImageGalleryItem>
          ))}
        </ul>

        {this.props.loader ? (
          <Loader
            className={style.loaderStyles}
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={800}
          ></Loader>
        ) : (
          <Button onNextPictures={this.props.onNextPictures}></Button>
        )}
      </div>
    );
  }
}
export default ImageGallery;
