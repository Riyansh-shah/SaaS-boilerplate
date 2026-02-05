"use client";

import Link from "next/link";
import { ArrowRight, Play, Dumbbell, Users, Calendar, Award } from "lucide-react";

const stats = [
    { value: "2500+", label: "Active Members", icon: Users },
    { value: "50+", label: "Weekly Classes", icon: Calendar },
    { value: "15+", label: "Expert Trainers", icon: Award },
    { value: "6+", label: "Years Experience", icon: Dumbbell },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] flex flex-col bg-slate-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

            {/* Main Hero Content */}
            <div className="flex-1 flex items-center relative z-10 pt-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Tagline Banner */}
                        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
                            <span className="text-blue-400 font-bold">Train</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                            <span className="text-cyan-400 font-bold">Transform</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                            <span className="text-emerald-400 font-bold">Thrive</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                            Your Journey to{" "}
                            <span className="gradient-text">Peak Fitness</span>{" "}
                            Starts Here
                        </h1>

                        {/* Subheadline */}
                        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Experience Ahmedabad's premier fitness destination. State-of-the-art equipment,
                            expert trainers, and personalized programs designed for your success.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <Link
                                href="/signup"
                                className="btn btn-primary text-base px-8 py-4 shadow-lg shadow-blue-500/25"
                            >
                                Start Free Trial
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/about"
                                className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 text-base px-8 py-4"
                            >
                                <Play size={16} className="fill-white" />
                                Watch Our Story
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar at Bottom */}
            <div className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-center gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-white text-2xl md:text-3xl font-bold">{stat.value}</div>
                                    <div className="text-slate-500 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
