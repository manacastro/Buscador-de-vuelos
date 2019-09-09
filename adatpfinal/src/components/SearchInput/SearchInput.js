import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchInput.scss'

export const SEARCHINPUT_RELATIONS = {
    JOINED: 'joined',
    DISJOINED: 'disjoined'
}
export const SEARCHINPUT_POSITIONS = {
    LEFTEXTREME: 'leftExtreme',
    CENTER: 'center',
    RIGHTEXTREME: 'rightExtreme'
}
export const SEARCHINPUT_DIMENSIONS = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
    AUTO: 'auto'
}

class SearchInput extends React.Component {
    state = {
        text: ''
    }
    updateText = event => {
        this.setState({ text: event.target.value })
    }
    render() {
        const { value, onChange, tag, icon, placeholder, type, relation, position, dimension } = this.props
        return (

            <div className={`searchInput ${relation} ${position} ${dimension}`}>
                <p>{tag}</p>
                <FontAwesomeIcon icon={icon} />
                <input placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    value={value}>
                </input>
            </div>
        )
    }
}

export default SearchInput