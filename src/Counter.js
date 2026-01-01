import { useState,useEffect} from "react";

function Counter()
{
  const[count ,setcount]=useState(0);

  useEffect(()=>
    {

      console.log("Component mounted or updated")

      return (
        console.log("component unmount")
      )
    
    },[count]);

return(
     <div><h1> You have counted  {count} </h1>
     <button onClick={() => setcount(count+1)}>Click me </button>
</div>
     
  
);
}
export default Counter;
