import React from 'react'
import Checkbox from 'components/Checkbox/Checkbok'
import Advertisement, {ADVERTISEMENT_SIZES} from 'components/Advertisement/Advertisement'
import publicidad from '../../assets/images/publicidad.jpg'
import './AsideLeft.scss'
import PriceBar from 'components/PriceBar/PriceBar'

const AsideLeft = () => (
    <div className='asideLeft'>
        <Checkbox 
            title={`stops`}
            option1={`nonstop`}
            option2={`1 stop`}
            option3={`2 stops`}
            price1={`493`}
            price2={`300`}
            price3={`414`}
        />
        <Checkbox 
            title={`flight class`}
            option1={`Economy`}
            option2={`Business`}
            option3={`First`}
            price1={`316`}
            price2={`412`}
            price3={`385`}
        />
        <PriceBar/>
        <Advertisement
            size={ADVERTISEMENT_SIZES.SIMPLE}
            src={publicidad}
        />
    </div>
)
export default AsideLeft