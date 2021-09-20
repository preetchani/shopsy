import React from 'react';
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/cart/cart.action';
import { addItem } from '../../redux/cart/cart.action';
import { decreaseQuantiy } from '../../redux/cart/cart.action';
import './checkout-item.style.scss';

const CheckoutItem =({cartItem,clearItems,addItem,decreaseQuantiy})=>{
    const {name,imageUrl,quantity,price,}=cartItem;
return(
<div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={() => decreaseQuantiy(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
    <span className="price">${price}</span>
    <span className="remove-button" onClick={()=>clearItems(cartItem)}>&#10006;</span>
</div>
)};

const mapDispatchToProps = dispatch=>({
clearItems:item=>dispatch(removeCartItem(item)),
addItem:item=>dispatch(addItem(item)),
decreaseQuantiy:item=>dispatch(decreaseQuantiy(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);
