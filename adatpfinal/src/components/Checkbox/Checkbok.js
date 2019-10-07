import React from 'react';
import './Checkbox.scss'

const Checkbox = ({title, option1, option2, option3, price1, price2, price3 }) => (
    <div className='checkbox' >
        <h3>{title}</h3>
            <div className='options'>
                <label className='group'>
                    <div className='option'>
                        <input type='checkbox' checked='checked' />{option1}
                        <span className='checkmark'></span>
                    </div>
                    <p>${price1}</p>
                </label>
                <label className='group'>
                    <div className='option'>
                        <input type='checkbox' checked='' />{option2}
                        <span className='checkmark'></span>
                    </div>
                    <p>${price2}</p>
                </label>
                <label className='group'>
                    <div className='option'>
                        <input type='checkbox' checked='' />{option3}
                        <span className='checkmark'></span>
                    </div>
                    <p>${price3}</p>
                </label>
            </div>
    </div>
)
export default Checkbox