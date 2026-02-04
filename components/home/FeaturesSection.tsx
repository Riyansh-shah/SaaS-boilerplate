"use client";

import { Gift, Palette, Truck, Shield, Clock, Heart } from "lucide-react";

const features = [
    {
        icon: Palette,
        title: "100% Customizable",
        description: "Personalize every product with names and unique designs.",
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
    },
    {
        icon: Gift,
        title: "Premium Quality",
        description: "Crafted with high-quality materials for lasting joy.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Quick and reliable delivery across India.",
        color: "text-teal-500",
        bgColor: "bg-teal-500/10",
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description: "Child-safe materials with secure packaging.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: Clock,
        title: "Quick Turnaround",
        description: "Fast production without compromising quality.",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: Heart,
        title: "Made with Love",
        description: "Handcrafted with care by skilled artisans.",
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-600 rounded-full text-sm font-semibold mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        What Makes Us <span className="gradient-text">Special</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-gray-500">
                        We're committed to creating memorable experiences through quality products and exceptional service.
                    </p>
                </div>

                {/* Features Grid - Compact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-slate-200 group"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center ${feature.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                                    <feature.icon size={24} />
                                </div>

                                {/* Content */}
                                <div>
                                    <h4 className="text-base font-semibold mb-1 text-slate-900">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
