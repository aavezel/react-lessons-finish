import React, {Component} from 'react';
import ItemStatusFilter from '../item-state-filter';
import './search-panel.css';

export default class SearchPanel extends Component {
  render () {
    const {
      stateFilter,
      textFilter,
      changeStateFilter,
      changeTextFilter,
    } = this.props;

    const changeText = e => {
      changeTextFilter (e.target.value);
    };

    return (
      <form className="form-inline my-2 my-lg-0 todo-search-panel">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={changeText}
          value={textFilter}
        />
        <ItemStatusFilter
          stateFilter={stateFilter}
          changeStateFilter={changeStateFilter}
        />
      </form>
    );
  }
}
