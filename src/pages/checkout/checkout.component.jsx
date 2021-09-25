import React from 'react'
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { selectCartTotalAmount } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout=({cartItems,total})=>(
<div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
        <div className="total">Total: ${total}</div>

         <div className="test-warning">
             ** Please use the following test card for payment **
             <br/>
             4242 4242 4242 4242 | Exp:- 01/30 | CVV:- 123
         </div>
        <StripeCheckoutButton price = {total}/>
</div>
);

const mapStateToProps = createStructuredSelector({
cartItems:selectCartItems,
total:selectCartTotalAmount
});

export default connect(mapStateToProps)(Checkout);