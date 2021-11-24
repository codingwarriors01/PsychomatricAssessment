import React, { useState } from "react";
export default function Raj1(){
    const [j,setj]=useState(0)
    return(<div>
        {j}
    
        <button onClick={()=>{setj(j+2)}}> RajClick</button>
        </div>      
    )
    
}