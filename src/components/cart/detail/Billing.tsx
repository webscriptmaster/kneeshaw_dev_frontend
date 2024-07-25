"use client";

import { loadStripe } from "@stripe/stripe-js";

import { ICart } from "@/types/interfaces";
import { apiPaymentCheckout } from "@/api/Payment";

export default function Billing(props: ICart) {
  const handleClick = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    // Call your backend to create the Checkout Session
    const response = await apiPaymentCheckout();
    console.log(response.data);

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: response.data.sessionId
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      alert(result.error.message);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}
