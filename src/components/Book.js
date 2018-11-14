import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger.js";

export default class Book extends Component {
  render() {
    const BOOK = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${BOOK.imageLinks.smallThumbnail}")`
              }}
            />
            <ShelfChanger book={BOOK} updateBooks={this.props.updateBooks} />
          </div>
          <div className="book-title">{BOOK.title}</div>
          <div className="book-authors">{BOOK.authors.toString()}</div>
        </div>
      </li>
    );
  }
}
