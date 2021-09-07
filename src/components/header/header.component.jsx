import React from 'react'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/images/logo1.svg';
import {Link} from 'react-router-dom';


const Header = ()=>(
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
        <Link className='option' to='/signin'>
            Sigin
        </Link>
    </div>
</div>
);
export default Header;