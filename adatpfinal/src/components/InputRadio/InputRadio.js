import React from 'react'
import './InputRadio.scss';

const InputRadio = () => (
    <div className='SectionRadio interior'>
        <div className='BlockRadio'>
            <input className='RadioInput' type='radio' name='radio' value='' />
            <p className='textRadio'>Round Trip</p>
        </div>
        <div className='BlockRadio'>
            <input className='RadioInput' type='radio'  name='radio' value='' />
            <p className='textRadio'>One Way</p>
        </div>
    </div>
)

export default InputRadio