"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit inquiry");
            }

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-[80px]">
            {/* Hero Section */}
            <Section variant="dark" padding="md">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-white mb-4">Get In Touch</h1>
                    <p className="text-white/80 text-lg">
                        Have a question or want to discuss a custom gift idea?
                        We're here to help! Reach out to us through any of the channels below.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="mb-8 font-bold text-slate-900">Contact <span className="gradient-text">Information</span></h2>

                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6">
                                <div className="w-[50px] h-[50px] bg-slate-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">Call Us</h4>
                                    <p className="m-0 text-slate-600">+91 1234567890</p>
                                    <p className="m-0 text-sm text-gray-500">Mon-Sat, 10am-7pm</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-[50px] h-[50px] bg-slate-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">Email Us</h4>
                                    <p className="m-0 text-slate-600">abc@email.com</p>
                                    <p className="m-0 text-sm text-gray-500">We'll reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-[50px] h-[50px] bg-slate-100 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">Visit Us</h4>
                                    <p className="m-0 text-slate-600">Ahmedabad, Gujarat, India</p>
                                    <p className="m-0 text-sm text-gray-500">By appointment only</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-[50px] h-[50px] bg-green-50 rounded-lg flex items-center justify-center text-green-500 shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-slate-900">WhatsApp</h4>
                                    <p className="m-0 text-slate-600">+91 1234567890</p>
                                    <p className="m-0 text-sm text-gray-500">Instant chat support</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock size={20} className="text-primary" />
                                <h4 className="m-0 font-bold text-slate-900">Business Hours</h4>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600">Monday - Saturday</span>
                                <span className="font-bold text-slate-900">10:00 AM - 07:00 PM</span>
                            </div>
                            <div className="flex justify-between text-secondary">
                                <span className="text-slate-600 text-slate-400">Sunday</span>
                                <span className="font-bold">Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-50 relative overflow-hidden">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                                <h3 className="text-3xl font-bold mb-4 text-slate-900">Message Sent!</h3>
                                <p className="text-slate-600 max-w-sm mb-8">
                                    Thank you for reaching out. We have received your inquiry and will get back to you within 24 hours.
                                </p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-6 text-slate-900">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-gray-700">Full Name</label>
                                            <input name="name" type="text" placeholder="John Doe" required className="input w-full" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-gray-700">Email Address</label>
                                            <input name="email" type="email" placeholder="john@example.com" required className="input w-full" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
                                            <input name="phone" type="tel" placeholder="+91 1234567890" required className="input w-full" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-gray-700">Subject</label>
                                            <select name="subject" className="input w-full">
                                                <option>General Inquiry</option>
                                                <option>Product Quote</option>
                                                <option>Custom Order</option>
                                                <option>Bulk/Corporate Order</option>
                                                <option>Order Tracking</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font-semibold text-gray-700">Your Message</label>
                                        <textarea name="message" placeholder="Tell us what you're looking for..." required className="input w-full min-h-[150px]"></textarea>
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-sm font-medium">{error}</p>
                                    )}

                                    <Button type="submit" variant="primary" fullWidth size="lg" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                Sending...
                                                <Loader2 size={20} className="animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={20} />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <section className="h-[450px] bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="text-center bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto max-w-[90%]">
                        <h3 className="text-xl font-bold mb-2">Our Location</h3>
                        <p className="text-gray-600 mb-4">Ahmedabad, Gujarat, India</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-slate-900 border-slate-200">
                            Open in Google Maps
                        </a>
                    </div>
                </div>
                {/* Placeholder for map iframe */}
                <div className="w-full h-full bg-slate-200 opacity-50"></div>
            </section>
        </div>
    );
}
