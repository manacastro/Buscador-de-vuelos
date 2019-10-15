import React from 'react';

const SearchContext = React.createContext()

class SearchContextProvider extends React.Component{
    state = {
        iataOrigin: '',
        iataDest: '',
        fromDate: '',
        toData: '',
        adults: ' '
    }
    modifyInfoiataOrigin = event => {
        this.setState({iataOrigin:event.target.value})
    }
    modifyInfoIataDest = event => {
        this.setState({iataDest:event.target.value})
    }
    modifyInfoFromDate = event => {
        this.setState({fromDate:event.target.value})
    }
    modifyInfoToData = event => {
        this.setState({toData:event.target.value})
    }
    modifyAdults = event => {
        this.setState({adults:event.target.value})
    }    
    render(){
        return(
            <SearchContext.Provider
                value={{
                iataOrigin:this.state.iataOrigin,
                modifyInfoiataOrigin:this.modifyInfoiataOrigin,
                iataDest: this.state.iataDest,
                modifyInfoIataDest:this.modifyInfoIataDest,
                fromDate:this.state.fromDate,
                modifyInfoFromDate:this.modifyInfoFromDate,
                toData:this.state.toData,
                modifyInfoToData:this.modifyInfoToData,
                adults:this.state.adults,
                modifyAdults:this.modifyAdults
                }}>
                {this.props.children}    
            </SearchContext.Provider>
        )
    }
}    

export const SearchContextConsumer = SearchContext.Consumer
export default SearchContextProvider