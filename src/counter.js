import React from 'react'
import CounterChild from './CounterChild';

function CounterParent(props) {
                
  const {value}=props;
  console.log("parent :",value)
    return (
    <div>
 {/* <CounterChild onClickIncrement={props.onClickIncrement} value={props.value} onClickDecrement={props.onClickDecrement}/> */}
 <CounterChild  value={value} />

    </div>
  )
}
export default CounterParent;

