import { NextResponse } from "next/server";
import Stripe from "stripe";

function stripeAuth() {
  const stripeAuthConfig = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });

  return stripeAuthConfig;
}

export async function POST(request: any) {
  const stripe = stripeAuth();
  let data = await request.json();
  let priceId = data.priceId;

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    currency: "brl",
    mode: "payment",
    success_url: "https://dai-e-mateus.vercel.app/gifts",
    cancel_url: "https://dai-e-mateus.vercel.app/gifts",
  });

  return NextResponse.json({ sessionUrl: checkoutSession.url });
}
