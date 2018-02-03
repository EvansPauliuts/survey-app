import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <ul className='nav'>
      	<li>
      		<NavLink exact activeClassName='active' to='/survey-app'>Опрос</NavLink>
      	</li>
      	<li>
      		<NavLink activeClassName='active' to='/result'>Результаты</NavLink>
      	</li>
      </ul>
    );
  }
}

export default Nav;