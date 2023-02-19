import React from "react";
import CartItem from "./CartItem";

// props is used to pass data from parent (cart) to child items (cartItems) with the help of props.props is like attribute to a function
/*we are makig this component to functional
//class Cart extends React.Component{
  */
 /* shifting setstate and function to app.js.so that navbar.js and cart.js both csn use state with the help of props.
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

  handleDeleteProduct=(id)=>{
  const {products}=this.state;
//filter will only retur product which doe not have the id which is passed here.
  const items=products.filter((item)=>item.id !=id);
  this.setState({
    products:items
  })
  }  */
  //render(){
    //const {products}= this.state;
    const Cart =(props)=>{
    const {products}= props;

    return (
        <div className="cart">
          {/* first way
           <CartItem qty={1} price={99} title={"Watch"} img={''}/>
           */}
        {/* second way */}
        {products.map((product)=>{
         return (<CartItem
        /** here product ,func,comp,jsx everything is props
         * these are the name of props which can be anything.
         * KEY is not props .it is for the react so that it cna identify componets.
         */
          product={product}
          key={product.id}
          /*before shiftig setstate to app.js
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          */
         /*After shiftig setstate to app.js
         props.onIncreaseQuantity here props because in app.js we are passing these function as props and
         .onIncreaseQuantity instead of .handleIncreaseQuantity because function is handleIncreaseQuantity is in app.js
         */
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
          /* for demo
          // func={()=>console.log('hey Ajay')}
          // isLoggedin={false}
          // jsx={<h1>test</h1>}
          // comp={<CartItem/>}
          */
          /> 
         )
        })}
        
        </div>
        
    )
  }

//}



export default Cart;
