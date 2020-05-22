import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.css';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
// import {toggleCartHidden} from '../../redux/cart/cart.actions';

const Header = ({ currentUser , hidden }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className="optionoption" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to="./shop">
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>) :
                (<Link to='./signinsignup'  className="option">SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        { hidden ? <CartDropdown/> : null }
    </div>
)

const mapStateToProps = ({user : { currentUser } , cart : { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)