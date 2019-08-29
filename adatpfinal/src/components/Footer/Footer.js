import React from 'react'
import './Footer.scss';
import { NavLink } from 'react-router-dom'
import { faFacebookF, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import SocialMedia from 'components/SocialMedia/SocialMedia'

const Footer = () => (
    <section className='FooterSection'>
        <ul className='linksNabFooter' >
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Hoteles</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Rooms</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Flights</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Cars</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Experiences</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Abaut us</NavLink>
            </li>
            <li className='linksFooter'>
                <NavLink
                    exact
                    to='/NoMatch'
                    activeStyle={{ color: 'Black' }}
                    activeClassName='activo'
                    className='linkNameFooter'>
                    Contact</NavLink>
            </li>
        </ul>
        <ul className='Media'>
            <li className='MediaContainer'><SocialMedia icon={faFacebookF} className='MediaIcon' /></li>
            <li className='MediaContainer'><SocialMedia icon={faTwitter} className='MediaIcon'/></li>
            <li className='MediaContainer'><SocialMedia icon={faGoogle} className='MediaIcon'/></li>
            <li className='MediaContainer'><SocialMedia icon={faInstagram} className='MediaIcon'/></li>
        </ul>
        <div className='Copyright'>Copyright © 2019 Adantrip. All rights reserved.</div>
    </section>
)

export default Footer