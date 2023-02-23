import React, { useState } from "react";
import CounterParent from "./counter";


  
function App() {



  const obj=[
    {name :"Html" , title:"tags"},
    {name :"Bootstrap" , title:"Colors"},
    {name :"Javascript" , title:"Functions"},
    {name :"React" , title:"components"},

  ]

  // const [state, setstate] = useState(0);



  // const incrementCounter = () => {
  //   setstate(state + 1);

  // }

  // const decrementCounter = () => {
  //   setstate(state - 1);
  // }

  return (
    <div className="App">

      {/* <CounterParent onClickIncrement={incrementCounter} value={state} onClickDecrement={decrementCounter} /> */}
      <CounterParent value={obj} />
      

      
    </div>
  );
}

export default App;
