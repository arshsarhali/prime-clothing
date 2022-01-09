import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_A7jK4iCYHL045qgjjfzAfPxu';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

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