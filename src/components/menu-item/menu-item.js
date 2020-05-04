import React from 'react';
import './menu-item.css';

const MenuItem = ({imageUrl,title}) => {
    return(
        <div className='menu-item' >
            <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content' >
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;