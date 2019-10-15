import React from 'react'
import './InputRadioInterior.scss';

const InputRadioInterior = () => (
    <div className='SectionRadioInterior'>
        <div className='BlockRadioInterior'>
            <input className='RadioInputInterior' type='radio' name='radio' value='' />
            <p className='textRadioInterior'>Round Trip</p>
        </div>
        <div className='BlockRadioInterior'>
            <input className='RadioInputInterior' type='radio' name='radio' value='' />
            <p className='textRadioInterior'>One Way</p>
        </div>
    </div>
)
export default InputRadioInterior