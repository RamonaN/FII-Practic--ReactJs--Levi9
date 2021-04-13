import React from 'react';
import Header from './containers/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Homepage from './containers/HomeComponent';
import Footer from './containers/Footer';
import Products from './containers/Products';
import ProductContainer from './containers/ProductContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './containers/Cart';
import AddProduct from './containers/AddProduct'
const App=()=>{
  return(
    
    <BrowserRouter>
    
    <div>
     
      <Header/>
      <div className="conatiner-fluid mb-3">
      <Route path={'/'} exact  render ={()=>(<Homepage/>)}></Route>
      {/*
      <Route path={'/about'} component={About}></Route>
     
      
      <Route exact path="/addProduct" component={AddProduct}></Route>
  */}
   <Route exact path="/products" render={()=>(<Products/>)}></Route>
   <Route path="/products/:id" component={ProductContainer}></Route>
   <Route path="/cart" component={Cart}/>
   <Route path="/addProduct" component={AddProduct}/>
   </div>
    <Footer/>
    </div>
    </BrowserRouter>
  )

}


export default App;
