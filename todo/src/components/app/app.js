import React, {Component} from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
  createTodoItem (id, label, important = false, done = false) {
    return {id, label, important, done};
  }

  state = {
    todoData: [
      this.createTodoItem (1, 'Drink Coffee'),
      this.createTodoItem (2, 'Make Awsome App!'),
      this.createTodoItem (3, 'Learn React', true),
    ],
    filter: {
      filterText: '',
      filterState: 'All',
    },
  };

  deletedItem = id => {
    this.setState (({todoData}) => {
      return {
        todoData: todoData.filter (item => item.id !== id),
      };
    });
  };

  addItem = text => {
    this.setState (({todoData}) => {
      let id = 0;
      const idxs = todoData.map (e => e.id);
      if (idxs.length > 0) {
        const max_idxs = Math.max (...idxs);
        id = max_idxs + 1;
      }
      return {
        todoData: [...todoData, this.createTodoItem (id, text)],
      };
    });
  };

  toggleProperty = (id, prop_name) => {
    this.setState (({todoData}) => {
      const idx = todoData.findIndex (el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        [prop_name]: !oldItem[[prop_name]],
      };
      return {
        todoData: [
          ...todoData.slice (0, idx),
          newItem,
          ...todoData.slice (idx + 1),
        ],
      };
    });
  };

  onToggleImportant = id => {
    this.toggleProperty (id, 'important');
  };

  onToggleDone = id => {
    this.toggleProperty (id, 'done');
  };

  onChangeStateFilter = filterState => {
    this.setState (({filter: {filterText}}) => {
      return {
        filter: {
          filterText,
          filterState,
        },
      };
    });
  };

  onChangeTextFilter = filterText => {
    this.setState (({filter: {filterState}}) => {
      return {
        filter: {
          filterState,
          filterText,
        },
      };
    });
  };

  render () {
    const {todoData, filter} = this.state;
    const doneCount = todoData.filter (e => e.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader
          toDo={todoCount}
          done={doneCount}
          stateFilter={filter.filterState}
          textFilter={filter.filterText}
          changeStateFilter={this.onChangeStateFilter}
          changeTextFilter={this.onChangeTextFilter}
        />
        <TodoList
          filter={filter}
          onDeleted={this.deletedItem}
          todos={todoData}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
