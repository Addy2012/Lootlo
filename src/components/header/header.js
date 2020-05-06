import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.css';
import {auth} from '../../firebase/firebase.util';


const Header = ({currentUser}) => (
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
                (<Link to='./signinsignup'  className="option">Sign in</Link>)
            }
        </div>
    </div>
)

export default Header