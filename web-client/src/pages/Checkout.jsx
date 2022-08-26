import { Box } from '@chakra-ui/react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

export default function Checkout(){
    return(
        <Elements stripe={stripePromise} options={{clientSecret:""}}>
       
      </Elements>
    )
}