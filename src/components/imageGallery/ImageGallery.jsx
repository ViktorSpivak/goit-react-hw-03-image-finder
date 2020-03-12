import React, { Component, createRef } from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import style from "./styles.module.css";

class ImageGallery extends Component {
  picListRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    const listRef = this.picListRef.current;
    if (prevProps.picturesList !== this.props.picturesList) {
      listRef.scrollTop = listRef.scrollHeight;
    }
  }
  render() {
    return (
      <main>
        <ul
          className={style.ImageGallery}
          onClick={this.props.modalView}
          ref={this.picListRef}
        >
          {this.props.picturesList.map(pic => (
            <ImageGalleryItem
              picture={pic.webformatURL}
              alter={pic.tags}
              key={pic.id}
            ></ImageGalleryItem>
          ))}
        </ul>
      </main>
    );
  }
}
export default ImageGallery;
