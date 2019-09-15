import React from 'react'
import './InterestRateInput.css'

export default props =>
    <label> {props.label}
        <input type="text" value={props.value}></input>
    </label>