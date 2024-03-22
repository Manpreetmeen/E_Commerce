import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result =  await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    let result =  await fetch(`http://localhost:5000/product/${id}`, {
        method : "delete"
    })
    result = await result.json();
    if(result){
        getProducts();
    }
  }

  const searchHandle = async (e) => {
    console.warn()
    let key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result =  await result.json();
      if(result){
        setProducts(result)
      }
    }
    else {
      getProducts();
    }
  }

  return (
    <div className="product-list">
      <h1> ProductList by components</h1>
      <input type="text" placeholder="Search Product" className="input-productlist"
      onChange={searchHandle}
      ></input>
      <ul> 
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>

      </ul>
      {
       products.length > 0 ? products.map((item, index)=> 
        <ul key={item._id}> 
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>${item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
        <Link to={`/updateproducts/${item._id}`}>update</Link>
        </li>
      </ul>
      )
      :
      <h1> No Result Found</h1>
}
    </div>
  );
}
