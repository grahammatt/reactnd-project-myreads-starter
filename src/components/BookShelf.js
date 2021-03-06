import React, { Component } from "react";
import Book from "./Book";

// TODO: convert from class component to stateless component
export default class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/*nest a book component for each book in props.books*/}
            {this.props.books.map(book => (
              <Book
                key={book.id}
                book={book}
                updateBooks={this.props.updateBooks}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
