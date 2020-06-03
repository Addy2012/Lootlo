import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionPage/collectionPage';
const shop = ({ match }) =>{

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
}
        // const mapStateToProps = createStructuredSelector ({
        //     collections:selectCollections   
        // })
export default shop;