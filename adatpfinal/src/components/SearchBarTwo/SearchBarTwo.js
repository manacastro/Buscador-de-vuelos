import React from 'react'
import './SearchBarTwo.scss';
import { faMapMarkerAlt, faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import SearchInput, { SEARCHINPUT_RELATIONS, SEARCHINPUT_POSITIONS, SEARCHINPUT_DIMENSIONS } from 'components/SearchInput/SearchInput'
import Button from 'components/Button/Button';
import { SearchContextConsumer } from 'components/Contexts/SearchContext';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';
import { withRouter } from 'react-router-dom'

class SearchBarTwo extends React.Component {
    redirect = () => {
        this.props.history.push('/FlightsResults')
    }
    render() {
        const { title, subtitle } = this.props
        return (
            <div className='searchTwo'>
                {/* <h1>{title}</h1>
                <p>{subtitle}</p> */}
                <SearchContextConsumer>
                    {
                        ({ iataOrigin, modifyInfoiataOrigin,
                            iataDest, modifyInfoIataDest,
                            fromDate, modifyInfoFromDate,
                            toData, modifyInfoToData,
                            adults, modifyAdults }) => (
                                <div className='searchBarTwo'>  
                                                                     
                                    <SearchInput value={iataOrigin} onChange={modifyInfoiataOrigin} relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faMapMarkerAlt} placeholder={'Departure'} />
                                    <SearchInput value={iataDest} onChange={modifyInfoIataDest} relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faMapMarkerAlt} placeholder={'Arrival'} />
                                    <SearchInput value={fromDate} onChange={modifyInfoFromDate} relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
                                    <SearchInput value={toData} onChange={modifyInfoToData} relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
                                    <SearchInput value={adults} onChange={modifyAdults} relation={SEARCHINPUT_RELATIONS.JOINED} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.MEDIUM} icon={faUserFriends} type={'number'} placeholder={'1'} />
                                    <ResultsContextConsumer>
                                        {
                                            ({ loadFlights }) => (
                                                <Button onClick={() => {
                                                    loadFlights(iataOrigin, iataDest, fromDate, toData, adults)
                                                    this.redirect()
                                                }} />
                                            )
                                        }
                                    </ResultsContextConsumer>
                                </div>
                            )
                    }

                </SearchContextConsumer>

            </div>
        )
    }
}

export default withRouter(SearchBarTwo)