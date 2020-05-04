import React from 'react';
import './menu-item.css';
import {withRouter} from 'react-router-dom';

const MenuItem = ({imageUrl,title, size,history, linkUrl,match}) => (
        
        <div 
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);