import React from 'react'
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUserFriends, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SearchInput, { SEARCHINPUT_RELATIONS, SEARCHINPUT_POSITIONS, SEARCHINPUT_DIMENSIONS } from 'components/SearchInput/SearchInput'

const SearchBar = ({ title, subtitle }) => (
    <div className='search'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className='searchBar'>
            <SearchInput relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.LEFTEXTREME} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faMapMarkerAlt} placeholder={'Departure'} />
            <SearchInput relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faMapMarkerAlt} placeholder={'Arrival'} />
            <SearchInput relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
            <SearchInput relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
            <SearchInput relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faUserFriends} type={'number'} placeholder={'1'} />           
            <div className='ButtonOk'>
                <button className='ButtonArrow'><FontAwesomeIcon icon={faChevronRight} className='ArrowIcon' /></button>
            </div>
        </div>

    </div>
)

export default SearchBar