import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-window.styles.scss';
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (state)=>({
cartItems:selectCartItems(state)
});

export default connect(mapStateToProps)(CartWindow);