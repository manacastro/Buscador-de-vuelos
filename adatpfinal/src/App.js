import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'components/views/Home'
import FlightsResults from 'components/views/FlightsResults'
import BookingFlights from 'components/views/BookingFlights'
import NoMatch from 'components/views/NoMatch'
import NavBar from 'components/NavBar/NavBar';
import SearchContextProvider from 'components/Contexts/SearchContext'
import ResultsContextProvider from 'components/Contexts/ResultsContext';

function App() {
  return (
    <>
      <SearchContextProvider>
        <ResultsContextProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/FlightsResults' component={FlightsResults} />
              <Route path='/BookingFlights' component={BookingFlights} />
              <Route component={NoMatch} />
            </Switch>           
          </BrowserRouter>
        </ResultsContextProvider>
      </SearchContextProvider>
    </>
  )
}
export default App
