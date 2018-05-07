import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components'; //auto reads it from ./components/index.js
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <div class = "HeadNav">
    <h1 class = "headline">Welcome to React Router!</h1>
    <Route exact path='/' component = {Home}></Route>
    <Route path ='/about' component ={About}></Route>
    <Route path = '/contact' component ={Contact}></Route>
    </div>
    
  </div>

);






//Route is a component that comes from React Router. It comes prebaked with a couple of props..path and component. It will mount a component to 
//path specified. 

//purpose of this page is to define App and to declare Routes in a div



export default App;

