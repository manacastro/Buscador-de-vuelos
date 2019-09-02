import React from 'react';
import './Exchanges.scss';
import Currencies from 'components/Currencies/Currencies';

class Exchanges extends React.Component {
  state = {
    exchanges: []
  }
  componentDidMount = () => {
    fetch('https://adantrip-api.now.sh/currencies')
      .then(response => response.json())
      .then(data => this.setState({ exchanges: data.all }))
  }
  render() {
    return (
      <div className='ContentExchange'>
        
        <h1 className='TitleContentCurrencies'>All Currencies</h1>
        <div className='GeneralCurrencies'>
          {
            this.state.exchanges.map(exchange => <Currencies exchange={exchange} />)
          }
        </div>
      </div>

    )
  }
}
export default Exchanges