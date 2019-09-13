import React from 'react';

const Card = ({flightInfo}) => (
    <>
        <p>{flightInfo.id}</p>
        <p>{flightInfo.price}</p>
        <p>{flightInfo.itineraries}</p>
        {/* <p>HOLA</p> */}
    </>
)

export default Card