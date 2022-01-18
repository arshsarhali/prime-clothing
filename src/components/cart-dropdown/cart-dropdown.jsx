

import CartItem from '../cart-item/cart-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CustomButtonContainer,CartDropDownContainer,CartItemContainer,EmptyMessage} from './cart-dropdown.styles';

const CartDropDown = ({  history}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    return (
        <CartDropDownContainer>
            <CartItemContainer>
                {
                    cartItems.length ?

                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    
                        :
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                }
            </CartItemContainer>
            <CustomButtonContainer onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>CHECKOUT</CustomButtonContainer>
        </CartDropDownContainer>
    );
}


export default withRouter(CartDropDown);