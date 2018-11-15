import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Search from "./routes/Search";
import ListBooks from "./routes/ListBooks";
/**
 * [BooksApp]
 * useing react-router-dom show different views based on the url
 */
export default class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route exact path="/" component={ListBooks} />
      </div>
    );
  }
}
