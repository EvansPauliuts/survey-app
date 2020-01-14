import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <ul className='nav'>
        <li>
            <NavLink exact activeClassName='active' to='/'>Опрос</NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/result'>Результаты</NavLink>
        </li>
    </ul>
);

export default Nav;