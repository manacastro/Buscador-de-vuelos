import React from 'react';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';
import Card from 'components/Card/Card';

const CardInfo = () => (  
    <ResultsContextConsumer>
        {
            ({ flights }) =>                 
                flights.map(flightInfo =>
                <Card flightInfo={flightInfo} />)               
            
        }
    </ResultsContextConsumer> 
)

export default CardInfo