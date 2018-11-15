import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

export default class Search extends Component {
  state = {
    foundBooks: [],
    query: ""
  };

  //myBooks is used to keep track of the books in a users library.
  //kept track of in 'this' since it does not require a rerender
  myBooks = [];

  /**
   * searches for books matching the query and updates the state
   * @param  {String} query the term(s) entered in the search input
   * @return update state with list of books matching query
   */
  findBooks = query => {
    //keep state query current
    this.setState({ query: query });

    //search for books matching query using API
    BooksAPI.search(query)
      //catch errors
      .catch(() => {
        this.setState({ foundBooks: [] });
      })
      //when response is received
      .then(books => {
        //if response is an array and has at least one book
        if (Array.isArray(books) && books.length > 0) {
          //map over the response from the search
          let updatedBooks = books.map(foundBook => {
            //filter to find a matching books in the users library
            let myBook = this.myBooks.filter(
              myBook => myBook.id === foundBook.id
            );
            //if a book is found set the search results shelf to that in the library
            //else set it to none
            foundBook.shelf = myBook[0] ? myBook[0].shelf : "none";
            return foundBook;
          });
          //update the state with the results and shelf information
          return this.setState({ foundBooks: updatedBooks });
        } else return this.setState({ foundBooks: [] });
      });
  };

  //get users library
  //no need for state or props as a rerender will
  //not be needed everytime a book is added to the users library
  getMyBooks = () => {
    BooksAPI.getAll().then(books => {
      this.myBooks = books;
    });
  };

  //use api to add a book to the users library
  addBook = (bookToAdd, shelf) => {
    BooksAPI.update(bookToAdd, shelf).then(response => {
      this.getMyBooks();
    });
  };

  //get user library when component mounts
  componentDidMount() {
    this.getMyBooks();
  }

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
            {/*add a book to the dom for each found book in the state*/}
            {this.state.foundBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                updateBooks={this.addBook}
                shelf="none"
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
