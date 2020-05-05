import React from 'react';
import './collectionPreview.css';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ( {title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.slice(0, 4).map(({id , ...otherCollectionItemProps})=>(
                <CollectionItem key={id} {...otherCollectionItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;