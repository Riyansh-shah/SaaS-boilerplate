import Section from "@/components/ui/Section";
import { Award, Target, Eye, Users, Heart, Sparkles } from "lucide-react";

export const metadata = {
    title: "About Us | CC-Trial",
    description: "Learn more about CC-Trial, our story, mission, and how we craft customized gifts in Ahmedabad.",
};

export default function AboutPage() {
    return (
        <div className="pt-[80px]">
            {/* Hero Section */}
            <Section variant="dark" padding="lg">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-white mb-6">Our Story</h1>
                    <p className="text-white/80 text-xl">
                        Crafting smiles and memories through personalized gifts since 2020.
                        Based in the heart of Ahmedabad, we believe every gift should be as
                        unique as the person receiving it.
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
                            To revolutionize the gifting experience by providing high-quality,
                            customizable products that help people express their love and
                            creativity. We strive to make every occasion special with a touch
                            of personalization.
                        </p>
                    </div>
                    <div className="bg-white p-12 rounded-3xl shadow-md border border-gray-100">
                        <div className="text-secondary mb-6">
                            <Eye size={48} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become India's leading destination for personalized gifts,
                            known for our innovation, craftsmanship, and commitment to
                            customer satisfaction. We aim to inspire creativity in every home.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Stats/Experience */}
            <Section>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">5+</h2>
                        <p className="text-gray-600 font-medium">Years of Experience</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">10k+</h2>
                        <p className="text-gray-600 font-medium">Gifts Delivered</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">100+</h2>
                        <p className="text-gray-600 font-medium">Product Categories</p>
                    </div>
                    <div>
                        <h2 className="gradient-text text-6xl font-extrabold mb-2">99%</h2>
                        <p className="text-gray-600 font-medium">Happy Customers</p>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section variant="light">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Our Core <span className="gradient-text">Values</span></h2>
                    <p className="text-gray-500 mt-2">The principles that guide everything we do</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Heart, title: "Passion", desc: "We are passionate about creativity and crafting the perfect gifts." },
                        { icon: Sparkles, title: "Quality", desc: "We never compromise on the quality of materials or craftsmanship." },
                        { icon: Users, title: "Customer First", desc: "Your satisfaction is our priority. We listen and evolve with you." },
                        { icon: Award, title: "Innovation", desc: "We constantly explore new designs and personalization techniques." },
                        { icon: Heart, title: "Integrity", desc: "We believe in honest pricing and transparent business practices." },
                        { icon: Sparkles, title: "Craftsmanship", desc: "Every product is finished with meticulous attention to detail." },
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
