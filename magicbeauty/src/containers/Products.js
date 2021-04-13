import React,{useState,useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import SideNav from './Sidenav';
import {connect,dispatch} from 'react-redux';
import {fetchProducts, addToCart} from '../store/ActionCreators';
import Cart from "../containers/Cart"
import "../styles/ProductsPage.scss"

const Products=(props)=> {
    useEffect(()=>{
        props.fetchProducts();
     },[])
     return(
            <div className="d-flex container-fluid flex-row flex-wrap">
                <div className="col-md-3 col-sm-12 d-flex align-items-stretch justify-content-center mt-4">
                <SideNav/>
                </div>
                <div className="d-flex flex-row justify-content-start flex-wrap col-md-6 col-sm-10  ">
            {props.products? props.products.map(post=>(
                
                <ProductItem key={post.id} post ={post}/>
                
            )): "not finished loading"}
            </div>
            <div className="col-md-3 col-sm-10 d-flex justify-content-center mt-4">
                <Cart></Cart>
            </div>
            </div>
        
        )
   
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.products
  });

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
