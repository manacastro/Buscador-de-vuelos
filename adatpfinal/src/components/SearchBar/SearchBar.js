import React from 'react'
import './SearchBar.scss';
import { faMapMarkerAlt, faCalendarAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import SearchInput, { SEARCHINPUT_RELATIONS, SEARCHINPUT_POSITIONS, SEARCHINPUT_DIMENSIONS } from 'components/SearchInput/SearchInput'
import Button from 'components/Button/Button';
import { SearchContextConsumer } from 'components/Contexts/SearchContext';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component {
    redirect = () => {
        this.props.history.push('/FlightsResults')
    }
    render() {
        const { title, subtitle, parent, relation, position, dimension } = this.props
        let header = "";

        return (
            <div className={"search" + parent}>
                <SearchContextConsumer>
                    {
                        ({ iataOrigin, modifyInfoiataOrigin,
                            iataDest, modifyInfoIataDest,
                            fromDate, modifyInfoFromDate,
                            toData, modifyInfoToData,
                            adults, modifyAdults }) => (
                                <div className='searchBar'>
                                    <SearchInput parent={parent} tag="From" value={iataOrigin} onChange={modifyInfoiataOrigin} relation={relation} position={SEARCHINPUT_POSITIONS.LEFTEXTREME} dimension={parent === "interior" ? SEARCHINPUT_DIMENSIONS.MEDIUM : SEARCHINPUT_DIMENSIONS.AUTO} icon={faMapMarkerAlt} placeholder={'Departure'} />
                                    <SearchInput parent={parent} tag="To" value={iataDest} onChange={modifyInfoIataDest} relation={relation} position={SEARCHINPUT_POSITIONS.CENTER} dimension={parent === "interior" ? SEARCHINPUT_DIMENSIONS.MEDIUM : SEARCHINPUT_DIMENSIONS.AUTO} icon={faMapMarkerAlt} placeholder={'Arrival'} />
                                    <SearchInput parent={parent} tag="Arrival" value={fromDate} onChange={modifyInfoFromDate} relation={relation} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
                                    <SearchInput parent={parent} tag="Departure" value={toData} onChange={modifyInfoToData} relation={relation} position={SEARCHINPUT_POSITIONS.CENTER} dimension={SEARCHINPUT_DIMENSIONS.AUTO} icon={faCalendarAlt} type={'date'} placeholder={'dd/mm/yyyy'} />
                                    <SearchInput parent={parent} tag="Passengers" value={adults} onChange={modifyAdults} relation={relation} position={SEARCHINPUT_POSITIONS.CENTER} dimension={parent === "interior" ? SEARCHINPUT_DIMENSIONS.MEDIUM : SEARCHINPUT_DIMENSIONS.SMALL} icon={faUserFriends} type={'number'} placeholder={'1'} />
                                    <ResultsContextConsumer>
                                        {
                                            ({ loadFlights }) => (
                                                <Button parent={parent} onClick={() => {
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

export default withRouter(SearchBar)