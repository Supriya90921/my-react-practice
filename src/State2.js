import { useState } from "react";

function State2()
{
    const [show ,setshow]=useState(false);

    const ShowFlower =() =>
        {
            setshow(true);
        };
    const NoShowFlower =() =>
        {
            setshow(false);
        };

        return(
    <div><h1>Show value {show}</h1>
    <button onClick={ShowFlower} onDoubleClick={NoShowFlower}> Click Me </button>
     {show && <p>This is my flower </p>}
      </div>
)
}

export default State2;
