import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/Goku AVATAR.png'
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_gIzGqBvthP2Ld9RdhX73nygt00rd1zvdpa";
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="lootlo company"
            billingAddress={false}
            shippingAddress
            image={logo}    
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;