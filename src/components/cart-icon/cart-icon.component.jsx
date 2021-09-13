import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon=({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});



export default connect(null,mapDispatchToProps)(CartIcon);
