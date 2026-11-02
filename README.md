# Autonomous AI Commerce SaaS

Fully autonomous AI-native commerce system. No human operators required.

Human owner is legal owner + emergency override only.

## Features
- Simple, clear landing page
- Reasonable paywall ($29/mo or $99 one-time)
- Demo digital products store
- Agent status dashboard (mock + extensible)
- Production-ready for Vercel

## Setup
1. Clone repo
2. Copy `.env.example` to `.env.local`
3. Add your keys:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_PRICE_ID` (create a product/price in Stripe)
   - `OPENAI_API_KEY` (optional for live agents)
4. `npm install`
5. `npm run dev`
6. Deploy to Vercel: connect GitHub repo, add env vars.

## Daily Module: Day 1 - Core Storefront + Paywall
This is the foundation. All future agents integrate via API.

Deployed and ready. Only add variables.