import React,{ useState } from "react";

function Advanced(){
    const userData = [
        {
        id:1,    
        firstName:'Lokesh',
        lastName:'varma'
    },
    {
        id:2,
        firstName:'shivaji',
        lastName:'varma'
    },
    {
        id:3,
        firstName:'ganesh',
        lastName:'varma'
    }
]
    const [data,setData] = useState(userData);
 
    const handledelete=(commingid)=>{         
        const filtereddata = data.filter((each)=>{
            return each.id !== commingid;      
        });
        setData(filtereddata)
    }
    

   return(
    <div>
       {data.map((user,index)=>{
        const {id, firstName, lastName} = user;
        return(
        
        <li key={index}>
            <div>
                <p>FirstName :<b>{firstName}</b></p>
            </div>
            <div>
                <p>LastName :<b>{lastName}</b></p>
            </div>
            <button onClick={()=>handledelete(id)}>delete</button>
        </li>
        )
       })}
    </div>
   )
}
export default Advanced