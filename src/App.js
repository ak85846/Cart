import React from "react";
import Cart from './Cart';
import Navbar from './Navbar'
import firebase from './firebase';

class App extends React.Component {
  constructor(){
    //super is calling constructor of component class for not getting error
    super();
    //  state is just na way to store your local data for that component and it is plane javascript object
    this.state={
     products: [
      /* we dont need this data because we will fetch data from firebase
      {
      price:99,
      title:'Watch',
      qty:1,
      img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      id:1
      },
      {
        price:999,
        title:'Mobile Phone',
        qty:10,
        img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
        id:2
        },
        {
          price:9999,
          title:'Laptop',
          qty:4,
          img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
          id:3
          }
          */

     ],
     loading:true,
    } 
    //this is because we dont need to write firebase.firestore() again n again
    this.db=firebase.firestore();
}
componentDidMount(){
/*//firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot)=>{
  //   console.log(snapshot);

  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data());
  //   });

  //   const products =snapshot.docs.map((doc) => {
  //     const data=doc.data();
  //     data['id']=doc.id;
  //     return data;
  //   })

  //   this.setState({
  //     products,
  //     loading:false
  //   })
  //  }) */
/*in the above code if we change anything in the firebase (for eg: qty) we have to refresh the page to see the update but here in the bottom code we have used onSnapshot() which is a eventlistener.it automatic update on the page without refreshing if we change anything in collection*/
  /* firebase
  .firestore()
*/
this.db
  .collection('products')
  /* it will show products on screen with price 999
  .where('price','==',999)
  */
  /*it will show product on screen with title mug
  .where('title','==','Mug')
  */
  /*it will show product on screen in increasing order
 .orderBy('price')
 */
 
 /*it will show product on screen in decreasing order*/
.orderBy('price','desc')


  .onSnapshot((snapshot)=>{
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    });

    const products =snapshot.docs.map((doc) => {
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })

    this.setState({
      products,
      loading:false
    })
   })
}
handleIncreaseQuantity =(product) => {
//  console.log("hey increase the quantity of" ,product)
const  { products } =this.state;
const index=products.indexOf(product);

/* this can only update on browser not on firebase  
products[index].qty+=1;

this.setState({
  //we should write products:products but here the key and vale have same name so shortcut is write one time
  products
})*/
//to update on firebase

const docRef=this.db.collection('products').doc(products[index].id);

docRef
.update({
  qty:products[index].qty + 1
})
.then(()=>{
  console.log("Updated successfully ")
})
.catch((error)=>{
  console.log('Error',Error)
})
}
handleDecreaseQuantity =(product) => {
  //  console.log("hey decrease the quantity of" ,product)
  const  { products } =this.state;
  const index=products.indexOf(product);
  if(products[index].qty === 0){
    return;
  }
  /*
  products[index].qty-=1;
  
  this.setState({
    //we should write products:products but here the key and vale have same name so shortcut is write one time
    products
  })
  */
  const docRef=this.db.collection('products').doc(products[index].id);

docRef
.update({
  qty:products[index].qty - 1
})
.then(()=>{
  console.log("Updated successfully ")
})
.catch((error)=>{
  console.log('Error',Error)
})
  }

  handleDeleteProduct=(id)=>{
  const {products}=this.state;
//filter will only return product which doe not have the id which is passed here.
  /*
  const items=products.filter((item)=>item.id !==id);
  this.setState({
    products:items
  })
  */
  const docRef=this.db.collection('products').doc(id);

  docRef
  .delete()
  .then(()=>{
    console.log("Deleted successfully ")
  })
  .catch((error)=>{
    console.log('Error',Error)
  })
  }

  getCartCount = () =>{
    const {products}= this.state;

    let count=0;

    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal= ()=>{
    const {products} =this.state;
    let cartTotal =0;

    products.map((product)=>{
      cartTotal= cartTotal + product.qty * product.price

      return ' '; 
    })
    return cartTotal;
  }

  addProduct =() =>{
    this.db.
    collection('products')
    .add({
      img: 'https://images.unsplash.com/photo-1590080876209-c70d0f0bf6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fE11Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      price:2999,
      qty:3,
      title: 'Mug' 
    })
    //.add will return a promise and docref will have document reference of above code
    .then((docRef)=>{
      console.log('Product has been added',docRef);
    })
    .catch((error)=>{
      console.log('Error',Error)
    })
  }
  render(){
    const{products,loading} =this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} / >
        <button onClick={this.addProduct} style={{paddding: 20,fontSize:20}}>Add a product</button>
      <Cart 
      products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
      <div style={{padding: 10,fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
