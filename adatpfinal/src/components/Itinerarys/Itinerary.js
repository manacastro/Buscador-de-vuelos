import React from 'react';
import moment from "moment";
import './Itinerary.scss';

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
    const airports = ["A", "B", "C", "D", "E"];

    return (
      <>
        <strong>{duration}</strong>
        <section className='airports'>
          <div>{originIata}</div>
          <div>{intermediateIATA}</div>
          <div>{destinationIata}</div>
        </section>
        <div className='itineraryPath' />
        {/* <InputRange
          maxValue={this.props.segmentCount + 1}
          minValue={1}
          value={this.state.value}
          formatLabel={value => airports[this.state.value]} /> */}
      </>
    );
  }
}

export default Itinerary