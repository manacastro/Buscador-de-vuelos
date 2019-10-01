import React from 'react'
import { withRouter } from 'react-router-dom';
import CardInfo from 'components/CardInfo/CardInfo'

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
        <CardInfo/>
      </div>
    )
  }
}
export default withRouter(FlightsResults)