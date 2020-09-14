import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Survey from './containers/Survey';
import Result from './containers/Result';
import Nav from './containers/Nav';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
            <div className='iam'>
                <div className='flex'>
                    <div className='logo'/>
                    <p>evanscode</p>
                </div>
                <Nav />
            </div>
            <img src="https://www.codewars.com/users/EvansCode/badges/large" alt="iam"/>
            <Switch>
                <Route exact path='/' component={Survey} />
                <Route path='/result' component={Result} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;