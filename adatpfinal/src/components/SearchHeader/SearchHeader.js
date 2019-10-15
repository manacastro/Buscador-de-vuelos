import React from 'react'
import './SearchHeader.scss';
import { ResultsContextConsumer } from 'components/Contexts/ResultsContext';

class SearchHeader extends React.Component {
    state = {
        title: "Cheap Flights Best Deals",
        subtitle: "Search hundreds of travel sites at once"
    }

    render() {
        if(this.props.parent === "home"){
            this.state.title = "Cheap Flights Best Deals";
            this.state.subtitle = "Search hundreds of travel sites at once";
        } else if(this.props.parent === "interior"){
            this.state.title = "50 flights to Londres";
            this.state.subtitle = "";
        }
        return (<section className={'SectionSearchheader ' + this.props.parent}>
            <ResultsContextConsumer>
                {
                    ({ flights }) => {
                        if(this.props.parent === "interior"){
                            this.state.title = flights.length;
                        }
                    }
                }
            </ResultsContextConsumer>
            <h1 className='TitleSearchHeader'>{this.state.title}</h1>
            <p className='TextSearchHeader'>{this.state.subtitle}</p>
        </section>)
    }
}


export default SearchHeader