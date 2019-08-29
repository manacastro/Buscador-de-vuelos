import React from 'react';
import adantrip from 'assets/images/adantrip.png';
import './NavBar.scss';
import NavBarRight from 'components/NavbarRight/NavBarRight';
import NavBarLeft from 'components/NavBarLeft/NavBarLeft';

const NavBar = () => (
    <>
        <div className='navContainer'>
            <div className='containerIso' >
                <img src={adantrip} alt='' className='isoAdantrip' />
            </div>
           <NavBarLeft/>
            <NavBarRight />
        </div>
    </>
)

export default NavBar;