import React from 'react';
import './Feature.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Feature = ({icon, title, text}) => (
    <div className ='Feature'>
        <FontAwesomeIcon icon={icon} className='FeatureIcon'/> 
        <h1 className='FeatureTitle'>{title}</h1>
        <h2 className='FeatureText'>{text}</h2>
    </div>

)

export default Feature;