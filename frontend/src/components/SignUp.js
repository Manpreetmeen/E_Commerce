import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=> {
    const auth = localStorage.getItem("users");
    if(auth){
      navigate("/")
    }
  })

  const collectData = async () => {
    console.warn(name, email, password);
    let result =  await fetch("http://localhost:5000/register",{
      method :"post",
      body : JSON.stringify({name,email,password }),
      headers : {
        "Content-Type" : "application/json"
      },
    })
    result = await result.json()
    console.log(result);
    localStorage.setItem("users", JSON.stringify(result))
     navigate('/')
  }
  return (
    <div className="container-sign">
      <h1 className="signupword"> Sign Up</h1>
      <input onChange={(e)=>setName(e.target.value)} value={name} className="inputfield" type="text" placeholder="User Name" />
      <input onChange={(e)=>setEmail(e.target.value)} value={email} className="inputfield" type="text" placeholder="User Email" />
      <input
        onChange={(e)=>setPassword(e.target.value)}
        className="inputfield"
        type="password"
        value={password}
        placeholder="User Password"
      />
      <button onClick={collectData} className="btnsignup" type="button">
        Sign Up
      </button>
    </div>
  );
}
