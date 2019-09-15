import React, { Component } from 'react'
import './CompoundingSimulator.css'

import InterestRateInput from '../components/InterestRateInput'
import TimeInput from '../components/TimeInput'
import MoneyInput from '../components/MoneyInput'

const initialState = {

}

export default class CompoundingSimulator extends Component {
    state = { ...initialState }

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div className="simulator">
                <div className="input">
                    <MoneyInput label="Valor Inicial" value="1000" />
                    <MoneyInput label="Valor Mensal" value="500" />
                    <TimeInput label="Período (em anos)" value="10" />
                    <InterestRateInput label="Taxa de juros (ao ano)" value="10%" />
                </div>
                <div className="display">
                </div>
            </div>
        )
    }
}