import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import './item-list.css';

class ItemList extends Component {

    static defaultProps = {
        onItemSelected: () => {},
    }
    
    static propTypes = {
        itemId: PropTypes.number,
        onItemSelected: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        children: PropTypes.func.isRequired,
    }

    render() {
        const { data, children: renderLabel, onItemSelected, itemId } = this.props;
        

        const items = data.map((item) => {
            const { id } = item;
            const label = renderLabel(item);
            const className = (id === itemId) ? "active" : "";
            return (
                <ListGroup.Item className={className} key={id} onClick={() => onItemSelected(id)}>
                    {label}
                </ListGroup.Item>
            )
        });

        return (
            <ListGroup className="item-list">
                {items}
            </ListGroup>
        );
    }
}

export default ItemList;
