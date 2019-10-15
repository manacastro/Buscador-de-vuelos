import React from 'react';

const API_KEY = 'CTP86caKwoyD0t4P0j9nl3ANvjSpzudn';
const API_SECRET = 'NBGoEVy8sNksV1PX';

const item = {
    grant_type: 'client_credentials',
    client_id: API_KEY,
    client_secret: API_SECRET
};

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

const ResultsContext = React.createContext()

class ResultsContextProvider extends React.Component {
    state = {
        flights: [],
        flightCount: 0
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
                        this.upDateFlightInfo(data.data);
                    })
            })
    }
    upDateFlightInfo = data => {

        var iso8601DurationRegex = /(-)?P(?:([\.,\d]+)Y)?(?:([\.,\d]+)M)?(?:([\.,\d]+)W)?(?:([\.,\d]+)D)?T(?:([\.,\d]+)H)?(?:([\.,\d]+)M)?(?:([\.,\d]+)S)?/; 
        let parseISO8601Duration = function (iso8601Duration) { 
                                    var matches = iso8601Duration.match(iso8601DurationRegex); 
                                    return { sign: matches[1] === undefined ? '+' : '-', years: matches[2] === undefined ? 0 : matches[2], months: matches[3] === undefined ? 0 : matches[3], weeks: matches[4] === undefined ? 0 : matches[4], days: matches[5] === undefined ? 0 : matches[5], hours: matches[6] === undefined ? 0 : matches[6], minutes: matches[7] === undefined ? 0 : matches[7], seconds: matches[8] === undefined ? 0 : matches[8] 
                                }; 
                            };

        const flightsInfo = data.map(flight => ({
            id: flight.id,
            price: flight.price.total,

            first: {
                originFulldate: flight.itineraries[0].segments[0].departure.at,
                destinationFulldate: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at,
                totalDuration: parseISO8601Duration(flight.itineraries[0].duration).hours + "h " + parseISO8601Duration(flight.itineraries[0].duration).minutes + "m",
                originIata: flight.itineraries[0].segments[0].departure.iataCode,
                destinationIata: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode,
                originCount: flight.itineraries[0].segments.length,
                originIntermediateIata: flight.itineraries[0].segments[0].arrival.iataCode,
                originCarrierCode: flight.itineraries[0].segments[0].carrierCode,
                destinationCarrierCode: flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].carrierCode
            }, //Asegurarse que funcione independientemente de la cantidad de segmentos que haya por cada itinerario.

            second: {
                originFulldate: flight.itineraries[1].segments[0].departure.at,
                destinationFulldate: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.at,
                totalDuration: parseISO8601Duration(flight.itineraries[1].duration).hours + "h " + parseISO8601Duration(flight.itineraries[1].duration).minutes + "m",
                originIata: flight.itineraries[1].segments[0].departure.iataCode,
                destinationIata: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].arrival.iataCode,
                originCount: flight.itineraries[1].segments.length,
                originIntermediateIata: flight.itineraries[1].segments[0].arrival.iataCode,
                originCarrierCode: flight.itineraries[1].segments[0].carrierCode,
                destinationCarrierCode: flight.itineraries[1].segments[flight.itineraries[1].segments.length - 1].carrierCode
            } //Asegurarse que funcione independientemente de la cantidad de segmentos que haya por cada itinerario.
        }))
        this.setState({ flights: flightsInfo });
    }
    render() {
        return (
            <ResultsContext.Provider
                value={{
                    flights: this.state.flights,
                    flightCount: this.state.flights.length,
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