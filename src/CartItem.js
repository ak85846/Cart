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
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
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
