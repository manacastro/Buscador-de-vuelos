import React from 'react';
import './Airline.scss';

class Airline extends React.Component {
    state = {
        airlineDescription: ""
    };
    render() {

        if(this.state.airlineDescription === ""){
        fetch(`https://aviation-edge.com/v2/public/airlineDatabase?key=a88f0f-51b498&codeIataAirline=${this.props.airline}`)
            .then(response => response.json())
            .then(res => this.setState({ airlineDescription: res[0].nameAirline }))
        }
        
        return (
            <div className='contentLogo'>
                <img className="carrierLogo" src={"https://content.airhex.com/content/logos/airlines_" + this.props.airline + "_200_200_s.png"}></img>
                <div className='carrierCode'>Operated by {this.state.airlineDescription}</div>
            </div>
        )
    }
}

export default Airline
