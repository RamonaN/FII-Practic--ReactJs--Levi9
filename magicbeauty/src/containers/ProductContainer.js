import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import {addToCart} from '../store/ActionCreators';
import "../styles/ProductItem.scss"
import {connect} from 'react-redux';
import Cart from './Cart';

const ProductContainer=(props)=>{
    const [post, setPost] = useState({});
  const { id } = useParams();
  const fetchPost = async () => {
    fetch(`https://60682ee50add49001733fc49.mockapi.io/products/${id}`)
      .then((response) => response.json())
      .then((post) => {setPost(post)
                       
      });
  };
 
 
  useEffect(() => {
    fetchPost();
 
  }, []);
 
  
    return(
    
        <div className="container-fluid d-flex flex-row flex-wrap" style={{minHeight:"750px", marginTop:"50px"}}>
              <div  className="col-md-7 d-flex flex-row flex-wrap">
                <div className="col-md-8 col-sm-10 text-center">
                   <img src={post.image} className="mx-auto " style={{width:"80%",height:"auto"}}/>
                   </div>
                 <div className="col-md-4 col-sm-10 mb-3">
                 <div className="d-flex flex-column text-left">
                    <p  style={{fontSize:"22px"}}>{post.title}</p>
                    <p  style={{fontSize:"18px"}}>Price: {post.price} $</p>
                    <p style={{fontSize:"18px"}}>Category: {post.category}</p>
                   {post.stock===0? <p >Out of Stock</p> : <p>In stock : yes</p> }
                   <p style={{fontSize:"18px"}}> Available sizes</p> 
                    <div className="d-flex flex-row mb-5">
                    {post.size? post.size.map(size=><button key={size} className="btn btn-secondary mr-3  width-auto">{size}</button> ): <p>not finished yet</p>}

                    </div>
                   <button className="btn btn-danger"  onClick={(e) =>props.addToCart(props.cartItems, post)}>Add to cart</button>
                </div>
                 </div>
                </div>
               
                <div className="col-md-5">
                  <Cart></Cart>
                </div>
        </div>
      
   
    )
}
const mapStateToProps=(state)=>({
  cartItems: state.cart.products
})

export default connect(mapStateToProps, {  addToCart })(ProductContainer);
