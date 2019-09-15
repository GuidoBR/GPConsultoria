import React from 'react'
import './MoneyInput.css'

export default props =>
    <label> {props.label}
        <input type="money" min="0,00" step="0,01" value={props.value}></input>
    </label>