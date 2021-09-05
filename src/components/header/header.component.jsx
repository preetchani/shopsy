import React from 'react'
import './header.styles.scss';
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';


const Header = ()=>(
<div className='header'>
    <Link className='logo-container' to='/'>
        <img src={Logo} alt="" className='logo'/>
    </Link>
    <div className="options">
        <Link className='option' to='/'>
            SHOP
        </Link>
        <Link className='option' to='/'>
            Contact
        </Link>
    </div>
</div>
);
export default Header;