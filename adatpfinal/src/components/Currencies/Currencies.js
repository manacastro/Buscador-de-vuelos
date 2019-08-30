import React from 'react';
import './Currencies.scss';

const Currencies = (exchange) => (
    <div className='ContentCurrencies'>
        
        <p className='codeCurrencies'>{exchange.exchange.code} </p>
        <p className='TitleCurrencies'>{exchange.exchange.title}</p>
    </div>
)

export default Currencies