import React from 'react';
import './Card.scss'

const Card = ({flightInfo}) => (
    <section className='sectionCard'>
        {/* <p>{flightInfo.id}</p> */}
        <div className='price'>${flightInfo.price}</div>
        <p className='Subprice'>economy</p>
        <button className='buttonbookNow'>Book Now</button>
        <div className='originFulldate'>{flightInfo.first.originFulldate}</div>
        <div className='destinationFulldate'>{flightInfo.first.destinationFulldate}</div>
        <div className='totalDuration'>{flightInfo.first.totalDuration}</div>
        <div className='originIata'>{flightInfo.first.originIata}</div>
        <div className='destinationIata'>{flightInfo.first.destinationIata}</div>
        <div className='originCount'>{flightInfo.first.originCount}</div>
        <div className='originIntermediateIata'>{flightInfo.first.originIntermediateIata}</div>
        <div className='originCarrierCode'>Operated by {flightInfo.first.originCarrierCode}</div>
        <div className='destinationCarrierCode'>Operated by {flightInfo.first.destinationCarrierCode}</div> 
          
        {console.log(flightInfo)}        
    </section>
)

export default Card