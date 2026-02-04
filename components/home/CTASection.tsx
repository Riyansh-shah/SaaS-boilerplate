"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

            <div className="container mx-auto px-4 relative text-center">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5 max-w-2xl mx-auto leading-tight">
                    Ready to Create Something Special?
                </h2>
                <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
                    Get in touch with us today and let's craft the perfect personalized gift for your loved ones!
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/contact" className="btn bg-white text-indigo-600 hover:bg-slate-50 px-7 py-3.5 font-semibold">
                        Get Free Quote
                        <ArrowRight size={18} />
                    </Link>
                    <a
                        href="https://wa.me/911234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-[#25D366] hover:bg-[#22c35e] text-white px-7 py-3.5 font-semibold"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>
                </div>

                {/* Trust Badges - Subtle */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
                    <span className="text-white/60 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                        Free Consultation
                    </span>
                    <span className="text-white/60 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                        No Hidden Charges
                    </span>
                    <span className="text-white/60 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                        Quick Delivery
                    </span>
                </div>
            </div>
        </section>
    );
}
