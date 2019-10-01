import React from 'react';
import './Card.scss';
import AirportDateTime from 'components/AirportDateTime/AirportDateTime';

const Card = ({ flightInfo }) => (
 
    <section className='sectionCard'>
        {/* <p>{flightInfo.id}</p> */}
        <div className='price'>${flightInfo.price}</div>
        <p className='Subprice'>economy</p>
        <button className='buttonbookNow'>Book Now</button>
        <div className='going'>
            <AirportDateTime dateTime={flightInfo.first.originFulldate} airport={flightInfo.first.originIata} />
            <div className='totalDuration'>{flightInfo.first.totalDuration}</div>
            <div className='originIntermediateIata'>{flightInfo.first.originIntermediateIata}</div>
            <AirportDateTime dateTime={flightInfo.first.destinationFulldate} airport={flightInfo.first.destinationIata} />
            <div className='originCarrierCode'>Operated by {flightInfo.first.originCarrierCode}</div>
            {/* <div className='destinationCarrierCode'>Operated by {flightInfo.first.destinationCarrierCode}</div> */}
        </div>
        <div>---------------------------------------------------------------------</div>
        <div className='return'>
            <AirportDateTime dateTime={flightInfo.second.originFulldate} airport={flightInfo.second.originIata} />    
            <div className='totalDurationReturn'>{flightInfo.second.totalDuration}</div>
            <AirportDateTime dateTime={flightInfo.second.destinationFulldate} airport={flightInfo.second.destinationIata} />
            <div className='originIntermediateIataReturn'>{flightInfo.second.originIntermediateIata}</div>
            <div className='originCarrierCodeReturn'>Operated by {flightInfo.second.originCarrierCode}</div>
            {/* <div className='destinationCarrierCodeReturn'>Operated by {flightInfo.second.destinationCarrierCode}</div> */}
        </div>
        {/* <div className='originCount'>{flightInfo.first.originCount}</div> */}
        {console.log(flightInfo)}
    </section>
)

export default Card