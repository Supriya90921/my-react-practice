import {useState ,UseEffect}from react;

function Counter()
{
  const[count ,setcount]=useState(0);

  useEffect=(()=>
    {
      console.log("Component mounted or updated");
      return
      (
        console.log("COmponent unmounted");
      )
    }[];

return(
     <div><h1> You have counted {count}
     <button onCLick={setcount(count+1)}>Click me </button>
</div>
     
  
)
  
}
export default Counter;
