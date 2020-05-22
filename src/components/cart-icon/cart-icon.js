import React from 'react';
import './cart-icon.css';
import {ReactComponent as ShoppingIcon} from '../../assets/cart_icon.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount, selectCartItem } from '../../redux/cart/cart.selector';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount : selectCartItemCount(state)
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);