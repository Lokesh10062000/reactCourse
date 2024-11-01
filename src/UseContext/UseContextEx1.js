import React, { useContext } from "react";
import { UserContext } from "../Contex/userContex";

function Hello(){
    const data = useContext(UserContext)
    console.log(data);

    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}
export default Hello