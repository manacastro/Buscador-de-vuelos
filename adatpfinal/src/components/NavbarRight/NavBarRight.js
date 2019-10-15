import React from 'react';
import Exchanges from 'components/Exchanges/Exchanges';
import MyAccount from 'components/MyAccount/MyAccount';
import PopularExchanges from 'components/PopularExchanges/PopularExchages'
import flag from 'assets/images/flag2.png';
import './NavBarRight.scss';
import Languages from 'components/Languages/Languages';
import DropdowAccount from 'components/DropdowAccount/DropdowAccount';

const NavBarRight = () => (
    <section className='NavRight'>
        <h1 className='exchange'>USD</h1>
        <div className='TotalExchanges'>
            <Exchanges />
            <PopularExchanges />
        </div>
        <div className='ContentFlag'>
            <img src={flag} alt='' className='flag' />
        </div>
        <Languages />
        <MyAccount />
        <DropdowAccount />
    </section>
)

export default NavBarRight;