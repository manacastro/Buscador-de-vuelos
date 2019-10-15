import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const TakeOffOrigin = () => (
    <div className='checkboxGroup' >
        <h3>TAKE-OFF LONDON</h3>
            <Checkbox 
                option={`Morning`}
                price={`207`}
                range={`05:00am - 11:59am`}
            />
            <Checkbox 
                option={`Afternoon`}
                price={`168`}
                range={`12:00pm - 05:59pm`}
            />
            <Checkbox 
                option={`Evening`}
                price={`439`}
                range={`06:00pm - 11:59pm`}
            />   
    </div>
)

export default TakeOffOrigin