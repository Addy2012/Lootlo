import './cart-item.css';
import React from 'react';
import './cart-item.css';
const CartItem = ({ item : {imageUrl, price, name, quantity} }) => (
        <div className='cart-item'> 
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantity}x ${price}</span>
            </div>
        </div>
    )

export default CartItem;
