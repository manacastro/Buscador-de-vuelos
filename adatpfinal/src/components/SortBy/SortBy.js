import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './SortBy.scss';

const SortBy = () => (
    <div className="sortBy">
        <div className='title'>Sort by:</div>
        <div className='item'>Price
            <div className='scale'>
                <p>Low</p>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                <p>High</p>
            </div>
        </div>
        <div className='item itemDuration'>Duration
            <div className='scale'>
                <p className='scaleColor'>Long</p>
                <FontAwesomeIcon icon={faLongArrowAltRight} className='iconScale' />
                <p className='scaleColor'>Short</p>
            </div>
        </div>
        <div className='item'>Recommended
            <div className='scale'>
                <p>High</p>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                <p>Low</p>
            </div>
        </div>
        <div className='item'>Airline Name
            <div className='scale'>
                <p>Name A</p>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                <p>Z</p>
            </div>
        </div>
        <div className='menu'>
            <p className='more'>More</p>
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className='dropdownMenu'>
            <ul className='listDropdownMenu'>
                <li className='itemsDropdownMenu'>Departure take-off</li>
                <li className='itemsDropdownMenu'>Departure landing</li>
                <li className='itemsDropdownMenu'>Return take-off</li>
                <li className='itemsDropdownMenu'>Return landing</li>
            </ul>
        </div>

    </div>
)
export default SortBy