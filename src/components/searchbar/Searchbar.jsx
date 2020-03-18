import React, { Component } from "react";
import style from "./styles.module.css";

export class Searchbar extends Component {
  state = {
    tag: ""
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state.tag);
  };
  render() {
    const { tag } = this.state;
    return (
      <div className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button name="find" type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}></span>
          </button>

          <input
            value={tag}
            name="tag"
            onChange={this.handleChange}
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
