import React from 'react';
import './Card.scss';
import AirportDateTime from 'components/AirportDateTime/AirportDateTime';
import Itinerary from 'components/Itinerarys/Itinerary';

const Card = ({ flightInfo }) => (

    <section className='sectionCard'>
        <div className='Book'>
            <div className='price'>${flightInfo.price}</div>
            <p className='Subprice'>economy</p>
            <button className='buttonbookNow'>Book Now</button>
        </div>
        <section className='infoBook'>
            <section className='section'>
                {/* <p>{flightInfo.id}</p> */}
                <div className='dataFlightbook'>
                    <AirportDateTime dateTime={flightInfo.first.originFulldate} airport={flightInfo.first.originIata} />
                    <Itinerary totalDuration={flightInfo.first.totalDuration} originIata={flightInfo.first.originIata} destinationIata={flightInfo.first.destinationIata} segmentCount={flightInfo.first.originCount} intermediateIATA={flightInfo.first.originIntermediateIata} />
                    <AirportDateTime dateTime={flightInfo.first.destinationFulldate} airport={flightInfo.first.destinationIata} />                    
                </div>
                <div className='carrierCode'>Operated by {flightInfo.first.originCarrierCode}</div>
            </section>
            <div className='separator'>--------------------------------------------------------------------------------</div>
            <section className='section'>
                <div className='dataFlightbook'>
                    <AirportDateTime dateTime={flightInfo.second.originFulldate} airport={flightInfo.second.originIata} />
                    <Itinerary totalDuration={flightInfo.second.totalDuration} originIata={flightInfo.second.originIata} destinationIata={flightInfo.second.destinationIata} segmentCount={flightInfo.second.originCount} intermediateIATA={flightInfo.first.originIntermediateIata} />
                    <AirportDateTime dateTime={flightInfo.second.destinationFulldate} airport={flightInfo.second.destinationIata} />                    
                </div>
                <div className='carrierCode'>Operated by {flightInfo.second.originCarrierCode}</div>
            </section>
        </section>
    </section>
)

export default Card