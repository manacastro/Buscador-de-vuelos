import React from 'react';
import './MyAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const MyAccount = () => (
    <section className='SectionAccount'>
        <FontAwesomeIcon icon={faUserCircle} className='UserIcon' />
        <h1 className='TitleDropDown'>My Account</h1>
    </section>
)

export default MyAccount