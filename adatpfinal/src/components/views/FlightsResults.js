import React from 'react'
import './FlightsResults.scss'
import { withRouter } from 'react-router-dom';
import CardInfo from 'components/CardInfo/CardInfo'
import SearchBarTwo from 'components/SearchBarTwo/SearchBarTwo';
import TitleOnSearchBar from 'components/TitleOnSearchBar/TitleOnSearchBar';
import AsideLeft from 'components/AsideLeft/AsideLeft';
import AsideRight from 'components/AsideRight/AsideRight';
import FlightResultFooter from 'components/FlightResultFooter/FlightResultFooter'

class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/BookingResults')
  }
  render() {
    return (
      <div className='GeneralFlightsResults'>
        <SearchBarTwo />
        <TitleOnSearchBar />        
        <div className='ContentBig-ben'></div>
        <div className='mainColumn'>
          <AsideLeft/>
          <CardInfo />
          <AsideRight/>
        </div> 
        <FlightResultFooter/>      
      </div>
    )
  }
}
export default withRouter(FlightsResults)