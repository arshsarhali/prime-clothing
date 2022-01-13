
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CollectionsOverviewContainer } from './collection-overview.styles';

import CollectionPreview from '../preview-component/collection-preview';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

const CollectionsOverview = ({ collections }) => 

 
   (
        <CollectionsOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>

    )


const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionsOverview)