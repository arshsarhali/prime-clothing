

import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CustomButtonContainer,CartDropDownContainer,CartItemContainer,EmptyMessage} from './cart-dropdown.styles';

const CartDropDown = ({ cartItems,history, dispatch }) => (
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

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));