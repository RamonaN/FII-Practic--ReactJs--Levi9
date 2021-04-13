import {
    FETCH_PRODUCTS,FILTER_PRODUCTS_BY_CATEGORY,FILTER_PRODUCTS_BY_SIZE
   
  } from "./ActionTypes";

const initState = { products: [], filteredItems: [], size: "", category:""};
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
        return {
          ...state,
          filteredItems: action.payload.products,
          size: action.payload.size,
        };
      case FILTER_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          filteredItems: action.payload.products,
          category:action.payload.category
        };
  
    default:
      return state;
  }
}