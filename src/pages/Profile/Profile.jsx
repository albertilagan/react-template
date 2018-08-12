import React, { Component } from 'react';
import Layout from './../../components/Layout';
import './Profile.scss';

export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <div id="profile" className="container">
          <h1>Profile</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam ab, eligendi itaque error enim! Reprehenderit velit similique, aliquam eaque cum excepturi dolores quaerat repellat facere voluptatum vero delectus fugiat.</p>
        </div>
      </Layout>
    )
  }
}
