import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../components/BookShelf';

export default class ListBooks extends Component {
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
    return (<div className="list-books">
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
    </div>);
  }
}