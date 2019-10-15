import React from 'react'
import './FlightsResults.scss'
import { withRouter } from 'react-router-dom';
import CardInfo from 'components/CardInfo/CardInfo'
import SearchBar from 'components/SearchBar/SearchBar'
import AsideLeft from 'components/AsideLeft/AsideLeft';
import AsideRight from 'components/AsideRight/AsideRight';
import FlightResultFooter from 'components/FlightResultFooter/FlightResultFooter'
import { SEARCHINPUT_RELATIONS, SEARCHINPUT_POSITIONS, SEARCHINPUT_DIMENSIONS } from 'components/SearchInput/SearchInput';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import InputRadioInterior from 'components/InputRadioInterior/InputRadioInterior';
import LoadMore from 'components/LoadMore/LoadMore'

class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/BookingResults')
  }
  render() {
    return (
      <div className='GeneralFlightsResults'>
        <SearchHeader parent="interior" />
        <SearchBar relation={SEARCHINPUT_RELATIONS.DISJOINED} parent="interior" />
        <InputRadioInterior />
        <div className='ContentBig-ben'></div>
        <div className='mainColumn'>
          <AsideLeft />
          <div className='centralColumn'>
            <CardInfo />
            <LoadMore />
          </div>          
          <AsideRight />
        </div>
        <FlightResultFooter />
      </div>
    )
  }
}
export default withRouter(FlightsResults)