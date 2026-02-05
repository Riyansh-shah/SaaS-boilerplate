"use client";

import Link from "next/link";
import { Dumbbell, RefreshCw, Sparkles, ArrowRight } from "lucide-react";

const pillars = [
    {
        id: "train",
        icon: Dumbbell,
        title: "Train",
        subtitle: "Gym & Strength",
        description: "World-class equipment and physio-led training programs designed to build strength, endurance, and functional fitness.",
        features: ["Strength Building", "Cardio Training", "Functional Fitness", "Posture Correction"],
        color: "blue",
        gradient: "from-blue-500 to-blue-600",
        bgGlow: "bg-blue-500/10",
        href: "/classes?category=strength",
    },
    {
        id: "transform",
        icon: RefreshCw,
        title: "Transform",
        subtitle: "Body Programs",
        description: "Specialized programs for weight management, body contouring, and complete physical transformation with expert guidance.",
        features: ["Weight Loss", "Body Sculpting", "HIIT Training", "Nutrition Plans"],
        color: "cyan",
        gradient: "from-cyan-500 to-cyan-600",
        bgGlow: "bg-cyan-500/10",
        href: "/classes?category=hiit",
    },
    {
        id: "thrive",
        icon: Sparkles,
        title: "Thrive",
        subtitle: "Wellness & Recovery",
        description: "Holistic wellness programs including yoga, stretching, and recovery sessions for mind-body balance and long-term health.",
        features: ["Yoga Classes", "Flexibility Training", "Recovery Sessions", "Stress Relief"],
        color: "emerald",
        gradient: "from-emerald-500 to-emerald-600",
        bgGlow: "bg-emerald-500/10",
        href: "/classes?category=yoga",
    },
];

export default function PhilosophySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-4">
                        Our Philosophy
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                        A Complete Approach to <span className="gradient-text">Fitness</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        We believe fitness is a journey of continuous improvement. Our three-pillar approach
                        ensures you get comprehensive support for lasting results.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Glow Effect */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 ${pillar.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon size={32} />
                            </div>

                            {/* Title */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                                <p className={`text-sm font-semibold text-${pillar.color}-500`}>{pillar.subtitle}</p>
                            </div>

                            {/* Description */}
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                {pillar.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 mb-8">
                                {pillar.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color}-500`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href={pillar.href}
                                className={`inline-flex items-center gap-2 text-sm font-semibold text-${pillar.color}-600 hover:text-${pillar.color}-700 transition-colors group/link`}
                            >
                                Explore Programs
                                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
