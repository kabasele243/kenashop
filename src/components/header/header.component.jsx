import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <h3 className='logo'>KenaShop</h3>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>

        </div>

    </div>
)

export default Header;