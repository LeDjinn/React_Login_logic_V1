import React from 'react'
import  { useState, useContext } from "react";
import axios from 'axios';

export default function Adminregister(props) {
  const [value, setValue]= useState({})
  const [name, setName]= useState('')
  const [password, setPassword]= useState('')
  const [logged, setLogged] = useState('not admin')
  const urlRegistrations = 'http://localhost:3002/registrations'


  const changeStatus =(data)=>{
    setLogged(data);
  }

  const handleSubmit =(event)=> {
    axios.post(urlRegistrations,
    {admin: {name: name, 
      password: password}},
    {withCredentials: true} 
    ).then(response => {
      changeStatus(response.data.status)
      console.log('response is', response.data.admin.name)
    })
    .catch(error => {
      console.log("registration error", error);
    });
    console.log('Submit on', name, password);
    event.preventDefault();
  }

  const handleChangeName =(event)=>{
      setName(
        event.target.value
      );
      
      console.log(name)
  }

  const handleChangePassword =(event)=>{
    setPassword(
      event.target.value
    );
    
    console.log(password)
}
 


    return (<div className= "container">
        <form onSubmit = {handleSubmit}>
          {logged === 'created'?(
          <h2> Your status is : {logged}</h2>) :
          ( <h1>Sign up as admin</h1>)}
        <div classNameName="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text"  name="name" placeholder="Enter name" value={name} onChange={handleChangeName}/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"  value={password} onChange={handleChangePassword} placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}

