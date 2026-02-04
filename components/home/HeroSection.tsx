"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100vh] flex items-center bg-[#0f172a] overflow-hidden pt-20">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b]/50 to-[#0f172a]" />

            {/* Single Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="animate-fade-in-up flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
                            <Sparkles size={14} />
                            Customized Gifts for Every Occasion
                        </span>

                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                            Crafting <span className="gradient-text">Memories</span> That Last a Lifetime
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                            Discover unique personalized gifts for your loved ones. From
                            custom furniture to room décor, DIY kits to birthday surprises.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/products" className="btn btn-primary text-base px-7 py-3.5">
                                Explore Products
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn border border-white/20 hover:border-white/40 text-white text-base px-7 py-3.5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                                <Play size={16} className="fill-white" />
                                Get a Quote
                            </Link>
                        </div>

                        {/* Trust Indicators - Cleaner */}
                        <div className="mt-14 flex flex-wrap gap-12 justify-center lg:justify-start">
                            <div className="text-center lg:text-left">
                                <div className="text-white text-3xl md:text-4xl font-bold font-heading">5000+</div>
                                <div className="text-gray-500 text-sm mt-1">Happy Customers</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-white text-3xl md:text-4xl font-bold font-heading">100+</div>
                                <div className="text-gray-500 text-sm mt-1">Unique Products</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-white text-3xl md:text-4xl font-bold font-heading">5+</div>
                                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual - Product Image */}
                    <div className="relative flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0">
                        <div className="w-full max-w-[450px] relative group">
                            <Image
                                src="/hero-product.png"
                                alt="Customized Kids Trolley Rack"
                                width={450}
                                height={450}
                                className="w-full h-auto rounded-3xl transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Floating Card - Simplified */}
                        <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-slide-in-left hidden md:flex">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-xl">
                                🎉
                            </div>
                            <div>
                                <div className="font-semibold text-slate-900 text-sm">Free Customization</div>
                                <div className="text-xs text-slate-500">On all products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
