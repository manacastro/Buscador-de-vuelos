import React from 'react';
import './PlanesDeparture.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanesDeparture = ({icon})  => (
    <div className ='Planes'>
        <FontAwesomeIcon icon={icon} className='PlaneIconDeparture' />         
    </div>
)

export default PlanesDeparture