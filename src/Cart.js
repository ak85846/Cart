import React from "react";
import CartItem from "./CartItem";

// props is used to pass data from parent (cart) to child items (cartItems) with the help of props.props is like attribute to a function
class Cart extends React.Component{
  constructor(){
    //super is calling constructor of component class for not getting error
    super();
    //  state is just na way to store your local data for that component and it is plane javascript object
    this.state={
     products: [
      {
      price:99,
      title:'Watch',
      qty:1,
      img:'',
      id:1
      },
      {
        price:999,
        title:'Mobile Phone',
        qty:10,
        img:'',
        id:2
        },
        {
          price:9999,
          title:'Laptop',
          qty:4,
          img:'',
          id:3
          }
     ]
    }
  
}
handleIncreaseQuantity =(product) => {
//  console.log("hey increase the quantity of" ,product)
const  { products } =this.state;
const index=products.indexOf(product);

products[index].qty+=1;

this.setState({
  //we should write products:products but here the key and vale have same name so shortcut is write one time
  products
})

}
handleDecreaseQuantity =(product) => {
  //  console.log("hey decrease the quantity of" ,product)
  const  { products } =this.state;
  const index=products.indexOf(product);
  if(products[index].qty === 0){
    return;
  }
  products[index].qty-=1;
  
  this.setState({
    //we should write products:products but here the key and vale have same name so shortcut is write one time
    products
  })
  
  }
  render(){
    const {products}= this.state;
    return (
        <div className="cart">
          {/* first way
           <CartItem qty={1} price={99} title={"Watch"} img={''}/>
           */}
        {/* second way */}
        {products.map((product)=>{
         return <CartItem
        /** here product func,comp,jsx everything is props
         * these are the name of props which can be anything.
         * KEY is not props .it is for the react so that it cna identify componets.
         */
          product={product}
          key={product.id}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          /* for demo
          // func={()=>console.log('hey Ajay')}
          // isLoggedin={false}
          // jsx={<h1>test</h1>}
          // comp={<CartItem/>}
          */
          /> 
        })}
        
        </div>
        
    )
  }
}



export default Cart;
