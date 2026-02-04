"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Ahmedabad",
        avatar: "👩",
        rating: 5,
        text: "Ordered a customized name plate for my daughter's room - absolutely loved it! The quality was amazing.",
        product: "Name Plate",
    },
    {
        id: 2,
        name: "Rajesh Patel",
        location: "Surat",
        avatar: "👨",
        rating: 5,
        text: "The personalized meal set I ordered for my son's birthday was a huge hit! Great attention to detail.",
        product: "Meal Set",
    },
    {
        id: 3,
        name: "Neha Desai",
        location: "Vadodara",
        avatar: "👩‍💼",
        rating: 5,
        text: "Beautiful DIY kit for my kids! They loved creating their own art. The packaging was excellent.",
        product: "DIY Art Kit",
    },
    {
        id: 4,
        name: "Amit Shah",
        location: "Ahmedabad",
        avatar: "👨‍💼",
        rating: 5,
        text: "Got a customized trolley rack for my daughter - she absolutely adores it! Quality is top-notch.",
        product: "Trolley Rack",
    },
    {
        id: 5,
        name: "Kavita Mehta",
        location: "Rajkot",
        avatar: "👩‍🦰",
        rating: 5,
        text: "The personalized piggy bank I ordered was perfect! My son loves seeing his name on it.",
        product: "Piggy Bank",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            What Our <span className="gradient-text">Customers</span> Say
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className={`bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-lg ${index === 2 ? "hidden lg:block" : index === 1 ? "hidden md:block" : ""
                                }`}
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900 text-sm">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        {testimonial.location} • {testimonial.product}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator - Simplified */}
                <div className="flex justify-center gap-1.5 mt-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
