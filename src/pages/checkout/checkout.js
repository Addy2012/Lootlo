import React from 'react';
import './checkout.css';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripeButton/stripeButton';

const CheckoutPage = ({cartItems,total}) => (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>                
            </div>
            
            {cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>    
            )}
            <div className='total'>
                <span>Total: ${total}</span>
                <p className='test-credit-card'>4242 4242 4242 4242 - exp:01/22 - cvv:123</p>
                <StripeCheckoutButton price={total}/>
            </div>
        </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)