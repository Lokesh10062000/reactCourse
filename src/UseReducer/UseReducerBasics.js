import React, { useReducer } from "react";
const reducer = (state,action) => {
    if(action.type === "Delete_Person"){
        const newdata=state.data.filter((person)=>{
         return   person.id!==action.payload;
        });
        return{
            ...state,data:newdata
        }   
    }
    console.log(state);
}
function Final(){

    const initialState ={
        data:[
            {
             id:1,
             firstName:'lokesh',
             lastName:'varma'
            },
            {
            id:2,
            firstName:'shivaji',
            lastName:'raju'
           }
        ]
    }

    const [state , dispatch] = useReducer(reducer, initialState);

        console.log(state);

    const handledelete =(id)=>{
        dispatch({
            type:"Delete_Person",
            payload:id,
        });
    };

    return(
        <div>
            {state.data.map((eachItem)=>{
                const {id,firstName,lastName} = eachItem;
               return(
                <div key={id}>
                    <h3>{firstName}</h3>
                    <p>{lastName}</p>
                    <button onClick={()=>handledelete(id)}>delete</button>
                </div>
               )
            })}
        </div>
    )
}
export default Final