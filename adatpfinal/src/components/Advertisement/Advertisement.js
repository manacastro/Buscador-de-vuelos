import React from 'react';
import './Advertisement.scss'

export const ADVERTISEMENT_SIZES = {
    SIMPLE: 'simple',
    DOUBLE: 'double'
}
const Advertisement = ({src, size}) => (
    <div className={`advertisement ${size} `}>
        <img src={src}/>
    </div>
)
export default Advertisement