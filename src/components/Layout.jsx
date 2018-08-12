import React, { Component } from 'react';
import Header from './Header/Header';
import './../App.scss';

export default class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
