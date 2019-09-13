import React from 'react';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';

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