
import {  useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import { CartIconContainer,ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';


const CartIcon = () => {
    const dispatch = useDispatch();

    const itemCount = useSelector(selectCartItemsCount);

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>

    );
}

export default CartIcon;