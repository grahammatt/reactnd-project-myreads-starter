import React, {Component} from 'react';

// TODO: Array of objects to hold options
export default class ShelfChanger extends Component {
  render() {
    return (<div className="book-shelf-changer">
      <select>
        <option value="move" disabled="disabled">Move to...</option>
        // TODO: filter options to remove current shelf from options
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>);
  }
}
