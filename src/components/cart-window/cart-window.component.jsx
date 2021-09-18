import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-window.styles.scss';
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartWindow = ({cartItems})=>(
    <div className="cart-window">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
cartItems:selectCartItems
});

export default connect(mapStateToProps)(CartWindow);