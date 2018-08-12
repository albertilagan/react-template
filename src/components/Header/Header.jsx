import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg';
import './Header.scss';

const navs = [
  {
    id: 1,
    label: 'Home',
    path: '/'
  },
  {
    id: 2,
    label: 'Profile',
    path: '/profile'
  }
];

export default class Header extends Component {
  render() {
    const nav_list = navs.map(nav => (
      <li className="nav-item" key={nav.id}>
        <Link to={nav.path}>{nav.label}</Link>
      </li>
    ));
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-title">Site</span>
        <nav className="nav">
          <ul className="nav-list">{nav_list}</ul>
        </nav>
      </header>
    )
  }
}
