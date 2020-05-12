import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, withRouter, matchPath } from 'react-router-dom';

import './header.css';
import logo from './logo.svg';

class Header extends Component {

  links = [{ name: 'Persons', to: "/people/" }, { name: 'Planets', to: '/planets/' }, { name: 'Starships', to: "/starships/" }];

  render() {
    const { onSeriviceChange, location: {pathname} } = this.props;

    const NavItems = this.links.map(({ name, to }) => {
      const className =  matchPath(pathname, to) != null ? 'active' : ''; // actice
      return (
        <Nav.Item className={className} key={name}>
          <Link className="nav-link" to={to}>{name}</Link>
        </Nav.Item>
      );
    });
    return (
      <Navbar bg="light" expand="lg" className="header mb-3">
        <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />
          {'   '}
          Star DB
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {NavItems}
          </Nav>
        </Navbar.Collapse>

        <Nav.Item>
          <Button variant="primary" size="sm" onClick={onSeriviceChange}>
            Change Service
          </Button>
        </Nav.Item>
      </Navbar>
    );
  }
}

export default withRouter(Header);