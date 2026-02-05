"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Dumbbell,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Classes" },
  { href: "/pricing", label: "Memberships" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact Us" },
];

const classes = [
  { href: "/classes?category=strength", label: "Strength Training" },
  { href: "/classes?category=cardio", label: "Cardio" },
  { href: "/classes?category=yoga", label: "Yoga & Pilates" },
  { href: "/classes?category=hiit", label: "HIIT" },
  { href: "/classes?category=crossfit", label: "CrossFit" },
  { href: "/classes?category=personal", label: "Personal Training" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/membership-terms", label: "Membership Terms" },
  { href: "/cancellation", label: "Cancellation Policy" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] p-8 md:p-12 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Get Fitness Tips & Updates
            </h3>
            <p className="text-white/80 m-0">
              Subscribe for workout tips, nutrition advice, and exclusive member offers!
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn bg-white text-blue-600 hover:bg-gray-100 font-bold whitespace-nowrap">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Dumbbell size={22} className="text-white" />
              </div>
              <span className="text-xl font-bold font-heading">Silver Life</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body and mind at Silver Life Gym. State-of-the-art equipment,
              expert trainers, and a supportive community to help you achieve your fitness goals.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={18} className="text-blue-500" />
                +91 1234567890
              </a>
              <a href="mailto:info@silverlifegym.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={18} className="text-blue-500" />
                info@silverlifegym.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Classes</h4>
            <ul className="space-y-3">
              {classes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Information</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Opening Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="text-white font-semibold mb-2">Opening Hours</h5>
              <p className="text-gray-400 text-sm">Mon - Sun: 5:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Silver Life Gym Trial. All rights reserved. Made with 💪 in Ahmedabad
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-sm"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
