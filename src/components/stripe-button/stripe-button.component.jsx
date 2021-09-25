import React from 'react';
import StripeCheckut from 'react-stripe-checkout';

const StripeCheckoutButton  = ({price})=>{
    const priceForStripe = price*100;
    const publisherKey = 'pk_test_51JdX4TSF7BEGWh3CNbpLe6kxig4ANZ4wqLpCNX8h8zVtdN26AeiHNmF3daiuKYQ6QeCAgswBrrxKp1MNrHWNje0i006RLhLOPd';

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
