import React from 'react';
import moment from "moment";

class AirportDateTime extends React.Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
    render() {
       
        const formattedDate = moment(this.props.dateTime).format('ll');
        const time = moment(this.props.dateTime).format('hh:mm');
        const ampm = moment(this.props.dateTime).format('A');
        return (
            <div className='CardFlight'>
                <div className='time-date-container'>
                    <div className='time-container'>
                        <p className='time'>{time}</p>
                        <b className='ampm'>{ampm}</b>
                    </div>
                    <div className='date-container'>
                        <p>{formattedDate}</p>
                    </div>
                    <p>{this.props.airport}</p>
                </div>
            </div>
        )
    }
}

export default AirportDateTime
