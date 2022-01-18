
import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { CheckOutItemContainer, ImgContainer, ImageContainer,NameContainer,PriceContainer,QuanitiyContainer,ArrowContainer,ValueContainer,RemoveButtonContainer } from './checkout-item.styles';


const CheckOutItem = ({ cartItem}) => {

    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <ImgContainer src={imageUrl} />
            </ImageContainer>

            <NameContainer>{name}</NameContainer>
            <QuanitiyContainer>
                <ArrowContainer onClick={()=> dispatch(removeItem(cartItem))}>
                &#10094;
                </ArrowContainer>    
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </ArrowContainer>
            </QuanitiyContainer>
            <PriceContainer>{price}</PriceContainer>

            <RemoveButtonContainer onClick={ ()=> dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButtonContainer>
    
        </CheckOutItemContainer>
    )
}



export default CheckOutItem;