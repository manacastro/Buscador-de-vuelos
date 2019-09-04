import React from 'react';
import './PopularExchanges.scss';
import PopularCurrencies from 'components/PopularCurrencies/PopularCurrencies';

class PopularExchanges extends React.Component {
  state = {
    popularExchanges: []
  }
  componentDidMount = () => {
    fetch('https://adantrip-api.now.sh/currencies')
      .then(response => response.json())
      .then(data => this.setState({ popularExchanges: data.popular }))
  }
  render() {
    return (
      <div className='ContentPopularExchange'>
        <h1 className='TitleContentPopularCurrencies'>Popular Currencies</h1>
        <div className='GeneralPopularCurrencies'>
        {
          this.state.popularExchanges.map(popularExchange => <PopularCurrencies popularExchange={popularExchange} />)
        }
        </div>
      </div>
    )
  }
}
export default PopularExchanges