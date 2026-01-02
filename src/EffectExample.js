import { useState ,useEffect } from "react";

function EffectExample()
{
  const[load, showload]=useState(0);

  useEffect(()=>
    {
      console.log("component mounted and updated")
      return(
        console.log("component unmount")
     )
    },[load]);
    
            return(
                  <div> <h1>Hii this is load {load}</h1>
                <button onClick={()=> showload(load + 1)}> click me </button>
             </div>
            );
}
export default EffectExample;
