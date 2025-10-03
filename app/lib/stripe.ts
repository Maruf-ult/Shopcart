import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("❌ STRIPE_SECRET_KEY is not defined in environment variables");
}

// ✅ safest: let Stripe use the default apiVersion configured in your account
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default stripe;
