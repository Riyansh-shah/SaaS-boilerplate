"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
  Heart,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

const categories = [
  { href: "/products?category=furniture", label: "Furniture" },
  { href: "/products?category=room-decor", label: "Room Décor" },
  { href: "/products?category=diy", label: "DIY Kits" },
  { href: "/products?category=school-stationery", label: "School & Stationery" },
  { href: "/products?category=birthday", label: "Birthday Gifts" },
  { href: "/products?category=games", label: "Games" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns & Refunds" },
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
        <div className="bg-primary bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2rem] p-8 md:p-12 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Subscribe to our Newsletter
            </h3>
            <p className="text-white/80 m-0">
              Get updates on new products, exclusive offers, and gift ideas!
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <button type="submit" className="btn bg-white text-primary hover:bg-slate-100 font-bold whitespace-nowrap">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="CuteCraft Logo"
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating unique customized gifts for your loved ones. From furniture to room décor,
              DIY kits to birthday gifts - we craft memories that last a lifetime.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" />
                +91 1234567890
              </a>
              <a href="mailto:abc@email.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                abc@email.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
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
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
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
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CC-Trial. All rights reserved. Made with{" "}
            <Heart size={14} className="inline text-secondary fill-secondary align-middle mx-1" />{" "}
            in Ahmedabad
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
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all shadow-sm"
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
