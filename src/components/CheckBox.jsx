import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'

const CheckBox = props => {
    const inputRef = useRef(null)
    const handelChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={handelChange} checked={props.checked} />
            <span className="custom-checkbox_checkmark">
                <i className="bx bx-check"></i>
            </span>
            {props.label}
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox