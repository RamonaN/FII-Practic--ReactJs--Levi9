import React ,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchProducts, addToCart} from '../store/ActionCreators';
import Cart from "../containers/Cart"
import "../styles/Homepage.scss";
const Homepage=(props)=>{
    useEffect(()=>{
        props.fetchProducts();
     },[])
    return(
        <div className="homeContainer">
             <div className="dealsImage">
                <img src='/images/backgroundHome.png'></img>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.products
  });
  export default connect(mapStateToProps, { fetchProducts, addToCart })(Homepage);

