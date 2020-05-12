import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render () {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    let classNames = 'todo-list-item';
    let importantButtonClass = 'btn btn-primary';

    if (important) {
      classNames += ' todo-list-item_active';
      importantButtonClass += ' active';
    }

    if (done) {
      classNames += ' todo-list-item_done';
    }

    return (
      <div className={classNames}>
        <div className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </div>
        <div className="todo-list-item-buttons">
          <button type="button" className="btn  btn-danger" onClick={onDeleted}>
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={importantButtonClass}
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation-triangle" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}
