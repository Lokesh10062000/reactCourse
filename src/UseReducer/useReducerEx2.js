import React , { useEffect, useReducer } from "react"

const reducer =(state,action) => {

    if(action.type==="UPDATE_USERS_DATA"){
       return{
        ...state,
        usersData:action.payload
       }
    }
    if(action.type === "DELETE_USER"){
        const newuser = state.usersData.filter((each)=>
            each.id !== action.payload
        );
        return{
            ...state,
            usersData: newuser,
        }
    }
   
 return state
}

function Reducer(){

    const fethUsersData =async(URL)=>{

        const Response = await fetch(URL);
        const data = await Response.json();
        dispath({ type:"UPDATE_USERS_DATA",payload:data })

    }

    useEffect(() =>{
      fethUsersData("https://jsonplaceholder.typicode.com/users");

    },[])

    const initialState={
        usersData:[],
        isLoading: false,
        isError: { status: false, msg: "" },
        isEditing: { status: false, id: "", name: "", email: "" },
    }

    const [state,dispath] = useReducer(reducer,initialState)

    const handleDelete =(id)=>{
        dispath({ type:"DELETE_USER",payload:id})
    }
 

    return(
        <div>
            {state.usersData.map((eachuser) => {
                const { id, name, email } = eachuser;
               return(
               <div>
                     <h3>{name}</h3>
                <button onClick={() => handleDelete(id)}>delete</button>
                </div>
               )
            }) }
        </div>
    )

}
export default Reducer