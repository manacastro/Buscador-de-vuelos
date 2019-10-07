import React from 'react';
import moment from "moment";
import './AirportDateTime.scss';

class AirportDateTime extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD"),
        airportState: ""
    };
    render() {
       
        const formattedDate = moment(this.props.dateTime).format('ll');
        const time = moment(this.props.dateTime).format('hh:mm');
        const ampm = moment(this.props.dateTime).format('A');

        if(this.state.airportState === ""){
            fetch(`https://airports-dpvsjndcod.now.sh/city/${this.props.airport}`)
                    .then(response => response.json())
                    .then(res => this.setState({ airportState: res.state }))
        }

        return (
            <div className='CardFlight'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p className='time'>{time}</p>
                        <b className='ampm'>{ampm}</b>
                    </div>
                    <p className='exit'>{this.state.airportState}</p>
                    <div className='date-container'>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AirportDateTime
