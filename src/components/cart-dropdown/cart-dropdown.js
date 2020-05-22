import React from 'react';
import './cart-dropdown.css';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems:selectCartItem(state)
})

export default connect(mapStateToProps)(CartDropdown);