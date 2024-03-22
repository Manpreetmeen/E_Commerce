import React, { useState } from 'react'

export default function AddProduct() {
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[category, setCategory] = useState("");
    const[company, setCompany] = useState("");
    const[error, setError] = useState(false);

    const addnewProduct = async () => {

        if(!name || !price || !company || !category){
          setError(true);
          return false;
        }  

        const userId = JSON.parse(localStorage.getItem("users"))._id;
        let result = await fetch("http://localhost:5000/add-product", {
          method : "post",
          body : JSON.stringify({name, price, category, company, userId}),
          headers : {
            "Content-Type": "application/json"
          }
        });
        result = await result.json();
        console.log(result);
    }
  return (
    <div className='product'>
      <h1> Add product new products</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)} className='inputfield' type='text' placeholder='Enter product name' />
      {error && !name && <span className='invalid-input'>Enter valid name</span>}
      
      <input value={price} onChange={(e)=>setPrice(e.target.value)} className='inputfield' type='text' placeholder='Enter product price' />
      {error && !price && <span className='invalid-input'>Enter valid price</span>}
      
      <input value={category} onChange={(e)=>setCategory(e.target.value)} className='inputfield' type='text' placeholder='Enter product category' />
      {error && !category && <span className='invalid-input'>Enter valid category</span>}
     
      <input value={company} onChange={(e)=>setCompany(e.target.value)} className='inputfield' type='text' placeholder='Enter product company' />
      {error && !company && <span className='invalid-input'>Enter valid company</span>}

      <button className='btnlogin' onClick={addnewProduct}> Add product</button> 
    </div>
  )
}
