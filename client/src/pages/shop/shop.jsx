import React, { useEffect, lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../../components/spinner/spinner";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import ErrorBoundry from "../../components/error-boundary/error-boundry";

const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
const CollectionsOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'))


const ShopPage = ()=> {
  
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(fetchCollectionsStart());     
},[dispatch])


        
        return (
            <div className='shop-page'>
                <ErrorBoundry>
                <Suspense fallback = {<Spinner/>}>
           <Routes>
                <Route exact path='/' element = {<CollectionsOverviewContainer/>} />
            
                <Route path=':collectionId' element = {<CollectionPageContainer/>} />
                </Routes>
                    </Suspense>
                    </ErrorBoundry>
            </div>
        );
    
}





export default ShopPage;