import React from "react";

class CartItem extends React.Component{
    constructor(){
        //super is calling constructor of component class for not getting error
        super();
        //  state is just na way to store your local data for that component and it is plane javascript object
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // second way fon binding if we have so many evenhandler we can bind it here but hat is also bit lengthy so third way is arrow function .
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    //third way arrow function bind this with the instance of the class automatically
    increaseQuantity=()=>{
        // console.log('this',this.state);
        //to increase the qty the simple code is coming in mind is this.state.qty +=1 in console it will increase but not on our screen because react dosenot know that things got changed and need to re-render
        //to overcome it we use setState.calling setstate rerender that component with updated value.what happen is react merge the setstae object with  this object and it is known as shallow merging and it is of two kind
        //setState Form 1:- it is used when previous state is not needed.and it is object type 
        /* this.setState({
        //     title:"some new title"
        // });*/
        /*this.setState({
            qty:this.state.qty+1
        });*/
          //setState Form 2:- it is used when previous state is needed.and it is function type using callback function

          
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty+ 1
                }
            });
          



    }
    render(){
        // we are using object destructuring so that we do not need to write this.state.price again n again
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        // this will give an error because we are passing a instance and internally react is calling increaseQuantity function so the value is lost so we have to bind it
                        // onClick={this.increaseQuantity}
                        // whenever the object is created using this call this will be our object.the first way is written down but this way isbit longer so we will do the binding thing in constructor
                        onClick={this.increaseQuantity.bind(this)}
                        />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                        
                    </div>
                </div>
            </div>

        );
    }
}

const styles ={
    image: {
        height: 110,
        width: 110,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;
