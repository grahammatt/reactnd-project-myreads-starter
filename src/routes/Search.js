import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

export default class Search extends Component {
  state = {
    foundBooks: [],
    query: ""
  };

  findBooks = query => {
    this.setState({ query: query });
    BooksAPI.search(query)
      .catch(() => {
        this.setState({ foundBooks: [] });
      })
      .then(books => {
        Array.isArray(books)
          ? this.setState({ foundBooks: books })
          : this.setState({ foundBooks: [] });
      });
  };

  addBook = (bookToAdd, shelf) => {
    BooksAPI.update(bookToAdd, shelf).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* NOTES : The search from BooksAPI is limited to a particular set of search terms.
              *You can find these search terms here
              *https : //github.com/udacity / reactnd - project - myreads - starter / blob / master / SEARCH_TERMS.md
              *However,
              *remember that the BooksAPI.search method DOES search by title or author.So,
              *don 't worry if you don 't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.findBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.state.foundBooks.map(book => (
              <Book key={book.id} book={book} updateBooks={this.addBook} />
            ))}
          </ol>

        </div>
      </div>
    );
  }
}
