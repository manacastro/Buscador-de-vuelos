import React from 'react'
import { withRouter } from 'react-router-dom';
import fondo from 'assets/images/big-ben.jpg';
import CardInfo from 'components/CardInfo/CardInfo'

class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/BookingRersults')
  }
  render() {
    return (
      <div>
        <div className='Contentbig-ben'>
          <img src={fondo} className='big-benImage' />
        </div>
        <h1>FlightsResults</h1>
        <button onClick={this.redirect}>Ir a contact</button>
        <CardInfo/>
      </div>
    )
  }
}
export default withRouter(FlightsResults)