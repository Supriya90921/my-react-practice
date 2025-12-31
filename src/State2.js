import {useState} from 'react';

function State2()
{
    const[show ,setshow]=useState(false);

    const ShowFlower =() =>
    {
        setshow(true);
        
    };
      const NoFlower =() =>
    {
        setshow(false);
        
    };

    return(
        <div>
           
        <button onClick={ShowFlower} onDoubleClick={NoFlower}>click me</button>
             {show && <p>🌸 Flower is visible</p>}
 
    
        </div>
    )
}
export default State2;
