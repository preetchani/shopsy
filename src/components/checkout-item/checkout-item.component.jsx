import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/cart/cart.action';
import './checkout-item.style.scss';

const CheckoutItem =({cartItem,clearItems})=>{
    const {name,imageUrl,quantity,price,}=cartItem;
return(
<div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button" onClick={()=>clearItems(cartItem)}>&#10006;</span>
</div>
)};

const mapDispatchToProps = dispatch=>({
clearItems:item=>dispatch(removeCartItem(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);
