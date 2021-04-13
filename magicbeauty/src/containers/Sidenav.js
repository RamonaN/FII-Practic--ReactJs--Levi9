import React, {useEffect} from 'react';
import "../styles/ProductsPage.scss"
import { connect } from "react-redux";
import { filterProductsByCategory, filterProductsBySize } from "../store/ActionCreators";
const SideNav=(props)=>{
    useEffect(() => {
        props.filterProductsBySize(
            props.products,
            "all"
        )
    }, [])

    return(
        <div>
        <div >
          <label>
           Filter by category
            <select
              className="form-control"
              value={props.category}
              onChange={(event) => {
               props.filterProductsByCategory(
                 props.products,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="shorts">Shorts</option>
              <option value="tshirts">Tshirts</option>
              <option value="pants">Pants</option>
            </select>
          </label>
        </div>
        <div>
          <label>
           Filter by size
            <select
              className="form-control"
              value={props.size}
              onChange={(event) => {
               props.filterProductsBySize(
                 props.products,
                  event.target.value
                );
              }}
            >
              <option value="all">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
        </div>
      
        </div>
       
  

    )
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    category: state.products.category,
  });
  export default connect(mapStateToProps, { filterProductsBySize, filterProductsByCategory })(
    SideNav
  );
