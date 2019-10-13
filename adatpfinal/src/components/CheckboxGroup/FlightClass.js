import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const FlightClass = () => (
    <div className='checkboxGroup' >
        <h3>FLIGHT CLASS</h3>
            <Checkbox 
                option={`Economy`}
                price={`316`}
            />
            <Checkbox 
                option={`Business`}
                price={`402`}
            />
            <Checkbox 
                option={`First`}
                price={`385`}
            />   
    </div>
)

export default FlightClass