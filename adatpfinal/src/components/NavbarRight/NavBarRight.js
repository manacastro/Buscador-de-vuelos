import React from 'react';
import Languages from 'components/Languages/Languages';
import Exchange from 'components/Exchange/Exchange';
import MyAccount from 'components/MyAccount/MyAccount';


const NavBarRight = () => (
    <section className='NavRight'>
        <Exchange />
        <Languages />
        <MyAccount/>
    </section>
)

export default NavBarRight;