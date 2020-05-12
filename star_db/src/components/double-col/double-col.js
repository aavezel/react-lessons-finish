import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './double-col.css';

const DoubleCol = ({ left, right }) => {
    return (<Row className="double-col mb-2">
        <Col>
            {left}
        </Col>
        <Col>
            {right}
        </Col>
    </Row>);
};

DoubleCol.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
}

export default DoubleCol;