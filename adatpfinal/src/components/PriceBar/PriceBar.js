import React from 'react';
import './PriceBar.scss';
import InputRange from 'react-input-range';

class PriceBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            value: { min:100, max: 500 },
        };
      }
      render() {
        return (
          <form className="form">
            <h3>PRICE</h3>
            <InputRange
              minValue={100}
              maxValue={500}
              value={this.state.value}
              formatLabel={value => "$" + value}
              onChange={value => this.setState({ value })}
               />
          </form>
        );
      }
}

export default PriceBar