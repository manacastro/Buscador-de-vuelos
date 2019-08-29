import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBarLeft.scss';

const NavBarLeft = () => (
    <ul className='linksNab' >
        <li className='links'>
            <NavLink
                exact
                to='/NoMatch'
                activeStyle={{ color: 'Black' }}
                activeClassName='activo'
                className='linkName'>
                Hoteles</NavLink>
        </li>
        <li className='links'>
            <NavLink
                exact
                to='/NoMatch'
                activeStyle={{ color: 'Black' }}
                activeClassName='activo'
                className='linkName'>
                Rooms</NavLink>
        </li>
        <li className='links'>
            <NavLink
                exact
                to='/NoMatch'
                activeStyle={{ color: 'Black' }}
                activeClassName='activo'
                className='linkName'>
                Flights</NavLink>
        </li>
        <li className='links'>
            <NavLink
                exact
                to='/NoMatch'
                activeStyle={{ color: 'Black' }}
                activeClassName='activo'
                className='linkName'>
                Cars</NavLink>
        </li>
        <li className='links'>
            <NavLink
                exact
                to='/NoMatch'
                activeStyle={{ color: 'Black' }}
                activeClassName='activo'
                className='linkName'>
                Experiences</NavLink>
        </li>

    </ul>
)
export default NavBarLeft