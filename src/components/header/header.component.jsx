import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import MenuIcon from '../menu-icon/menu-icon.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => (
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

            <CartIcon />

        </div>

        {hidden ? null : <CartDropdown />}
        {/* 
        <MenuIcon /> */}
    </div >
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);