import React, {Component} from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
  state = {
    label: '',
  };

  addItem = e => {
    e.preventDefault ();
    const {onAdd} = this.props;
    onAdd (this.state.label);
    this.setState ({
      label: '',
    });
  };

  onLabelChange = e => {
    this.setState ({
      label: e.target.value,
    });
  };

  render () {
    const {label} = this.state;

    return (
      <div className="row justify-content-center todo-list">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="d-flex" onSubmit={this.addItem}>
            <input
              type="text"
              className="form-control p-2 flex-grow-1 mr-2"
              placeholder="Todo items..."
              onChange={this.onLabelChange}
              value={label}
            />
            <button
              type="button"
              className="btn btn-primary text-nowrap"
              onClick={this.addItem}
            >
              Add item
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ItemAddForm;
