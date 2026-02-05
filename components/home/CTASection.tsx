"use client";

import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white text-sm font-medium mb-8">
                        <Sparkles size={16} className="text-amber-400" />
                        Limited Time: No Joining Fee
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Start Your
                        <br />
                        <span className="gradient-text">Transformation?</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Take the first step today. Get a free 7-day trial and experience
                        everything ABC.gym has to offer—no commitment required.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/signup"
                            className="btn btn-primary px-10 py-5 text-lg font-bold shadow-xl shadow-blue-500/25"
                        >
                            Start Free Trial
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+911234567890"
                            className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-5 text-lg font-bold"
                        >
                            <Phone size={20} />
                            Call Us Now
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <p className="text-slate-500 text-sm mt-8">
                        Join 2,500+ members already training with us
                    </p>
                </div>
            </div>
        </section>
    );
}
