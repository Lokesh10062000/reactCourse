import React,{ useState } from "react"

function Index(){
    const [Count,setCount] = useState(0);
    
    const decrement = ()=>{
        setCount(Count-1);
    }
    const Increment = ()=>{
        setCount(Count+1);
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{Count}</span>
            <button onClick={Increment}>+</button>
        </div>
    )

}
export default Index