import React from 'react'
import { withRouter } from 'react-router-dom';
import Flights from 'components/Flights/Flights';
import fondo from 'assets/images/big-ben.jpg';
import Card from 'components/Card/Card';


class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/contact')
  }
  render() {
    return (
      <div>
        <div className='Contentbig-ben'>
          <img src={fondo} className='big-benImage' />
        </div>
        <Flights />
        <h1>FlightsResults</h1>
        <button onClick={this.redirect}>Ir a contact</button>
        <Card/>
      </div>
    )
  }
}

export default withRouter(FlightsResults)

//withrouter le agrega -- high order component HOC - para redireccionar sin ser un link