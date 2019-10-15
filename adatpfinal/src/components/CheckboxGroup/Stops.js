import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const Stops = () => (
    <div className='checkboxGroup' >
        <h3>STOPS</h3>
            <Checkbox 
                option={`nonstop`}
                price={`493`}
            />
            <Checkbox 
                option={`1 stop`}
                price={`300`}
            />
            <Checkbox 
                option={`2 stops`}
                price={`414`}
            />   
    </div>
)

export default Stops