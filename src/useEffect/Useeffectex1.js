import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";
function Cart(){

    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError , setisError] = useState({status:false,msg:''})

    

    const fethUsersData = async (apiURL)=>{
        setIsLoading(true);
        setisError({status:false,msg:""})
        try {
            setIsLoading(true);
            const Response = await fetch(apiURL);
            const data = await Response.json();
            setUsersData(data);
            setIsLoading(false);
            setisError({status:false,msg:""})
            if(Response.status === 404){
                throw new Error('data not found');
            }
        } catch (error) {
            setIsLoading(false);
            setisError({status:true,msg: error.message ||"something went wrong"})
        }

    }

    useEffect(() => {
        setIsLoading(true);
        fethUsersData(URL);
    },[]);

    if(isLoading){
        return(
            <h1>loading....</h1>
        )
    };
    if(isError?.status){
        return(
            <h1 style={{color:'red'}}>{isError?.msg}</h1>
        )
    }

    return(
      <div>
         {usersData.map((user)=>{
            const {id,name,email,phone} = user;
        return(
            <div key={id}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        )
       })}
      </div>
    )

}
export default Cart