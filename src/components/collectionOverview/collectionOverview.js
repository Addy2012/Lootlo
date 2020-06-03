import React from 'react';
import CollectionPreview from '../collectionPreview/collectionPreview';
import './collectionOverview.css';
import {createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';

const CollectionOverview = ({ collections })=>(
    <div className='collections-overview'>
        {collections.map(({id,...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview  
})

export default connect(mapStateToProps)(CollectionOverview)