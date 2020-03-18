import React, { Component } from "react";
import style from "./styles.module.css";

export class Searchbar extends Component {
  state = {
    tag: ""
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });

    (ev.keyCode === 13 || ev.target.name === "find") &&
      this.props.onSubmit(this.state.tag);
  };
  render() {
    const { tag } = this.state;
    return (
      <div className={style.Searchbar}>
        <form className={style.SearchForm} form="search">
          <button
            name="find"
            form="search"
            type="submit"
            value={this.state.tag}
            className={style.SearchForm_button}
            onClick={this.handleChange}
          >
            <span className={style.SearchForm_button_label}></span>
          </button>

          <input
            form="search"
            value={tag}
            name="tag"
            onChange={this.handleChange}
            onKeyDown={this.handleChange}
            className={style.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
