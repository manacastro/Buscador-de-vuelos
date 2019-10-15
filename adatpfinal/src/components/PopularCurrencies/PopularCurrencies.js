import React from 'react';
import './PopularCurrencies.scss';

const PopularCurrencies = (popularExchange) => (
    <div className='ContentPopularCurrencies'>        
        <p className='codePopularCurrencies'>{popularExchange.popularExchange.code} </p>
        <p className='TitlePopularCurrencies'>{popularExchange.popularExchange.title}</p>
    </div>
)

export default PopularCurrencies