import React from 'react';

const API_KEY = 'bcnC8yJtGe7osLOHYaWodrwtLhrT0d1b';
const API_SECRET = 'D27nUImKGRS9DVJ6';

const item = {
    grant_type: 'client_credentials',
    client_id: API_KEY,
    client_secret: API_SECRET
};

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

const ResultsContext = React.createContext()

class ResultsContextProvider extends React.Component {
    state = {
        flights: []
    }
    loadFlights = (iataOrigin, iataDest, fromDate, toData, adults) => {
        fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: toUrlEncoded(item)
        })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.access_token;
                fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toData}&adults=${adults}&max=5`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data.data);   
                        debugger;
                        this.upDateFlightInfo(data.data)
                    })
            })
    }
    upDateFlightInfo = data => {
        const flightsInfo = data.map(flight => ({
            id: flight.id,
            price: flight.price.total,

            first: {
                originFulldate: flight.itineraries[0].segments[0].departure.at,
                destinationFulldate: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at,
                totalDuration: flight.itineraries[0].duration,
                originIata: flight.itineraries[0].segments[0].departure.iataCode,
                destinationIata: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode,
                originCount: flight.itineraries[0].segments.length,
                originIntermediateIata: flight.itineraries[0].segments[0].arrival.iataCode,
                originCarrierCode:flight.itineraries[0].segments[0].carrierCode,
                destinationCarrierCode:flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].carrierCode
            }, //Asegurarse que funcione independientemente de la cantidad de segmentos que haya por cada itinerario.

            second: {
                originFulldate: flight.itineraries[1].segments[0].departure.at,
                destinationFulldate: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.at,
                totalDuration: flight.itineraries[1].duration,
                originIata: flight.itineraries[1].segments[0].departure.iataCode,
                destinationIata: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.iataCode,
                originCount: flight.itineraries[1].segments.length,
                originIntermediateIata: flight.itineraries[1].segments[0].arrival.iataCode,
                originCarrierCode:flight.itineraries[1].segments[0].carrierCode,
                destinationCarrierCode:flight.itineraries[1].segments[flight.itineraries[0].segments.length - 1].carrierCode
            } //Asegurarse que funcione independientemente de la cantidad de segmentos que haya por cada itinerario.
        }))
        this.setState({ flights: flightsInfo })
    }
    render() {
        return (
            <ResultsContext.Provider
                value={{
                    flights: this.state.flights,
                    loadFlights: this.loadFlights,
                    upDateFlightInfo: this.upDateFlightInfo
                }}>
                {this.props.children}
            </ResultsContext.Provider>
        )
    }
}
export const ResultsContextConsumer = ResultsContext.Consumer
export default ResultsContextProvider