
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckOutItemContainer, ImgContainer, ImageContainer,NameContainer,PriceContainer,QuanitiyContainer,ArrowContainer,ValueContainer,RemoveButtonContainer } from './checkout-item.styles';


const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <ImgContainer src={imageUrl} />
            </ImageContainer>

            <NameContainer>{name}</NameContainer>
            <QuanitiyContainer>
                <ArrowContainer onClick={()=> removeItem(cartItem)}>
                &#10094;
                </ArrowContainer>    
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>
                    &#10095;
                </ArrowContainer>
            </QuanitiyContainer>
            <PriceContainer>{price}</PriceContainer>

            <RemoveButtonContainer onClick={ ()=> clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    
        </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);