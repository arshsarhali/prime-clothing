
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './preview-component.styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => 
  (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)} >{title.toUpperCase()}</TitleContainer>
        
            <PreviewContainer>
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />

                    ))


                }
            </PreviewContainer>
        </CollectionPreviewContainer>

    )

export default withRouter(CollectionPreview);