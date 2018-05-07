import React from 'react';
import { Link } from 'react-router-dom';
import {Home, Contact, About} from '../components';

const Navigation = () => {
  return (
    <div class = 'nav'>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to ="/">Home </Link>
          <Link to ="/about">About </Link>
          <Link to ="/contact">Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
//purpose of this page is to declare our Navigation const and then wrap our Links in a div that will do to those Links when clicked on. Creates an Event Handler for you
