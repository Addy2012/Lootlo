import React from 'react';
import './cart-icon.css';
import {ReactComponent as ShoppingIcon} from '../../assets/cart_icon.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemCount
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);