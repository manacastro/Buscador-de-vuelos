import React from 'react';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';
import Card from 'components/Card/Card';
import SortBy from 'components/SortBy/SortBy'
import './CardInfo.scss'

const CardInfo = () => (
    <div className='cardGroup'>
        <SortBy/>
        <ResultsContextConsumer>
            {
                ({ flights }) =>
                    flights.map(flightInfo => <Card flightInfo={flightInfo} />)
            }
        </ResultsContextConsumer>
    </div>
)

export default CardInfo