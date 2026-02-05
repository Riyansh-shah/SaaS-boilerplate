"use client";

import { Dumbbell, Users, Clock, Award, Shield, Sparkles, Target, Heart } from "lucide-react";

const stats = [
    { value: "10,000+", label: "Sq. Ft. Space" },
    { value: "150+", label: "Equipment Pieces" },
    { value: "3", label: "Specialized Zones" },
    { value: "24/7", label: "Expert Support" },
];

const features = [
    {
        icon: Dumbbell,
        title: "Premium Equipment",
        description: "Imported machines from world-leading fitness brands for every workout need.",
    },
    {
        icon: Users,
        title: "Expert Trainers",
        description: "Certified professionals with years of experience in sports and rehabilitation.",
    },
    {
        icon: Clock,
        title: "Extended Hours",
        description: "Open 5AM to 11PM, 7 days a week to fit your busy schedule.",
    },
    {
        icon: Shield,
        title: "Safe Environment",
        description: "Sanitized equipment, proper ventilation, and safety protocols throughout.",
    },
    {
        icon: Target,
        title: "Goal Tracking",
        description: "Regular assessments and progress tracking to keep you on target.",
    },
    {
        icon: Heart,
        title: "Community Support",
        description: "A supportive community of like-minded individuals on the same journey.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Stats Bar */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 text-sm md:text-base font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-600 rounded-full text-sm font-semibold mb-4">
                        Why Silver Life
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                        World-Class <span className="gradient-text">Facilities</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Our state-of-the-art center is designed to provide you with everything you need for your fitness journey.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex gap-5 p-6 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
