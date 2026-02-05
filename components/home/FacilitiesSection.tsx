"use client";

import { Dumbbell, Bike, Activity, Zap, Waves, Users } from "lucide-react";

const facilities = [
    {
        icon: Dumbbell,
        title: "Strength Zone",
        description: "Complete free weights area with dumbbells up to 50kg, Olympic barbells, squat racks, and cable machines.",
        items: ["Power Racks", "Cable Crossover", "Smith Machine", "Plate-Loaded Equipment"],
    },
    {
        icon: Bike,
        title: "Cardio Floor",
        description: "Premium cardio equipment including treadmills, ellipticals, bikes, and rowing machines with personal screens.",
        items: ["Treadmills", "Ellipticals", "Spin Bikes", "Rowing Machines"],
    },
    {
        icon: Activity,
        title: "Functional Training",
        description: "Dedicated space for functional fitness with turf area, battle ropes, TRX, kettlebells, and more.",
        items: ["TRX Systems", "Battle Ropes", "Kettlebells", "Plyo Boxes"],
    },
    {
        icon: Waves,
        title: "Yoga & Stretching",
        description: "Peaceful studio space with wooden flooring, mirrors, and all equipment for yoga and stretching sessions.",
        items: ["Yoga Mats", "Props & Blocks", "Meditation Space", "Climate Controlled"],
    },
    {
        icon: Zap,
        title: "CrossFit Box",
        description: "Fully equipped CrossFit area with Olympic lifting platforms, pull-up rigs, and competition-grade equipment.",
        items: ["Olympic Platforms", "Pull-up Rigs", "Climbing Ropes", "Wall Balls"],
    },
    {
        icon: Users,
        title: "Group Classes",
        description: "Spacious group fitness studio with premium sound system and projection for instructor-led classes.",
        items: ["Sound System", "Aerobics Floor", "Step Platforms", "Resistance Bands"],
    },
];

export default function FacilitiesSection() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
                        Our Facilities
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        State-of-the-Art <span className="gradient-text">Equipment</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Explore our specialized zones equipped with the finest fitness equipment from around the world.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                                <facility.icon size={28} />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                {facility.description}
                            </p>

                            {/* Equipment List */}
                            <div className="grid grid-cols-2 gap-2">
                                {facility.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
