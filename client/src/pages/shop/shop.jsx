import React, { useEffect, lazy, Suspense} from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../../components/spinner/spinner";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import ErrorBoundry from "../../components/error-boundary/error-boundry";

const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
const CollectionsOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'))


const ShopPage = ({ match })=> {
  
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(fetchCollectionsStart());     
},[dispatch])


        
        return (
            <div className='shop-page'>
                <ErrorBoundry>
                <Suspense fallback = {<Spinner/>}>
           
                <Route exact path={`${match.path}`} component = {CollectionsOverviewContainer} />
            
                <Route path={`${match.path}/:collectionId`} component = {CollectionPageContainer} />
                
                    </Suspense>
                    </ErrorBoundry>
            </div>
        );
    
}





export default ShopPage;