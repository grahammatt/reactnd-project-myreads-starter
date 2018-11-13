import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './components/BookShelf';

export default class BooksApp extends Component {
  state = {
    allBooks: []
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({showSearchPage: false, allBooks: books});
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (<div className="app">
      <Route path="/search" render={() => (<div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                 You can find these search terms here:
                 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                 you don't find a specific author or title. Every search is limited by search terms.
               */
              }
              <input type="text" placeholder="Search by title or author"/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>)}/>
      <Route exact path="/" render={() => (<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf books={this.state.allBooks.filter(book => book.shelf === "currentlyReading")} shelfTitle="Currently Reading"/>
            <BookShelf books={this.state.allBooks.filter(book => book.shelf === "wantToRead")} shelfTitle="Want To Read"/>
            <BookShelf books={this.state.allBooks.filter(book => book.shelf === "read")} shelfTitle="Read"/>
            <BookShelf books={this.state.allBooks.filter(book => book.shelf === "none")} shelfTitle="None"/>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>)}/>

    </div>)
  }
}