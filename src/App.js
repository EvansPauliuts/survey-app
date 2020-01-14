import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Survey from './components/Survey';
import Result from './components/Result';
import Nav from './components/Nav';
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
            <Switch>
                <Route exact path='/' component={Survey} />
                <Route path='/result' component={Result} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;