import React from 'react';

const Card = ({flightInfo}) => (
    <>
        <p>{flightInfo.id}</p>
        <p>{flightInfo.price}</p>
        {console.log(flightInfo)/* <p>{flightInfo.itineraries}</p> */}
        
    </>
)

export default Card