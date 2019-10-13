import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const DestinyAirport = () => (
    <div className='checkboxGroup' >
        <h3>NEW YORK AIRPORT</h3>
            <Checkbox 
                option={`JFK: John F.Kennedy`}
                price={`256`}
            />
            <Checkbox 
                option={`LGA: La Guardia`}
                price={`212`}
            />
            <Checkbox 
                option={`EWR: Newark Liberty`}
                price={`384`}
            />  
    </div>
)

export default DestinyAirport