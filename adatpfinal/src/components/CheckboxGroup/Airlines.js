import React from 'react';
import Checkbox from 'components/Checkbox/Checkbox'
import './../CheckboxGroup/CheckboxGroup.scss'

const Airlines = () => (
    <div className='checkboxGroup' >
        <h3>AIRLINES</h3>
            <Checkbox 
                option={`KML Royal Dutch...`}
                price={`256`}
            />
            <Checkbox 
                option={`LOT Polish Airlines`}
                price={`179`}
            />
            <Checkbox 
                option={`Wow Airlines`}
                price={`105`}
            />  
            <Checkbox 
                option={`Virgin Atlantic...`}
                price={`407`}
            />
            <Checkbox 
                option={`Delta Airlines`}
                price={`268`}
            />
            <Checkbox 
                option={`SWISS Airlines`}
                price={`348`}
            />
            <Checkbox 
                option={`Lufthanza`}
                price={`329`}
            />
            <Checkbox 
                option={`American Airlines`}
                price={`453`}
            />
            <Checkbox 
                option={`Fly Emirates`}
                price={`483`}
            />
    </div>
)

export default Airlines