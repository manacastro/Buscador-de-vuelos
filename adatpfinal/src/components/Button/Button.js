import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Button.scss'

const Button = ({onClick}) => (
    <div className='button' onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight}/>       
    </div>
)
export default Button