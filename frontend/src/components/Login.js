import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=> {
        const auth = localStorage.getItem("users");
        if(auth){
          navigate("/")
        }
      })

    const navigate = useNavigate();
    const handlelogin = async() => {
        console.log("email and passwords are", email, password)
        let result = await fetch("http://localhost:5000/login", {
            method : "post",
            body : JSON.stringify({email, password}),
            headers : {
                "Content-Type" : "application/json"
              },
        })
        result =  await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("users", JSON.stringify(result))
            navigate("/products")
        }else {
            alert("please enter correct details") 
        }

    }
  return (
    <>
    
        <h1 className='loginWord'>Login</h1>
      <div className='login'>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className="inputfield"></input>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter-Password' className="inputfield"></input>
      <button  type="button" className="btnlogin" onClick={handlelogin}>
        Login
      </button>
    </div>
    </>
  )
}
