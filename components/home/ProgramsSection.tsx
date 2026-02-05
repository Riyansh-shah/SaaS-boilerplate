"use client";

import Link from "next/link";
import { Dumbbell, Heart, Flame, Zap, User, Activity, ArrowRight, Clock, Users } from "lucide-react";

const programs = [
    {
        icon: Dumbbell,
        title: "Strength & Conditioning",
        description: "Build lean muscle and increase power with our comprehensive strength training programs.",
        duration: "45-60 min",
        level: "All Levels",
        color: "blue",
        features: ["Free Weights", "Machine Training", "Core Strength", "Muscle Building"],
        href: "/classes?category=strength",
    },
    {
        icon: Heart,
        title: "Cardio & Endurance",
        description: "Boost your cardiovascular health with high-energy sessions designed for maximum fat burn.",
        duration: "30-45 min",
        level: "All Levels",
        color: "cyan",
        features: ["Treadmill", "Cycling", "Rowing", "Stair Climber"],
        href: "/classes?category=cardio",
    },
    {
        icon: Activity,
        title: "Yoga & Pilates",
        description: "Improve flexibility, balance, and mental clarity through mindful movement practices.",
        duration: "60 min",
        level: "All Levels",
        color: "emerald",
        features: ["Vinyasa Flow", "Power Yoga", "Mat Pilates", "Stretching"],
        href: "/classes?category=yoga",
    },
    {
        icon: Flame,
        title: "HIIT & Fat Burn",
        description: "High-intensity intervals that maximize calorie burn and boost metabolism.",
        duration: "30-45 min",
        level: "Intermediate+",
        color: "orange",
        features: ["Circuit Training", "Tabata", "Metabolic Conditioning", "Afterburn Effect"],
        href: "/classes?category=hiit",
    },
    {
        icon: Zap,
        title: "CrossFit Training",
        description: "Functional fitness combining strength, cardio, and gymnastics for total-body conditioning.",
        duration: "60 min",
        level: "Intermediate+",
        color: "amber",
        features: ["Olympic Lifts", "WODs", "Functional Movements", "Competition Ready"],
        href: "/classes?category=crossfit",
    },
    {
        icon: User,
        title: "Personal Training",
        description: "One-on-one sessions with certified trainers for personalized attention and faster results.",
        duration: "60 min",
        level: "Custom",
        color: "violet",
        features: ["Custom Programs", "Form Correction", "Goal Setting", "Progress Tracking"],
        href: "/classes?category=personal",
    },
];

export default function ProgramsSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Our Programs
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                        Specialized <span className="gradient-text">Fitness Programs</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Choose from our diverse range of expert-led programs designed for every fitness level and goal.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program) => (
                        <Link
                            href={program.href}
                            key={program.title}
                            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-14 h-14 rounded-2xl bg-${program.color}-500/10 flex items-center justify-center text-${program.color}-500 group-hover:scale-110 transition-transform`}>
                                    <program.icon size={28} />
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Clock size={14} />
                                    {program.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                                {program.description}
                            </p>

                            {/* Features Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {program.features.slice(0, 3).map((feature, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <Users size={14} />
                                    {program.level}
                                </div>
                                <span className="text-sm font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn More <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <Link href="/classes" className="btn btn-primary px-8 py-4 font-bold shadow-lg shadow-blue-500/20">
                        View All Programs
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
