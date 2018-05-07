import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';//instantiation of Router

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

//purpose is to import App, any dependencies
//also to render the app on the ReactDOM