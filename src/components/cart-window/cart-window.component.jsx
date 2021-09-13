import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-window.styles.scss';
const CartWindow = ()=>(
    <div className="cart-window">
        <div className="cart-items"/>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

export default CartWindow;