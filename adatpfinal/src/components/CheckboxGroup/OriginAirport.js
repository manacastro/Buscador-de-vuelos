import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const OriginAirport = () => (
    <div className='checkboxGroup' >
        <h3>LONDON AIRPORT</h3>
            <Checkbox 
                option={`CLY: City`}
                price={`476`}
            />
            <Checkbox 
                option={`LHR: Heathrow`}
                price={`304`}
            />
            <Checkbox 
                option={`LCW: Gatwich`}
                price={`245`}
            />  
            <Checkbox 
                option={`STN: Standsed`}
                price={`198`}
            /> 
            <Checkbox 
                option={`SEN: Southend`}
                price={`454`}
            /> 
    </div>
)

export default OriginAirport