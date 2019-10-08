import React from 'react';
import { NavLink } from 'react-router-dom'
import adantrip from 'assets/images/adantrip.png';
import footerSubscribe from 'assets/images/footerSubscribe.png';
import './FlightResultFooter.scss';


const FlightResultFooter = () => (
    <div className='flightResultFooter'>
        <div className='footerIso'>
            <img src={adantrip} alt='' className='iso' />
            <p className='textIso'>Curabitur magnis cursus nam tempor quam risus urna mattis porttitor lorem urna dolor vitae hac
            Ultrices lacinia aliquet euismod aptent netus dis praesent magna elit ultricies malesuada volutpat amet lacus</p>
        </div>
        <div className='ulFooter'>
            <ul className='linksNabFooter' >
                <h1 className='title'>Travel Mate</h1>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Abaut Travel Mate</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Mobile App</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Customer Support</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Advertising</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Jobs</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Privacy Policy</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Terms of Use</NavLink>
                </li>
            </ul>
            <ul className='linksNabFooter'>
                <h1 className='title'>Explore</h1>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Countries</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Regions</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Cities</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Districs</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Airports</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Hotels</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Places of Interest</NavLink>
                </li>
            </ul>
            <ul className='linksNabFooter'>
                <h1 className='title'>Book</h1>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Apartments</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Resorts</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Villas</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Hostels</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        B&Bs</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Guesthouses</NavLink>
                </li>
                <li className='linksFooter'>
                    <NavLink
                        exact
                        to='/NoMatch'
                        activeStyle={{ color: 'Black' }}
                        activeClassName='activo'
                        className='linkNameFooter'>
                        Hotel Chains</NavLink>
                </li>
            </ul>
        </div>
        <img src={footerSubscribe} alt='' className='imgfinal' />
    </div>
)
export default FlightResultFooter