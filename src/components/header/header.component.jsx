import React from 'react'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/images/logo1.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartWindow from '../cart-window/cart-window.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser,hidden})=>(
<div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        <p className='cname'>SHOPSY</p>
    </Link>
    <div className="options">
        {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :<Link className='option' to='/signin'>
            SIGN IN
            </Link> 
        }
        <Link className='option' to='/'>
            SHOP
        </Link>
        <Link className='option' to='/'>
            CONTACT
        </Link>
        
        <CartIcon/>
    </div>
    {hidden?null:<CartWindow/>}
    
</div>
);

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header);