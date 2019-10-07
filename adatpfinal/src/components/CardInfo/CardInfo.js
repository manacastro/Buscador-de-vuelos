import React from 'react';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';
import Card from 'components/Card/Card';
import './CardInfo.scss'

const CardInfo = () => (
    <div className='cardGroup'>
        <ResultsContextConsumer>
            {
                ({ flights }) =>
                    flights.map(flightInfo => <Card flightInfo={flightInfo} />)
            }
        </ResultsContextConsumer>
    </div>
)

export default CardInfo