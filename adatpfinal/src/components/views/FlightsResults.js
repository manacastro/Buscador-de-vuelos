import React from 'react'
import { withRouter } from 'react-router-dom';
//import fondo from 'assets/images/big-ben.jpg';
import CardInfo from 'components/CardInfo/CardInfo'
import CardFlight from 'components/CardFlight/CardFlight';
//import SearchBar from 'components/SearchBar/SearchBar';

class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/BookingResults')
  }
  render() {
    return (
      <div className='GeneralFlightsResults'>
        <div className='ContentBig-ben'>
          {/* <img src={fondo} className='big-benImage' /> */}
        </div>
        {/* <CardFlight/>         */}
        <CardInfo/>
      </div>
    )
  }
}
export default withRouter(FlightsResults)