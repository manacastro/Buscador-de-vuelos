import React from 'react';
//import moment from "moment";
import './Itinerary.scss';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  render() {
    const duration = this.props.totalDuration;
    const intermediateIATA = this.props.intermediateIATA;
    const originIata = this.props.originIata;
    const destinationIata = this.props.destinationIata;

    return (
      <div className='itineray'>
        <strong className='duration'>{duration}</strong>
        <section className='sectionAirports'>
          <div className='airports'>{originIata}</div>
          <div className='airports'>{intermediateIATA}</div>
          <div className='airports'>{destinationIata}</div>
        </section>
        <div className='itineraryPath' />
        {/* <InputRange
          classNames='airports'
          maxValue={destinationIata} 
          minValue={originIata}
          // value={this.state.value}
          //formatLabel={value => airports[this.state.value]} 
          /> */}
      </div>
    );
  }
}

export default Itinerary