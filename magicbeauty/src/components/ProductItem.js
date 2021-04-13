import React from 'react'
import {addToCart} from '../store/ActionCreators';
import "../styles/ProductItem.scss"
import {connect,dispatch} from 'react-redux';
import Cart from "../containers/Cart"

const ProductItem=(props)=>{
  
    return(
        <div  className=" mt-4 col-md-4 col-sm-10 "id={props.post.id}>
       <div className="card mb-3" >
       <img className="mx-auto " src={props.post.image} style={{objectFit:"cover",
    
    width: "200px",
    height: "170px",marginTop:"10px"}} />
      <div className="card-body">
       <h5 className="card-title text-center">{props.post.title}</h5>
      <p className="card-text text-center">{props.post.price}$</p>
      <div className="row d-flex ">
    
     <div className="col-md-6 col-sm-12 mt-3 align-items-center text-center">
     <a href={`/products/${props.post.id}`} className="btn btn-primary">View</a>
         </div> 
         <div className="col-md-6 col-sm-12 mt-3 align-items-center text-center">
         <button className="btn btn-primary" onClick={() =>props.addToCart(props.cartItems, props.post)}  >
             <i className="fas fa-shopping-cart" 
        ></i></button>
         </div>
     
      </div>
       
     </div>
     </div>
    
    </div>
    )
}

const mapStateToProps=(state)=>({
    cartItems: state.cart.products
})

export default connect(mapStateToProps, {  addToCart })(ProductItem);