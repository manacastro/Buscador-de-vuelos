import React from 'react'
import Advertisement, {ADVERTISEMENT_SIZES} from 'components/Advertisement/Advertisement'
import publicidad1 from '../../assets/images/publicidad1.jpg'
import publicidad2 from '../../assets/images/publicidad2.jpg'
import './AsideRight.scss'

const AsideRight = () => (
    <div className='asideRight sticky-column'>
        <Advertisement 
            size={ADVERTISEMENT_SIZES.DOUBLE}
            src={publicidad1}
        />
        <Advertisement 
            size={ADVERTISEMENT_SIZES.SIMPLE}
            src={publicidad2}
        />
    </div>
)

export default AsideRight