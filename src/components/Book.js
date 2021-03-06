import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger.js";

export default class Book extends Component {
  //function to verify that the book object has a thumbnail
  // TODO: replace null with default thumbnail for missing images here
  getThumbnail = () => {
    return this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : null;
  };
  //function to verify that the book object has authors and concats them
  getAuthors = () => {
    return this.props.book.authors
    ? this.props.book.authors.toString()
    : null;
  };
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${this.getThumbnail()}")`
              }}
            />
            <ShelfChanger
              book={this.props.book}
              updateBooks={this.props.updateBooks}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.getAuthors()}</div>
        </div>
      </li>
    );
  }
}
