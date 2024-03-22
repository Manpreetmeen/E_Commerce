import React , { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
export default function UpdateProduct() {
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[category, setCategory] = useState("");
    const[company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const getProductDetails = async ()=> {
            console.log(params)
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json();
            console.log(result);
            setName(result[0].name)
            setPrice(result[0].price)
            setCategory(result[0].category)
            setCompany(result[0].company)
        }
        getProductDetails();
    }, [params])
    

    const updateproducts = async () => {
      let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method : "put",
        body : JSON.stringify({
          name, price, category, company
        }),
        headers : {"Content-Type" : "application/json"}
      });
      result = await result.json();
      console.log(result);
      navigate("/")
    }
    
  return (
    <div className='product'>
      <h1> Update product </h1>
      <input value={name} onChange={(e)=>setName(e.target.value)} className='inputfield' type='text' placeholder='Enter product name' />
      
      <input value={price} onChange={(e)=>setPrice(e.target.value)} className='inputfield' type='text' placeholder='Enter product price' />
      
      <input value={category} onChange={(e)=>setCategory(e.target.value)} className='inputfield' type='text' placeholder='Enter product category' />
     
      <input value={company} onChange={(e)=>setCompany(e.target.value)} className='inputfield' type='text' placeholder='Enter product company' />

      <button className='btnlogin' onClick={updateproducts}> Update product</button> 
    </div>
  )
}
