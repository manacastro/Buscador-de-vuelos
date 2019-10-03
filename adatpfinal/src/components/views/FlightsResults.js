import React from 'react'
import './FlightsResults.scss'
import { withRouter } from 'react-router-dom';
import CardInfo from 'components/CardInfo/CardInfo'
import SearchBarTwo from 'components/SearchBarTwo/SearchBarTwo';
import TitleOnSearchBar from 'components/TitleOnSearchBar/TitleOnSearchBar';
import InputRadio from 'components/InputRadio/InputRadio';

class FlightsResults extends React.Component {
  redirect = () => {
    this.props.history.push('/BookingResults')
  }
  render() {
    return (
      <div className='GeneralFlightsResults'>
        <SearchBarTwo />
        <TitleOnSearchBar />
        <InputRadio/>
        <div className='ContentBig-ben'>
          {/* <img src={fondo} className='big-benImage' /> */}
        </div>
        <CardInfo />
      </div>
    )
  }
}
export default withRouter(FlightsResults)