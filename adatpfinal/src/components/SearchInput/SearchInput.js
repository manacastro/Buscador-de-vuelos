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
        const { value, onChange, tag, icon, placeholder, type, relation, position, dimension, parent } = this.props

        let tagContainer = "";

        if (parent == "interior") {
            tagContainer = <p class="inputTag">{tag}</p>
        }

        return (
            <div className={"inputContainer" + parent}>
                {tagContainer}
                <div className={`searchInput ${parent} ${relation} ${position} ${dimension} `}>
                    <FontAwesomeIcon icon={icon} />
                    <input placeholder={placeholder}
                        type={type}
                        onChange={onChange}
                        value={value}>
                    </input>
                </div>
            </div>

        )
    }
}

export default SearchInput