import React from 'react';
import './Itinerary.scss';
import PlanesArrival from 'components/PlanesArrival/PlanesArrival';
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import PlanesDeparture from 'components/PlanesDeparture/PlanesDeparture';

class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  render() {
    const duration = this.props.totalDuration;
    const intermediateIATA = this.props.intermediateIATA === this.props.destinationIata || this.props.intermediateIATA == this.props.originIata ? "" : this.props.intermediateIATA;
    const originIata = this.props.originIata;
    const destinationIata = this.props.destinationIata;

    return (
      <div className='itinerary'>
        <strong className='duration'>{duration}</strong>
        <section className='sectionAirports'>
          <div className='sectionPlane initial'>
            <PlanesDeparture icon={faPlane} className='MediaIcon' />
            <div className='point'></div>
            <div className='airport'>{originIata}</div>
          </div>
          <div className='intermediate'>
            <div className={intermediateIATA == "" ? 'intermediatePoint hide' : 'intermediatePoint show'}></div>
            <div className='intermediateAirport'>{intermediateIATA}</div>
          </div>
          <div className='sectionPlane ending'>
            <PlanesArrival icon={faPlane} className='MediaIcon' />
            <div className='point'></div>
            <div className='airport'>{destinationIata}</div>
          </div>
        </section>
        <div className='itineraryPath' />

      </div>
    );
  }
}

export default Itinerary