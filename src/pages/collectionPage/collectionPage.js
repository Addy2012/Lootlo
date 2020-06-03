import React from 'react';
import './collectionPage.css';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shopSelector';
import { connect } from 'react-redux';

const CollectionPage = ({collection,match}) => {
const {title,items}=collection
return(
    <div className='collection-page'>
        <div className='title'>{title}</div> 
        <div className='items'>
            {items.map(item=>
                <CollectionItem className='collection-item' key={item.id} item={item}/>
            )}
        </div>
    </div>
)
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage); 