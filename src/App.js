import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css";
import { About, Contact, Home, Navigation } from './components';

const App = () => {
    return (
        <>
            <Navigation />
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </>
    );
};

export default App;