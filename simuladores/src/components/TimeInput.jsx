import React from 'react'
import './TimeInput.css'

export default props =>
    <label> {props.label}
        <input type="number" min="0" step="1" value={props.value}></input>
    </label>