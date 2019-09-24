import React from 'react';
import InputRange from 'react-input-range';
 
class Barra extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 2, max: 10 },
    };
  }
 
  render() {
    return (
      <InputRange
        maxValue={20}
        minValue={1}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}
 
export default Barra