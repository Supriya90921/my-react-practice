import React ,{Fragment, useState} from "react";

function State(){
    const[count ,setcount]=useState(0);

    //functions to handle values when changes done on the state value

    const increament =() =>
    {
               setcount(count+1);
    };

    const decereament=() =>
    {
        setcount(count-1);
    };

    return(
        <Fragment>
        <div><h1>Current count:{count}</h1>
        <h2><button onClick={increament}>To increament click on this button</button></h2>
        <h2> after increament count is {count}</h2>
        </div>
        
        <div>    
        <h2><button onClick={decereament}>To decreament click on this button</button></h2>
       <h2> after decreament count is {count}</h2>
       </div>
       </Fragment>

        
    );
}
export default State;

