import React from 'react';
import Languages from 'components/Languages/Languages';
import Exchanges from 'components/Exchanges/Exchanges';
import MyAccount from 'components/MyAccount/MyAccount';
import PopularExchanges from 'components/PopularExchanges/PopularExchages'
import flag from 'assets/images/flag2.png';
import './NavBarRight.scss';

const NavBarRight = () => (
    <section className='NavRight'>
        <h1 className='exchange'>USD</h1>
        <img src={flag} alt=''className='flag'/>
        <MyAccount/>
        <PopularExchanges/>
        <Exchanges />        
        <Languages />
    </section>
)

export default NavBarRight;