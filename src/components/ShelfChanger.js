import React, { Component } from "react";

//keeping shelf data in a constant so it will be eaiser to manage in the future
const OPTIONS = [
  { title: "Currently Reading", value: "currentlyReading" },
  { title: "Want To Read", value: "wantToRead" },
  { title: "Read", value: "read" },
  { title: "None", value: "none" }
];

export default class ShelfChanger extends Component {
  changeShelf = event => {
    //use passed down function post book update on the server and render the view again
    this.props.updateBooks(this.props.book, event.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        {/*set default value of the selector here*/}
        <select
          onChange={this.changeShelf}
          defaultValue={this.props.book.shelf}
        >
          <option value="move" disabled="disabled">
            Move to...
          </option>
          {OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
