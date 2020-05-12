import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos,
  filter: {filterText, filterState},
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  const filterTextLower = filterText.toLowerCase ();
  const elements = todos
    .filter (({done}) => {
      if (filterState === 'Active') return !done;
      if (filterState === 'Done') return done;
      return true;
    })
    .filter (({label}) => {
      if (filterText === '') return true;
      return label.toLowerCase ().includes (filterTextLower);
    })
    .map (({id, ...item}) => {
      let className = 'list-group-item';
      if (item.important) {
        className += ' list-group-item-danger';
      }

      return (
        <li key={id} className={className}>
          <TodoListItem
            onDeleted={() => {
              onDeleted (id);
            }}
            onToggleImportant={() => {
              onToggleImportant (id);
            }}
            onToggleDone={() => {
              onToggleDone (id);
            }}
            {...item}
          />
        </li>
      );
    });

  return (
    <div className="row justify-content-center todo-list">
      <div className="col-12 col-md-8 col-lg-6">
        <ul className="list-group">
          {elements}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
