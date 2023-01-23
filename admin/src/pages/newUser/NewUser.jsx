import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser, getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

import "./newUser.css";

export default function NewUser() {
  const[user, setUser] = useState(null);


  const { dispatch } = useContext(UserContext);
  const history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e)
    setUser({ ...user, [e.target.name]: value })
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user)
    createUser(user, dispatch);
    history.push("/user")
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="john" onChange={handleChange} />
        </div>
      
       
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com"  onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" name="password"  onChange={handleChange}/>
        </div>
       
     
       
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
