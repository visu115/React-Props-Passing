import React from 'react'
import CounterBaby from './CounterBaby';

function CounterChild(props) {

    const {value}=props;
    console.log('parentrChild :',value)
    // const { onClickIncrement, value, onClickDecrement } = props;

    return (
        <div>
            {/* <CounterBaby onClickIncrement={onClickIncrement} value={value} onClickDecrement={onClickDecrement} /> */}
            <CounterBaby value={value} />
        </div>
    )
}

export default CounterChild;

