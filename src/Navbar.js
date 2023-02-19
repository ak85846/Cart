import React from "react";

//we have to make it functional component  because it do not have state.
/*class Navbar extends React.Component{
  render(){}}  */

// for any functional component react will pass props by default.because in react data can flow in one direction which is parent to child with the help of props.and setstate is on the top parent.
    const Navbar =(props) =>{
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart-icon"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div> 
    );
}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  

export default Navbar;
