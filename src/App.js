import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import Search from './routes/Search';
import ListBooks from './routes/ListBooks';

export default class BooksApp extends Component {
  render() {
    return (<div className="app">
      <Route path="/search" component={Search}/>
      <Route exact path="/" component={ListBooks}/>
    </div>)
  }
}