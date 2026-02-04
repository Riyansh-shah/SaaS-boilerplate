"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        name: "Furniture",
        slug: "furniture",
        emoji: "🪑",
        description: "Custom furniture for kids",
        gradient: "from-indigo-500 to-indigo-600",
    },
    {
        name: "Room Décor",
        slug: "room-decor",
        emoji: "🏠",
        description: "Personalized decorations",
        gradient: "from-orange-500 to-orange-600",
    },
    {
        name: "DIY Kits",
        slug: "diy",
        emoji: "🎨",
        description: "Creative craft kits",
        gradient: "from-teal-500 to-teal-600",
    },
    {
        name: "School & Stationery",
        slug: "school-stationery",
        emoji: "📚",
        description: "Customized supplies",
        gradient: "from-purple-500 to-purple-600",
    },
    {
        name: "Birthday",
        slug: "birthday",
        emoji: "🎂",
        description: "Party essentials",
        gradient: "from-pink-500 to-pink-600",
    },
    {
        name: "Games",
        slug: "games",
        emoji: "🎮",
        description: "Fun personalized games",
        gradient: "from-yellow-500 to-amber-500",
    },
    {
        name: "Boxes & Trays",
        slug: "boxes-trays",
        emoji: "📦",
        description: "Custom storage",
        gradient: "from-cyan-500 to-cyan-600",
    },
    {
        name: "Travel",
        slug: "travel",
        emoji: "✈️",
        description: "Travel accessories",
        gradient: "from-rose-500 to-rose-600",
    },
];

export default function CategoriesSection() {
    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                        Categories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Shop by <span className="gradient-text">Category</span>
                    </h2>
                    <p className="max-w-lg mx-auto text-gray-500">
                        Browse our wide range of customizable products designed to create lasting memories.
                    </p>
                </div>

                {/* Categories Grid - Cleaner */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="group relative bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100 hover:border-slate-200"
                        >
                            {/* Emoji Icon */}
                            <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {category.emoji}
                            </div>

                            {/* Category Name */}
                            <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-1">
                                {category.name}
                            </h4>

                            {/* Description */}
                            <p className="text-xs text-gray-400 hidden sm:block">
                                {category.description}
                            </p>

                            {/* Hover Arrow */}
                            <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={12} className="text-slate-600" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Link href="/products" className="btn btn-outline border-slate-200 hover:border-indigo-500 text-sm px-6 py-3">
                        View All Products
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
