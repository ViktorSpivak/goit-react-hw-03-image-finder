import React, { Component } from "react";

import style from "./styles.module.css";
import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imageGallery/ImageGallery";
import Modal from "../modal/Modal";

const axios = require("axios");

const mapper = response =>
  response.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags
  }));
const NEXT_PAGE_STEP = 1;

export default class App extends Component {
  state = {
    pictures: [],
    search: "",
    modalWindowPicture: "",
    page: 1,
    isLoading: false
  };

  request = () =>
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=15549591-2394f2db85990f2bc7f8f7198&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response =>
        this.setState(state => ({
          pictures: [...state.pictures, ...mapper(response)]
        }))
      )
      .catch(console.log)
      .finally(() => this.setState({ isLoading: false }));

  handleClose = () => {
    this.setState({ modalWindowPicture: "" });
  };
  openModalWindow = ev => {
    const { src, alt } = ev.target;

    src && this.setState({ modalWindowPicture: [src, alt] });
  };
  handleNextPictures = () => {
    this.state.search.length !== 0 &&
      this.setState(state => ({
        page: state.page + NEXT_PAGE_STEP
      }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      this.request();
    }
  }
  handleSubmit = tag => {
    tag &&
      tag !== this.state.search &&
      this.setState({
        search: tag,
        pictures: [],
        modalWindowPicture: [],
        page: 1,
        isLoading: false
      });
  };
  render() {
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {this.state.pictures.length !== 0 && (
          <ImageGallery
            picturesList={this.state.pictures}
            onNextPictures={this.handleNextPictures}
            modalView={this.openModalWindow}
            loader={this.state.isLoading}
          ></ImageGallery>
        )}

        <Modal
          onClose={this.handleClose}
          picture={this.state.modalWindowPicture}
        ></Modal>
      </div>
    );
  }
}
