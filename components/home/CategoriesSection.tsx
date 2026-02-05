"use client";

import Link from "next/link";
import { Dumbbell, Heart, Flame, Zap, User, Activity } from "lucide-react";

const classes = [
    {
        icon: Dumbbell,
        title: "Strength Training",
        description: "Build muscle and increase power with weights and resistance training.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        href: "/classes?category=strength",
    },
    {
        icon: Heart,
        title: "Cardio",
        description: "Boost your endurance with high-energy cardio sessions.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        href: "/classes?category=cardio",
    },
    {
        icon: Activity,
        title: "Yoga & Pilates",
        description: "Improve flexibility, balance, and mental wellness.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/classes?category=yoga",
    },
    {
        icon: Flame,
        title: "HIIT",
        description: "Maximum results with high-intensity interval training.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/classes?category=hiit",
    },
    {
        icon: Zap,
        title: "CrossFit",
        description: "Functional fitness combining strength and conditioning.",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        href: "/classes?category=crossfit",
    },
    {
        icon: User,
        title: "Personal Training",
        description: "One-on-one sessions tailored to your specific goals.",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/classes?category=personal",
    },
];

export default function CategoriesSection() {
    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Our Classes
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Find Your Perfect <span className="gradient-text">Workout</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-gray-500">
                        From strength training to yoga, we offer diverse classes for every fitness level and goal.
                    </p>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((classItem) => (
                        <Link
                            href={classItem.href}
                            key={classItem.title}
                            className="group p-6 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl ${classItem.bgColor} flex items-center justify-center ${classItem.color} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                                <classItem.icon size={28} />
                            </div>

                            {/* Content */}
                            <h4 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                                {classItem.title}
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {classItem.description}
                            </p>

                            {/* Arrow indicator */}
                            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                View Classes
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <Link href="/classes" className="btn btn-outline border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-bold">
                        View All Classes
                    </Link>
                </div>
            </div>
        </section>
    );
}
