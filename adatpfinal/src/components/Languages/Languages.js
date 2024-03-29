import React from 'react';
import Countries from 'components/Countries/Countries';
import './Languages.scss';

class Languages extends React.Component {
  state = {
    languages: []
  }
  componentDidMount = () => {
    fetch('https://adantrip-api.now.sh/languages')
      .then(response => response.json())
      .then(data => this.setState({ languages: data }))
  }
  render() {
    return (
      <div className='ContentLanguages'>
        <p className='TitleContentLanguages'>Languages</p>
        <div className='GeneralLenguages'>
          {
            this.state.languages.map(language => <Countries language={language} />)
          }
        </div>

      </div>
    )
  }
}

export default Languages
