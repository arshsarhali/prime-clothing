

import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckOutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
    CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer} from './checkout.styles';



const CheckoutPage = ({cartItems,total}) => (

    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
            <span>Product</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
            <span>Description</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
            <span>Quantity</span>
            </HeaderBlockContainer>


            <HeaderBlockContainer>
            <span>Price</span>
            </HeaderBlockContainer>

            <HeaderBlockContainer>
            <span>Remove</span>
            </HeaderBlockContainer>
        
        </CheckoutHeaderContainer>

        {
            cartItems.map(cartItem => (
    
                <CheckOutItem key={cartItem.id } cartItem={ cartItem}/>
))

        }

        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>

        <TestWarningContainer>
            *Please use the following test card for payments*
            <br />
            4242424242424242  - Exp: 12/23 - CVV: 123
        </TestWarningContainer>

        <StripeCheckoutButton price={ total}/>
    
    </CheckoutPageContainer>
)


const mapStateToProps = createStructuredSelector({

    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);