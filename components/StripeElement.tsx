

"use client"
import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/types";

import { Stripe, loadStripe, StripeElementsOptions, StripePaymentElementOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

export default function StripeElement({ total }: { total: number }) {
    console.log(process.env.STRIPE_PK)
    const stripePromise = loadStripe(process.env.STRIPE_PK as string);
    const appearance = {
        theme: 'stripe',
    };

    const paymentElementOptions = {
        layout: "tabs",
    } as StripePaymentElementOptions;
    const handleSubmit = async (event: any) => { }
    // const stripe = new Stripe(process.env.STRIPE_SECRET, {
    //     apiVersion: '2020-08-27',
    // });

    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount: total,
    //     currency: "usd",
    //     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    //     automatic_payment_methods: {
    //         enabled: true,
    //     },
    // });
    // const clientSecret = paymentIntent.client_secret
    const options = {
        stripePromise,
        appearance,
    } as StripeElementsOptions;


    return (
        <div className="container px-4 md:px-6 py-12">
            <Elements options={options} stripe={stripePromise}>
                <form id="payment-form" onSubmit={handleSubmit}>

                    <PaymentElement id="payment-element" options={paymentElementOptions} />
                    {/* <button disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                    {message && <div id="payment-message">{message}</div>} */}
                </form>
            </Elements>

        </div >
    );
}
