import React from 'react';
import './Checkbox.scss'

const Checkbox = ({option, price, range}) => (
    <div className='checkbox' >
        <div className='options'>
            <div className='group'>
                <div className='option'>
                    <div className='line'>
                        <input className='checkbox' type='checkbox'/>
                        <h4>{option}</h4>
                    {/* <span className='checkmark'></span> */}
                    </div>
                    <div className='range'>
                        <h4>{range}</h4>
                    </div>
                </div>
                <h4>${price}</h4>
            </div>
        </div>
    </div>
)

export default Checkbox