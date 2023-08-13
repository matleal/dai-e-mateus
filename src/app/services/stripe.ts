import Stripe from "stripe";

function stripeAuth() {
  const stripeAuthConfig = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });

  return stripeAuthConfig;
}

export async function getProductsPrices() {
  const stripe = stripeAuth();

  const { data: prices } = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  });

  return prices;
}

export async function getCheckoutSession(priceId: string) {
  const stripe = stripeAuth();

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: "https://dai-e-mateus.vercel.app/gifts",
    cancel_url: "https://dai-e-mateus.vercel.app/gifts",
  });

  return checkoutSession;
}
