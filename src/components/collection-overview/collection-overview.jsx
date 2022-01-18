
import {useSelector } from 'react-redux';

import { CollectionsOverviewContainer } from './collection-overview.styles';

import CollectionPreview from '../preview-component/collection-preview';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPreview);

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>

    )
}

    



export default CollectionsOverview;