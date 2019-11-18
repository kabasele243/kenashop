import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import MenuIcon from '../menu-icon/menu-icon.component';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin' > SIGN IN</Link>
            }



        </div>
        {/* 
        <MenuIcon /> */}
    </div >
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);