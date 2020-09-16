import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function CheckoutOptions() {
    const handleGuestCheckout = async (e) => {
        e.preventDefault();

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const stripe = await stripePromise;

        const fetchCheckoutSession = async () => {
            try {
                const response = await fetch('http://localhost:5000/products/checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart
                    })
                })
    
                const session = await response.json();

                const result = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });

                if (result.error) {
                        console.log(result.error.message);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchCheckoutSession();
    }

    const handleUserCheckout = (e) => {

    }

    return (
        <div>
            <button role="link" onClick={(e) => handleUserCheckout(e)}>
                Sign in to checkout
            </button>

            <button role="link" onClick={(e) => handleGuestCheckout(e)}>
                Checkout as guest
            </button>
        </div>
    )
}