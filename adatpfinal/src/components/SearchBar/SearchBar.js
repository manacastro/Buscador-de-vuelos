import React from 'react'
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUserFriends, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
    <section className='SearchBar'>
        <div className='SectionInputSearchBar'>
        <FontAwesomeIcon icon={faMapMarkerAlt} className='IconSearchbar'/>
        <input className='InputSearchBar' type='text' value='Departure' />
        </div>
        <div className='SectionInputSearchBar'>
        <FontAwesomeIcon icon={faMapMarkerAlt} className='IconSearchbar'/>
        <input className='InputSearchBar' type="text" value='Arribal' />
        </div>
        <div className='SectionInputSearchBar'>
        <FontAwesomeIcon icon={faCalendarAlt} className='IconSearchbar'/>
        <input className='InputSearchBar' type="date" value='' />
        </div>
        <div className='SectionInputSearchBar'>
        <FontAwesomeIcon icon={faCalendarAlt} className='IconSearchbar'/>
        <input className='InputSearchBar' type="date" value='' />
        </div>
        <div className='SectionInputSearchBar'>
        <FontAwesomeIcon icon={faUserFriends} className='IconSearchbar'/>
        <input className='InputSearchBar' type="number"placeholder='1'/>
        </div>
        <div className='ButtonOk'>        
        <button className='ButtonArrow'><FontAwesomeIcon icon={faChevronRight} className='ArrowIcon'/></button>
        </div>
    </section>
)

export default SearchBar