import React, { Component } from 'react';
import Layout from './../../components/Layout';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div id="home" className="container">
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam ab, eligendi itaque error enim! Reprehenderit velit similique, aliquam eaque cum excepturi dolores quaerat repellat facere voluptatum vero delectus fugiat.</p>
        </div>
      </Layout>
    )
  }
}
