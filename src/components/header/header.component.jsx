import React from 'react'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/images/logo1.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser})=>(
<div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        <p className='cname'>SHOPSY</p>
    </Link>
    <div className="options">
        <Link className='option' to='/'>
            SHOP
        </Link>
        <Link className='option' to='/'>
            Contact
        </Link>
        {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :<Link className='option' to='/signin'>
            SIGN IN
            </Link> 
        }
        
    </div>
</div>
);
export default Header;