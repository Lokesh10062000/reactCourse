import React, { useState } from "react";

function Final(){
    const [showData, setShowData ] = useState(true);
    const handleChange=()=>{
        setShowData(!showData)
    }
    return(
        <div>
        <button onClick={handleChange}>{showData?"hide":"show"}</button>
        <div>{showData?<div>
             Hello I am trying to include jquery and bootstrap 
            into a Reactjs project, but I am using es6 imports to do so. I've included 
            the imports as shown below in my index.js file. But upon page load it gives 
            error saying that Bootstrap's Javascript requires jquery. I've already npm 
            installed all the required packages. How can I get jquery into my bundled and 
            minified final script file?
            </div>:"data hided"}
       
        </div>
        </div>
    )
}
export default Final