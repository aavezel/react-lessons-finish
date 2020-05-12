import React from 'react';
import SearchPanel from '../search-panel';

const AppHeader = ({
  toDo,
  done,
  stateFilter,
  textFilter,
  changeStateFilter,
  changeTextFilter,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light todo-app-header">
      <a className="navbar-brand" href="/">My Todo List</a>
      <div className="collapse navbar-collapse">
        {toDo} more to do, {done} done
      </div>
      <SearchPanel
        stateFilter={stateFilter}
        textFilter={textFilter}
        changeStateFilter={changeStateFilter}
        changeTextFilter={changeTextFilter}
      />
    </nav>
  );
};

export default AppHeader;
