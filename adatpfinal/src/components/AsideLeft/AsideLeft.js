import React from 'react'
import Stops from 'components/CheckboxGroup/Stops'
import FlightClass from 'components/CheckboxGroup/FlightClass'
import TakeOffOrigin from 'components/CheckboxGroup/TakeOffOrigin'
import LandingDestiny from 'components/CheckboxGroup/LandingDestiny'
import TakeOffDestiny from 'components/CheckboxGroup/TakeOffDestiny'
import LandingOrigin from 'components/CheckboxGroup/LandingOrigin'
import OriginAirport from 'components/CheckboxGroup/OriginAirport'
import DestinyAirport from 'components/CheckboxGroup/DestinyAirport'
import Airlines from 'components/CheckboxGroup/Airlines'
import Advertisement, {ADVERTISEMENT_SIZES} from 'components/Advertisement/Advertisement'
import publicidad from '../../assets/images/publicidad0.jpg'
import './AsideLeft.scss'
import PriceBar from 'components/PriceBar/PriceBar'

const AsideLeft = () => (
    <div className='asideLeft sticky-column'>
        <Stops />
        <FlightClass />
        <PriceBar/>
        <TakeOffOrigin />
        <LandingDestiny />
        <TakeOffDestiny />
        <LandingOrigin/>
        <OriginAirport />
        <DestinyAirport />
        <Airlines/>
        <Advertisement
            size={ADVERTISEMENT_SIZES.SIMPLE}
            src={publicidad}
        />
    </div>
)

export default AsideLeft