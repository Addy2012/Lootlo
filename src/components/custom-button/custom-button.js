import React from 'react';
import './custom-button.css';

const CustomButtom=({children,...otherProps})=>(
    <div className="custom-button" {...otherProps}>
        {children}
    </div>
)

export default CustomButtom;