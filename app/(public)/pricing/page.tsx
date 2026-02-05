import Section from "@/components/ui/Section";
import Link from "next/link";
import { Check, X, Zap, Crown, Star, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Memberships | Silver Life Gym Trial",
  description: "Choose the perfect gym membership for your fitness goals. From basic access to premium personal training packages.",
};

const plans = [
  {
    name: "Basic",
    price: "1,499",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    icon: Zap,
    color: "bg-slate-500",
    features: [
      { text: "Full gym access", included: true },
      { text: "Cardio & weights equipment", included: true },
      { text: "Locker room access", included: true },
      { text: "Free WiFi", included: true },
      { text: "Group classes", included: false },
      { text: "Personal training", included: false },
      { text: "Nutrition guidance", included: false },
      { text: "Guest passes", included: false },
    ],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "Pro",
    price: "2,999",
    period: "/month",
    description: "Our most popular plan with unlimited classes",
    icon: Star,
    color: "bg-blue-500",
    features: [
      { text: "Full gym access", included: true },
      { text: "Cardio & weights equipment", included: true },
      { text: "Locker room access", included: true },
      { text: "Free WiFi", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "2 PT sessions/month", included: true },
      { text: "Basic nutrition guidance", included: true },
      { text: "Guest passes", included: false },
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Elite",
    price: "4,999",
    period: "/month",
    description: "Premium experience with personal training",
    icon: Crown,
    color: "bg-gradient-to-br from-amber-400 to-amber-600",
    features: [
      { text: "Full gym access", included: true },
      { text: "Cardio & weights equipment", included: true },
      { text: "Premium locker + towel service", included: true },
      { text: "Free WiFi", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "8 PT sessions/month", included: true },
      { text: "Complete nutrition plan", included: true },
      { text: "2 guest passes/month", included: true },
    ],
    cta: "Start Elite",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I try before I commit?",
    answer: "Absolutely! We offer a free 7-day trial for all new members. Come experience our facilities, classes, and community before making a decision.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "We have a flexible month-to-month policy. You can cancel anytime with 30 days notice. No long-term contracts required.",
  },
  {
    question: "Are there any joining fees?",
    answer: "During our current promotion, we're waiving the joining fee completely. Just pay your first month's membership.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, Pro and Elite members can freeze their membership for up to 2 months per year for travel, illness, or other reasons.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <Section variant="dark" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-6">
            Flexible Memberships
          </span>
          <h1 className="text-white mb-6">Choose Your Plan</h1>
          <p className="text-white/80 text-xl">
            Start your fitness journey with a plan that fits your goals and budget.
            All plans include access to our state-of-the-art facilities.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="-mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.popular ? "border-blue-500 scale-105" : "border-gray-100"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 ${plan.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                <plan.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
                <span className="text-gray-500 font-medium mb-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check size={18} className="text-green-500" />
                    ) : (
                      <X size={18} className="text-gray-300" />
                    )}
                    <span className={feature.included ? "text-slate-700" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`btn w-full justify-center py-3.5 font-bold ${plan.popular
                  ? "btn-primary shadow-lg shadow-blue-500/20"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section variant="light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-500">Have questions? We've got answers.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Plan Is Right For You?</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            Our team is happy to help you choose the perfect membership based on your fitness goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="btn bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4">
              Start Free Trial
            </Link>
            <a href="tel:+911234567890" className="btn border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4">
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
