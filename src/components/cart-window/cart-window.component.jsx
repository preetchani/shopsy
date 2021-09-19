import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-window.styles.scss';
import { createStructuredSelector } from "reselect";
import {connect} from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartWindow = ({cartItems,history,dispatch})=>(
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
        <CustomButton onClick={()=>{
                history.push('/checkout'); 
                dispatch(toggleCartHidden());
                }}>

            Go to Checkout
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartWindow));