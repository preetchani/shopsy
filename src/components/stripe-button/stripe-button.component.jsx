import React from 'react';
import StripeCheckut from 'react-stripe-checkout';

const StripeCheckoutButton  = ({price})=>{
    const priceForStripe = price*100;
    const publisherKey = process.env.REACT_APP_STRIPE_API_KEY;
                          
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
return(
    <StripeCheckut 
        label = "Pay Now"
        name = "Shopsy"
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publisherKey}
    />
);
};

export default StripeCheckoutButton;
