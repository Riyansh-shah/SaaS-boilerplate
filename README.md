# SaaS Starter

A **production-ready SaaS starter kit** for founders who want to launch and charge customers fast.

This repository gives you everything needed to build a real SaaS — authentication, subscriptions, database setup, emails, deployment, and basic legal templates — without over-engineering.

Built specifically for **solo founders and indie hackers**.

---

## ✨ Features

### Core
- ⚡ Next.js (App Router) + TypeScript
- 🔐 Authentication (Email Magic Link + Google OAuth)
- 💳 Subscriptions & Payments
  - Stripe (International customers)
  - Razorpay (India – INR, UPI, Cards)
- 🗄️ PostgreSQL + Prisma ORM
- ✉️ Transactional emails (Resend)
- 🎨 Tailwind CSS (clean, minimal UI)
- 🔒 Role-based access (user / admin)

### Founder Essentials
- 📄 Legal templates
  - Terms of Service
  - Privacy Policy
  - Cookie Policy
  - Refund Policy
- ✅ SaaS launch checklist
- 📦 Simple, understandable repo structure
- 🚀 Vercel-ready deployment

---

## 🎯 Who This Is For

This starter is ideal for:
- Solo founders
- Indie hackers
- Developers launching their first SaaS
- Agencies building SaaS products for clients

Not built for:
- Enterprise-scale systems
- Microservices architectures
- Highly custom billing logic out of the box

---

## 🧠 Philosophy

This project is intentionally:

- **Boring**
- **Opinionated**
- **Production-focused**

The goal is not flexibility.  
The goal is **shipping a paid SaaS quickly**.

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Auth.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Payments:** Stripe + Razorpay
- **Email:** Resend
- **Hosting:** Vercel

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/saas-starter.git
cd saas-starter
```
### 2. Install Dependencies
```
pnpm install
# or npm install / yarn install
```
3. Environment Variables
Create a .env file in the root directory:

# Database
DATABASE_URL=

# Auth
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# Stripe (International)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Razorpay (India)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Email
RESEND_API_KEY=
4. Database Setup
pnpm prisma generate
pnpm prisma migrate dev
5. Run Locally
pnpm dev
The app will run at:
👉 http://localhost:3000

💳 Payments & Subscriptions
Stripe (International Customers)
Monthly & yearly subscriptions

Webhook-based subscription syncing

Customer portal support

Razorpay (India)
INR subscriptions

Supports UPI, cards, and net banking

Webhook-based payment & subscription tracking

You can enable either or both, depending on where your customers are located.

📄 Legal Templates
This repository includes basic legal templates:

Terms of Service

Privacy Policy

Cookie Policy

Refund Policy

⚠️ Disclaimer:
These documents are provided as templates only and do not constitute legal advice.
You should review them with a qualified lawyer before using them in production.

📋 Launch Checklist
The included checklist helps you verify:

Authentication & security

Payments & subscriptions

Legal setup

Deployment readiness

Basic operational steps

Designed to reduce “did I forget something?” stress.

🔐 Admin Features
View users

View subscriptions

Manually grant or revoke access

Basic system visibility for founders

📦 Deployment
Vercel (Recommended)
Push the repository to GitHub

Import the project into Vercel

Set environment variables

Deploy 🚀

🗺️ Roadmap (Post-V1)
Team accounts

Usage-based billing

SaaS metrics dashboard

Feature flags

Email template library

🤝 Contributing
This is a commercial starter kit.

Contributions are welcome for:

Bug fixes

Documentation improvements

Small enhancements

Please open an issue before submitting large changes.

📜 License
This project is licensed under a commercial license.

You may:

Use it to build and sell your own SaaS

Modify it for personal or client projects

You may not:

Resell or redistribute this starter kit

Offer it as a competing boilerplate

Claim authorship of the original codebase

See the LICENSE file for full details.

💬 Support
If you encounter issues or have questions:

Open a GitHub issue

Or contact the maintainer directly

⭐ Final Note
If this starter saves you weeks of work, consider supporting the project.

Happy shipping 🚀
