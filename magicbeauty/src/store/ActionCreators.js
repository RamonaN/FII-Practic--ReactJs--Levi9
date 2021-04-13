import {
    FETCH_PRODUCTS,
  ADD_TO_CART,
   REMOVE_FROM_CART,
   FILTER_PRODUCTS_BY_SIZE,
   FILTER_PRODUCTS_BY_CATEGORY
  } from './ActionTypes';
import axios from 'axios'
export const fetchProducts = () => (dispatch) => {
    axios
    .get("https://60682ee50add49001733fc49.mockapi.io/products")
      .then((res) => {
        dispatch({ type: FETCH_PRODUCTS, payload: res.data });
      });
  };
 
  export const filterProductsBySize= (products, size) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        products:
          size === "all"
            ? products
            : products.filter(
                (x) => x.size.indexOf(size.toUpperCase()) >= 0
              ),
      },
    });
  };
  
  export const filterProductsByCategory= (products, category) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        products:
          category === "all"
            ? products
            : products.filter(
                (x) => x.category===category 
              ),
      },
    });
  };
  
 

  export const addToCart = (products, product) => (dispatch) => {
    const cartItems = products.slice();
    let productAlreadyInCart = false;
  
    cartItems.forEach((cp) => {
      if (cp.id === product.id) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });
  
    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
  };
  
  export const removeFromCart = (products, product) => (dispatch) => {
    const cartItems = products.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  };
 
 