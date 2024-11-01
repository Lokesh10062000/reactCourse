import React from "react";
import "./ReUseEffect.css";
// import { useState } from "react";
// import { useEffect } from "react";
import { UserContext } from "../Contex/userContex";
import { useContext } from "react";

//const URL = "https://jsonplaceholder.typicode.com/users";

function ReUseEffect() {
  // const [userData, setUserData] = useState([]);

  // const fetchUsersData = async (apiURL) => {
  //   const Response = await fetch(apiURL);
  //   const data = await Response.json();
  //   setUserData(data);
  // };

  // useEffect(() => {
  //   fetchUsersData(URL);
  // }, []);

  // console.log(userData);

  //const data = useContext(UserContext);
  const data = useContext(UserContext);
  console.log(data);

  const handleShow = (name) => {
    //console.log(name);
    const filteredData = data.filter((each) => {
      return each.name === name;
    });
    console.log(filteredData);
  };

  return (
    <>
      <div>
        <div class="container-fluid">
          <div class="row">
            {data.map((user) => {
              return (
                <>
                  <button
                    className="col-sm-3 user"
                    onClick={() => handleShow(user.name)}
                  >
                    <p>
                      <b>Name:</b>
                      <p>{user.name}</p>
                    </p>
                    <p>
                      <b>email:</b>
                      <p>{user.email}</p>
                    </p>
                    <p>
                      <b> city:</b>
                      <p>{user.address.city}</p>
                    </p>
                    <p>
                      <b>zipcode:</b>
                      <p>{user.address.zipcode}</p>
                    </p>
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ReUseEffect;
