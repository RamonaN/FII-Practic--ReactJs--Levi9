import React from 'react';
import SideNav from './SideNav';
import '../styles/MainContent.scss';
import ProductContainer from './ProductContainer'
const products=[
    {'id':1,
      'description':'Bla blba bla ',
      'price':12,
      'img':'../images/1.jpg',
      'title':'White tshirt'
},
{'id':2,
'description':'Bla blba bla ',
'price':12,
'img':'../images/1.jpg',
'title':'White tshirt'

},
{'id':3,
'description':'Bla blba bla ',
'price':12,
'img':'../images/1.jpg',
'title':'White tshirt'

},
{'id':4,
'description':'Bla blba bla ',
'price':12,
'img':'../images/1.jpg',
'title':'White tshirt'

},
{'id':5,
'description':'Bla blba bla ',
'price':12,
'img':'../images/1.jpg',
'title':'White tshirt'

}

]

class MainContent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="wrapperContainer">
                <div className="sideNavigation">
                    <SideNav/>
                </div>
                <div className="products">
                    <ProductContainer products={products}/>
                </div>
            </div>
        )
    }
}
export default MainContent;