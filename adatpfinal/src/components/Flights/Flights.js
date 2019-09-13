// import React from 'react';

// let iataOrigin = 'EZE';
// let iataDest = 'LON';
// let fromDate = '2019-09-22';
// let toData = '2019-09-30';
// let adults = '1';

// const API_KEY = 'bcnC8yJtGe7osLOHYaWodrwtLhrT0d1b';
// const API_SECRET = 'D27nUImKGRS9DVJ6';

// const item = {
//     grant_type: 'client_credentials',
//     client_id: API_KEY,
//     client_secret: API_SECRET
// };

// const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

// class Flights extends React.Component {
//     state = {
//         flights : []
//     }

//     //componentDidMount = () => {
//         loadFlights = () => {
//             fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
//                 method: 'post',
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded"
//                 },
//                 body: toUrlEncoded(item)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     // cuando la API nos responde, podemos guardarnos ese código que vamos a utilizarlo para hacer el fetch a la API de Amadeus
//                     // como este token vence cada cierto tiempo, por seguridad, siempre vamos a tener que obtener uno nuevo antes de llamar a la API
//                     const accessToken = data.access_token;
    
//                     // haga el pedido a la API de Amadeus para obtener unos vuelvos de ejemplo
//                     fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toData}&adults=${adults}&max=50`, {
//                         // el header es para enviarle ese token a la API
//                         headers: {
//                             'Authorization': `Bearer ${accessToken}`
//                         }
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             // cuando la API nos responde, obtenemos el objeto general que tiene todos los datos            
//                             this.upDateFlightInfo(data.data)                        
//                         })
//                 })
//         }
//         upDateFlightInfo = data => {
//             const flightsInfo = data.map(flight => ({
//                 id:flight.id,
//                 price:flight.price.total,
//                 itineraries: flight.itineraries
//             }))
//             this.setState({flights :flightsInfo })       
//         }
//         render() {
//             return (
//                 <>
//                     {
//                         this.state.flights.map(flight => (
//                             <div key={flight.id}>
//                                 <p>{flight.price}</p>
//                             </div>
//                         ))
//                     }
//                     <button onClick={this.loadFlights}>Cargar vuelos</button>
//                 </>)
//         }
//     }

// // const getImages = carrier => {
// //     fetch(`https://content.airhex.com/content/logos/airlines_${carrierCode}_200_200_s.png`)
// //         .then(response => response.json())
// //         .then(res => console.log(res))
// // }

// // const cityname = iata => {
// //     fetch(`https://airports-dpvsjndcod.now.sh/city/${iata}`)
// //         .then(response => response.json())
// //         .then(res => console.log(res.state))
// // }

// export default Flights;