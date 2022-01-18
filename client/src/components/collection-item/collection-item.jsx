
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, ImageContainer, CollectionFotterContainer, NameContanier, PriceContainer, CustomButtonContainer } from './collection-item.styles';

const CollectionItem = ({item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (

        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} className='image'/>
            <CollectionFotterContainer>
                <NameContanier>{name}</NameContanier>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFotterContainer>
            <CustomButtonContainer onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>

    )
};

const mapDispatchToProps = dispatch => ({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);