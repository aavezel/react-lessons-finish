import React, {Component} from 'react';

export default class ItemStateFilter extends Component {
  buttons = [
    {label: 'All', type: 'All'},
    {label: 'Active', type: 'Active'},
    {label: 'Done', type: 'Done'},
  ];

  render () {
    const {stateFilter, changeStateFilter} = this.props;

    const buttons = this.buttons.map (({label, type}) => {
      let className = 'btn btn-secondary';
      if (stateFilter === type) {
        className += ' active';
      }
      return (
        <button
          type="button"
          className={className}
          onClick={() => changeStateFilter (type)}
          key={type}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group btn-group-toggle">
        {buttons}
      </div>
    );
  }
}
