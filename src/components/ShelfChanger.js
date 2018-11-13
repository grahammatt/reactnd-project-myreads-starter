import React, {Component} from 'react';

const OPTIONS = [
  {
    'title': 'Currently Reading',
    'value': 'currentlyReading'
  }, {
    'title': 'Want To Read',
    'value': 'wantToRead'
  }, {
    'title': 'Read',
    'value': 'read'
  },{
    'title': 'None',
    'value': 'none'
  }
];

export default class ShelfChanger extends Component {
  render() {
    return (<div className="book-shelf-changer">
      <select>
        <option value="move" disabled="disabled">Move to...</option>
        // TODO: filter options to remove current shelf from options
        {OPTIONS.map(option => (<option value={option.value}>{option.title}</option>))}
      </select>
    </div>);
  }
}
