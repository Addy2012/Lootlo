import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
// import { updateCollections } from '../../redux/shop/shopActions';

class shop extends Component {
    unsubscribeFromSnapshot = null

    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            // console.log(snapshot)
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap)
            updateCollections(collectionsMap)
        })
    }
    render(){
        const { match } = this.props;
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => 
        dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(shop);