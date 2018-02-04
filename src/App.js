import React, { Component } from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import Survey from './components/Survey';
import Result from './components/Result';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className='iam'>
            <div className='flex'>
              <div className='logo'></div>
              <p>evanscode</p>
            </div>
            <Nav />
          </div>
          <Switch>
            <Route exact path='/survey-app' component={Survey} />
            <Route path='/result' component={Result} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;