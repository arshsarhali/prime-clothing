import './collection-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-component/collection-preview';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
    }
    </div>

)

const mapStateToProps = createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionsOverview)