import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-window.styles.scss';
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";

const CartWindow = ({cartItems})=>(
    <div className="cart-window">
        <div className="cart-items">
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({cart:{cartItems}})=>({
cartItems
});

export default connect(mapStateToProps)(CartWindow);