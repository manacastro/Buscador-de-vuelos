import React from 'react';
import './Advertisement.scss'

export const ADVERTISEMENT_SIZES = {
    SIMPLE: 'simple',
    DOUBLE: 'double'
}
const Advertisement = ({src, size}) => (
    <div className={`Advertisement ${size} `}>
        <p>Advertisment</p>
        <img src={src}/>
    </div>
)
export default Advertisement