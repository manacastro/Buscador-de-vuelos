import React from 'react';
import './PlanesArrival.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanesArrival = ({icon})  => (
    <div className ='Planes'>
        <FontAwesomeIcon icon={icon} className='PlaneIcon' />         
    </div>
)

export default PlanesArrival