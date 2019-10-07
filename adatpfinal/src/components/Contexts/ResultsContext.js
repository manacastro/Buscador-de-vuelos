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
                        debugger;

                        // *-*-*-*-* BORRAR *-*-*-*
                        let mockedData = [
                            {
                                type: 'flight-offer',
                                id: '1',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-01',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT13H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T11:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T04:00:00'
                                                },
                                                carrierCode: 'DI',
                                                number: '7506',
                                                aircraft: {
                                                    code: '789'
                                                },
                                                operating: {
                                                    carrierCode: 'DI'
                                                },
                                                duration: 'PT13H',
                                                id: '1',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT13H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T21:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:15:00'
                                                },
                                                carrierCode: 'DI',
                                                number: '7505',
                                                aircraft: {
                                                    code: '789'
                                                },
                                                operating: {
                                                    carrierCode: 'DI'
                                                },
                                                duration: 'PT13H45M',
                                                id: '32',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1439.74',
                                    base: '1032.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1439.74'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'DY'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '719.87',
                                            base: '516.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '1',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QCSRGB',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 2
                                                }
                                            },
                                            {
                                                segmentId: '32',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QCSRGB',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 2
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '719.87',
                                            base: '516.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '1',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QCSRGB',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 2
                                                }
                                            },
                                            {
                                                segmentId: '32',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QCSRGB',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 2
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '2',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT16H30M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '8',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T07:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T09:00:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1013',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '9',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T17:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T20:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1016',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '26',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '27',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1456.04',
                                    base: '220.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1456.04',
                                    additionalServices: [
                                        {
                                            amount: '200.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '3',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT16H30M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '8',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T07:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T09:00:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1013',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '9',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT25H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '46',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '47',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1456.04',
                                    base: '220.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1456.04',
                                    additionalServices: [
                                        {
                                            amount: '200.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '4',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT23H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '14',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1015',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '15',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T17:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T20:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1016',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '26',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '27',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1456.04',
                                    base: '220.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1456.04',
                                    additionalServices: [
                                        {
                                            amount: '200.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '5',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT23H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '14',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1015',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '15',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT25H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '46',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '47',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1456.04',
                                    base: '220.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1456.04',
                                    additionalServices: [
                                        {
                                            amount: '200.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '728.02',
                                            base: '110.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '6',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T10:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3715',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H25M',
                                                id: '35',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '36',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1858.36',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1858.36',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '7',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T10:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3715',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H25M',
                                                id: '35',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '36',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1858.36',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1858.36',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '8',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T10:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3715',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H25M',
                                                id: '35',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '36',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1858.36',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1858.36',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '929.18',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '35',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '36',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '9',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H15M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T19:20:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3173',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '20',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '21',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '10',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H50M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:45:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3167',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H20M',
                                                id: '37',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '38',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '11',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3179',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '40',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '41',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '12',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T17:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T20:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3171',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '24',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '25',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '13',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT19H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T19:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3177',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '33',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '34',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '14',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T11:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3169',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '18',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '19',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '15',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T10:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:10:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3175',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H30M',
                                                id: '44',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '45',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '16',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT26H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T09:15:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T12:40:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3163',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '22',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '23',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '17',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H15M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T19:20:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3173',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '20',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '21',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '18',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H50M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:45:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3167',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H20M',
                                                id: '37',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '38',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '19',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3179',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '40',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '41',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '20',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T17:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T20:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3171',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '24',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '25',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '21',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT19H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T19:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3177',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '33',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '34',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '22',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T11:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3169',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '18',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '19',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '23',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T10:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:10:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3175',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H30M',
                                                id: '44',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '45',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '24',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT26H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T09:15:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T12:40:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3163',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '22',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '23',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '25',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H15M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T19:20:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3173',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '20',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '21',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '20',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '21',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '26',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H50M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:45:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3167',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H20M',
                                                id: '37',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '38',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '37',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '38',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '27',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT16H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T22:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3179',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '40',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '41',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '40',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '41',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '28',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T17:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T20:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3171',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '24',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '25',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '24',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '25',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '29',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT19H45M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T19:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3177',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '33',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '34',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '33',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '34',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '30',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T11:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3169',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '18',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '19',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '18',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '19',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '31',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT24H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T10:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T14:10:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3175',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H30M',
                                                id: '44',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '45',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '44',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '45',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '32',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT26H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T09:15:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-11-12T12:40:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3163',
                                                aircraft: {
                                                    code: '321'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '22',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '23',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1871.26',
                                    base: '596.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1871.26',
                                    additionalServices: [
                                        {
                                            amount: '90.00',
                                            type: 'CHECKED_BAGS'
                                        }
                                    ]
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '935.63',
                                            base: '298.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '22',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '23',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '33',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT13H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T22:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T09:05:00'
                                                },
                                                carrierCode: 'BA',
                                                number: '245',
                                                aircraft: {
                                                    code: '777'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT13H55M',
                                                id: '39',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1897.56',
                                    base: '670.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1897.56'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '34',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT13H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T22:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T09:05:00'
                                                },
                                                carrierCode: 'BA',
                                                number: '245',
                                                aircraft: {
                                                    code: '777'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT13H55M',
                                                id: '39',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1897.56',
                                    base: '670.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1897.56'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '35',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT13H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T22:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T09:05:00'
                                                },
                                                carrierCode: 'BA',
                                                number: '245',
                                                aircraft: {
                                                    code: '777'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT13H55M',
                                                id: '39',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1897.56',
                                    base: '670.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1897.56'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: false
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '948.78',
                                            base: '335.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '39',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60B3',
                                                brandedFare: 'NOBAG',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '36',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T16:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T20:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7466',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H25M',
                                                id: '42',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '43',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '37',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT20H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T19:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7464',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H30M',
                                                id: '16',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '17',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '38',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 2,
                                itineraries: [
                                    {
                                        duration: 'PT18H20M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T21:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T14:45:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6844',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H5M',
                                                id: '6',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T18:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T20:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3718',
                                                aircraft: {
                                                    code: '32A'
                                                },
                                                operating: {
                                                    carrierCode: 'I2'
                                                },
                                                duration: 'PT2H20M',
                                                id: '7',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT22H40M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T12:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T16:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7462',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H20M',
                                                id: '30',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '31',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '6',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '7',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '39',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T16:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T20:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7466',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H25M',
                                                id: '42',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '43',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '40',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT20H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T19:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7464',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H30M',
                                                id: '16',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '17',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '41',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT21H35M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '12',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T13:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3176',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '13',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT22H40M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T12:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T16:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7462',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H20M',
                                                id: '30',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '31',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '12',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '13',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '42',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T16:40:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T20:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7466',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H25M',
                                                id: '42',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '43',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '42',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '43',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '43',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT20H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T15:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T19:05:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7464',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H30M',
                                                id: '16',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '17',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '16',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '17',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '44',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-02',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T13:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-10-11T06:20:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6856',
                                                aircraft: {
                                                    code: '359'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT11H55M',
                                                id: '2',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '3172',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT2H25M',
                                                id: '3',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT22H40M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LHR',
                                                    terminal: '5',
                                                    at: '2019-11-12T12:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T16:15:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '7462',
                                                aircraft: {
                                                    code: '320'
                                                },
                                                operating: {
                                                    carrierCode: 'BA'
                                                },
                                                duration: 'PT2H20M',
                                                id: '30',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '4S',
                                                    at: '2019-11-12T23:50:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T08:35:00'
                                                },
                                                carrierCode: 'IB',
                                                number: '6841',
                                                aircraft: {
                                                    code: '346'
                                                },
                                                operating: {
                                                    carrierCode: 'IB'
                                                },
                                                duration: 'PT12H45M',
                                                id: '31',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '1961.14',
                                    base: '680.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '1961.14'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'IB'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '980.57',
                                            base: '340.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '2',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '3',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'OON0ZQB3',
                                                brandedFare: 'NOBAG',
                                                'class': 'O',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '30',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '31',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'QLNC60M3',
                                                brandedFare: 'BAGSEAT',
                                                'class': 'Q',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '45',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT16H30M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '8',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T07:35:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T09:00:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1013',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '9',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT21H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '28',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T19:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T04:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3043',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT13H10M',
                                                id: '29',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2033.84',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2033.84'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1016.92',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '28',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '29',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1016.92',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '8',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '9',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '28',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '29',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '46',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 9,
                                itineraries: [
                                    {
                                        duration: 'PT23H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-10-10T12:30:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T05:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '42',
                                                aircraft: {
                                                    code: '788'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT11H40M',
                                                id: '14',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-11T16:25:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1015',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '15',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT21H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '28',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T19:10:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    terminal: 'A',
                                                    at: '2019-11-13T04:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3043',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT13H10M',
                                                id: '29',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2033.84',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2033.84'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1016.92',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '28',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '29',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1016.92',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '14',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '15',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '28',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '29',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '47',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT29H15M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'C',
                                                    at: '2019-10-10T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T17:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3044',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT12H15M',
                                                id: '4',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-12T07:45:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-12T09:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1013',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '5',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T17:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T20:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1016',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '26',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '27',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2048.96',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2048.96'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '4',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '5',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '4',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '5',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '48',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT29H15M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'C',
                                                    at: '2019-10-10T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T17:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3044',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT12H15M',
                                                id: '4',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-12T07:45:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-12T09:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1013',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '5',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT25H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '46',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '47',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2048.96',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2048.96'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '4',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '5',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '4',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '5',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '49',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT36H30M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'C',
                                                    at: '2019-10-10T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T17:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3044',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT12H15M',
                                                id: '10',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-12T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-12T16:25:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1015',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '11',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT18H25M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T17:25:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T20:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1016',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '26',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '27',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2048.96',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2048.96'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '10',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '11',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '10',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '11',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '26',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '27',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'flight-offer',
                                id: '50',
                                source: 'GDS',
                                instantTicketingRequired: false,
                                nonHomogeneous: false,
                                oneWay: false,
                                lastTicketingDate: '2019-10-04',
                                numberOfBookableSeats: 7,
                                itineraries: [
                                    {
                                        duration: 'PT36H30M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'EZE',
                                                    terminal: 'C',
                                                    at: '2019-10-10T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-11T17:10:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '3044',
                                                aircraft: {
                                                    code: '343'
                                                },
                                                operating: {
                                                    carrierCode: 'AR'
                                                },
                                                duration: 'PT12H15M',
                                                id: '10',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-10-12T15:00:00'
                                                },
                                                arrival: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-10-12T16:25:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1015',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '11',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    },
                                    {
                                        duration: 'PT25H55M',
                                        segments: [
                                            {
                                                departure: {
                                                    iataCode: 'LGW',
                                                    terminal: 'S',
                                                    at: '2019-11-12T09:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'MAD',
                                                    terminal: '1',
                                                    at: '2019-11-12T13:20:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '1014',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT2H25M',
                                                id: '46',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            },
                                            {
                                                departure: {
                                                    iataCode: 'MAD',
                                                    at: '2019-11-12T23:55:00'
                                                },
                                                arrival: {
                                                    iataCode: 'EZE',
                                                    at: '2019-11-13T08:50:00'
                                                },
                                                carrierCode: 'UX',
                                                number: '41',
                                                aircraft: {
                                                    code: '73H'
                                                },
                                                operating: {
                                                    carrierCode: 'UX'
                                                },
                                                duration: 'PT12H55M',
                                                id: '47',
                                                numberOfStops: 0,
                                                blacklistedInEU: false
                                            }
                                        ]
                                    }
                                ],
                                price: {
                                    currency: 'EUR',
                                    total: '2048.96',
                                    base: '760.00',
                                    fees: [
                                        {
                                            amount: '0.00',
                                            type: 'SUPPLIER'
                                        },
                                        {
                                            amount: '0.00',
                                            type: 'TICKETING'
                                        }
                                    ],
                                    grandTotal: '2048.96'
                                },
                                pricingOptions: {
                                    fareType: [
                                        'PUBLISHED'
                                    ],
                                    includedCheckedBagsOnly: true
                                },
                                validatingAirlineCodes: [
                                    'UX'
                                ],
                                travelerPricings: [
                                    {
                                        travelerId: '1',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '10',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '11',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        travelerId: '2',
                                        fareOption: 'STANDARD',
                                        travelerType: 'ADULT',
                                        price: {
                                            currency: 'EUR',
                                            total: '1024.48',
                                            base: '380.00'
                                        },
                                        fareDetailsBySegment: [
                                            {
                                                segmentId: '10',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '11',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'PLYRAE',
                                                brandedFare: 'ECONOMY',
                                                'class': 'P',
                                                includedCheckedBags: {
                                                    quantity: 1
                                                }
                                            },
                                            {
                                                segmentId: '46',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            },
                                            {
                                                segmentId: '47',
                                                cabin: 'ECONOMY',
                                                fareBasis: 'ZYRPRO5L',
                                                brandedFare: 'LITE',
                                                'class': 'Z',
                                                includedCheckedBags: {
                                                    quantity: 0
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ];

                        // this.upDateFlightInfo(data.data);
                        this.upDateFlightInfo(mockedData);
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