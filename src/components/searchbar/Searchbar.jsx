import React, { Component } from "react";
import style from "./styles.module.css";

export class Searchbar extends Component {
  state = {
    tag: ""
  };
  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });
  render() {
    const { tag } = this.state;
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} form="search">
          <button
            form="search"
            type="submit"
            value={this.state.tag}
            className={style.SearchForm_button}
            onClick={this.props.onSubmit}
          >
            <span className={style.SearchForm_button_label}></span>
          </button>

          <input
            form="search"
            value={tag}
            name="tag"
            onChange={this.handleChange}
            // on={this.props.onSubmit}
            className={style.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
