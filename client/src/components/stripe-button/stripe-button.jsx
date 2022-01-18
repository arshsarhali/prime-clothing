import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KFmlVKHn4dkHxpLg9hebRfH1z3hRuI01hrPD7qvUh7FTHoxeWktqtNlwtK2yiPEmfgleZ3qaiKbENR2xxq48tOB00gXqFc7a2';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token:token
            }
        }).then(response => {
           alert('payment successful')
        }).catch(error => {
            console.log('payment error', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure that you use the provided credit card');
       })
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Prime Clothing"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={ publishableKey}
        />
    )
}

export default StripeCheckoutButton;