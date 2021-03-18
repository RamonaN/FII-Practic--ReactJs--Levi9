import React from 'react'

class ProductContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:props.products
        }
        
       }
      generateCardProduct(){
        return this.state.products.map(product=>{
            return(   <div className="card" key={product.id}>
            <img src={product.img}></img>
            <div className="container">
            <h4><b>{product.title}</b></h4> 
            <p>Price {product.price}$</p>
            </div>
            </div>)
         
        })
    }
    render(){
       
        return(
            <div className="productsStyle">{this.generateCardProduct()}</div>
        )
           
        
    }
}
export default ProductContainer;