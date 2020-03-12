import React, { Component } from "react";
// import PropTypes from 'prop-types'
import style from "./styles.module.css";
import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import Button from "../button/Button";
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
  componentDidMount() {}
  handleSubmit = ev => {
    ev.target.value !== this.state.search &&
      this.setState({
        search: ev.target.value,
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
            modalView={this.openModalWindow}
          ></ImageGallery>
        )}
        {this.state.isLoading ? (
          <Loader
            className={style.loaderStyles}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          ></Loader>
        ) : (
          this.state.pictures.length !== 0 && (
            <Button onNextPictures={this.handleNextPictures}></Button>
          )
        )}
        <Modal
          onClose={this.handleClose}
          picture={this.state.modalWindowPicture}
        ></Modal>
      </div>
    );
  }
}
