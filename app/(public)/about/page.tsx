import Section from "@/components/ui/Section";
import { Award, Target, Eye, Users, Heart, Sparkles, Dumbbell, Clock, Shield } from "lucide-react";

export const metadata = {
    title: "About Us | ABC.gym Gym Trial",
    description: "Learn more about ABC.gym Gym, our story, mission, and commitment to transforming lives through fitness in Ahmedabad.",
};

export default function AboutPage() {
    return (
        <div className="pt-[80px]">
            {/* Hero Section */}
            <Section variant="dark" padding="lg">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-white mb-6">Our Story</h1>
                    <p className="text-white/80 text-xl">
                        Transforming lives through fitness since 2018. Based in the heart
                        of Ahmedabad, ABC.gym Gym is more than just a workout space –
                        it's a community dedicated to helping you become your best self.
                    </p>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section variant="light">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-12 rounded-3xl shadow-md border border-gray-100">
                        <div className="text-primary mb-6">
                            <Target size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower individuals to achieve their fitness goals through
                            exceptional facilities, expert guidance, and a supportive community.
                            We believe everyone deserves access to world-class fitness resources
                            to transform their body and mind.
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-3xl shadow-md border border-gray-100">
                        <div className="text-cyan-500 mb-6">
                            <Eye size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become Gujarat's most trusted fitness destination, known for
                            our innovative training programs, cutting-edge equipment, and
                            genuine care for every member's success. We aim to inspire a
                            healthier, stronger community.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Stats/Experience - Gym Metrics */}
            <Section>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">6+</h2>
                        <p className="text-gray-600 font-medium">Years of Experience</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">2500+</h2>
                        <p className="text-gray-600 font-medium">Active Members</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">50+</h2>
                        <p className="text-gray-600 font-medium">Weekly Classes</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">15+</h2>
                        <p className="text-gray-600 font-medium">Expert Trainers</p>
                    </div>
                </div>
            </Section>

            {/* Core Values - Gym Themed */}
            <Section variant="light">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Our Core <span className="gradient-text">Values</span></h2>
                    <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Dumbbell, title: "Excellence", desc: "We maintain the highest standards in equipment, cleanliness, and training quality." },
                        { icon: Users, title: "Community", desc: "We foster a supportive environment where everyone feels welcome and motivated." },
                        { icon: Heart, title: "Passion", desc: "We are passionate about fitness and genuinely care about your success." },
                        { icon: Shield, title: "Safety", desc: "Your safety is our priority with proper equipment maintenance and guidance." },
                        { icon: Clock, title: "Consistency", desc: "We believe in sustainable fitness habits that lead to lasting results." },
                        { icon: Sparkles, title: "Innovation", desc: "We constantly evolve our programs with the latest fitness science and trends." },
                    ].map((value, i) => (
                        <div key={i} className="text-center p-8 bg-white/50 rounded-2xl hover:bg-white transition-colors shadow-sm border border-gray-100/50">
                            <div className="text-primary mb-4 flex justify-center">
                                <value.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
