
import { CartItemContainer,ItemDetailsContainer,ImgContainer,NameContainer, PriceContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
    
        <ImgContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{ quantity} X ${price}</PriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>

)

export default CartItem;