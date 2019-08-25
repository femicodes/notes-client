import React, { Component } from 'react';
import './Dashboard.scss';
import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';

export class Dashboard extends Component {
  render() {
    return (
      <div className="parent">
        <Navbar />
        <Content />
      </div>
    );
  };
};

export default Dashboard;
