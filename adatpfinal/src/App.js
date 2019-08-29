import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'components/views/Home'
import FlightsResults from 'components/views/FlightsResults'
import BookingFlights from 'components/views/BookingFlights'
import NoMatch from 'components/views/NoMatch'
import NavBar from 'components/NavBar/NavBar';

function App() {
  return (
    <>     
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/FlightsResults' component={FlightsResults} />
          <Route path='/BookingFlights' component={BookingFlights} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
