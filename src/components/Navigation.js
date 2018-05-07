import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href ="/">Home </a>
          <a href ="/about">About </a>
          <a href ="/contact">Contact </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
