import React from 'react';
import './cart-dropdown.css';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'


const CartDropdown = ({cartItems, history,toggleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length ?
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                )) 
                : <span className="empty-msg"> Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            cartItems.length?
            history.push('/checkout'):
            alert("please select an item to proceed");
            toggleCartHidden();
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps )(CartDropdown));