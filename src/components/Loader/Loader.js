import React from 'react';
import logo from '../../logo.svg';
import './loader.css';

const Loader = () => (
  <div className="loader">
    <img src={logo} className="loader__image" alt="loading" />
  </div>
);

export default Loader;
