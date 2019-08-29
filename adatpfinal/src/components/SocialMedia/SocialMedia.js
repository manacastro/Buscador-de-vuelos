import React from 'react';
import './SocialMedia.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({icon}) => (
    <div className ='sectionMedia'>
        <FontAwesomeIcon icon={icon} className='MediaIcon'/>         
    </div>

)

export default SocialMedia;