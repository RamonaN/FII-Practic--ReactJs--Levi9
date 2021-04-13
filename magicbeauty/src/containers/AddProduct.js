 import React,{useState,useEffect, Component} from 'react';
 import "../App.css"
 import axios from "axios"
const AddProduct =(props)=>{
  const [title,setTitle]=useState('');
  const [price,setPrice]=useState(null);

  const [stock, setStock]=useState(null);
  const [image,setImage]=useState('');
  const [sizes, setSizes]=useState([]);
  const [category, setCategory]=useState('')
  const handleChange=(e)=>{
        let value = Array.from(e.target.selectedOptions, option => option.value);
        console.log(value)
        setSizes(value);
      
  }
 const handleSubmit=(e)=>{
     e.preventDefault();
     const objToPost={
         title:title,
         price:price,
         stock:stock,
         size:sizes,
         category:category,
         image:`/images/${image.name}`
     }
     axios.post("https://60682ee50add49001733fc49.mockapi.io/products",  objToPost )
      .then(res => {
        console.log(res.data);
        setTitle("")
        setImage("")
        setPrice('')
        setStock('')
        setSizes([]);
        setCategory('')
        alert("Products has been succesfully added!"+JSON.stringify(res.data))
      })

 }
 
     return(
         <div className="container justify-content-center align-items-center ">
             <div className="col-md-6 mx-auto">
                 <div className="title">Add a new product</div>
             <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text" className="form-control" id="price" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title"/>
        </div>
        <div className="form-group">
    <label htmlFor="image">Product image</label>
    <input type="file" className="form-control-file" id="image" onChange={(e)=>setImage(e.target.files[0])}/>
  </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} id="price" placeholder="price"/>
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" className="form-control" value={stock} onChange={(e)=>setStock(e.target.value)} id="exampleFormControlInput1" placeholder="stock"/>
        </div>
       
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" className="form-control" id="category"value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="category"/>
        </div>
        <div className="form-group">
          <label htmlFor="size">Size</label>
          <select multiple className="form-control"  onChange={(e)=>handleChange(e)} id="size">
            <option value="S">S</option>
            <option  value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">Add</button>
      </form>
             </div>
      </div>
     )
    }
 
 export default AddProduct;