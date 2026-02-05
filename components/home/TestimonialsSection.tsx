"use client";

import { Star, Quote, Play } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Lost 20kg in 8 months",
        image: null,
        rating: 5,
        text: "Silver Life completely transformed my life. The trainers understood my goals and created a program that worked. The results speak for themselves!",
        highlight: "20kg Lost",
    },
    {
        name: "Rahul Patel",
        role: "Member for 1 year",
        image: null,
        rating: 5,
        text: "The equipment here is world-class. Coming from smaller gyms, the difference is night and day. Plus the trainers actually care about your form.",
        highlight: "Muscle Gain",
    },
    {
        name: "Ananya Desai",
        role: "Yoga enthusiast",
        image: null,
        rating: 5,
        text: "I joined for yoga but stayed for everything else. The variety of classes keeps things interesting. The 5AM slots are perfect for my schedule!",
        highlight: "Flexibility",
    },
    {
        name: "Vikram Singh",
        role: "CrossFit athlete",
        image: null,
        rating: 5,
        text: "Finally, a gym in Ahmedabad with proper CrossFit equipment. The coaches know their stuff and push you to be better every session.",
        highlight: "Strength PR",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-600 rounded-full text-sm font-semibold mb-4">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
                        Real <span className="gradient-text">Transformations</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Hear from our members about their journey to better health and fitness.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                                {testimonial.highlight}
                            </div>

                            {/* Quote Icon */}
                            <div className="text-slate-200 mb-4">
                                <Quote size={32} />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Testimonial CTA */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <Play size={16} className="fill-white ml-0.5" />
                        </div>
                        Watch Member Stories
                    </button>
                </div>
            </div>
        </section>
    );
}
