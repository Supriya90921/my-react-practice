import {useState} from 'react';

function State2()
{
    const[show ,setshow]=useState(false);

    const ShowFlower =() =>
    {
        setshow(true);
    };

    return(
        <div>
            <h1>this is me</h1>
        <button onClick={ShowFlower }>click me   </button>
     {show && <p>🌸 Flower is visible</p>}
    
        </div>
    )
}
export default State2;
