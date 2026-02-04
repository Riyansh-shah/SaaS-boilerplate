"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home,
  Info,
  Mail,
  ShoppingBag,
  User,
  ShoppingCart,
  Package,
  CreditCard,
  Settings,
  LogOut,
  LogIn,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Info },
  {
    href: "/products",
    label: "Products",
    icon: ShoppingBag,
    submenu: [
      { href: "/products?category=new-born", label: "New Born" },
      { href: "/products?category=toddlers", label: "Toddlers" },
      { href: "/products?category=kids", label: "Kids" },
      { href: "/products?category=teenager", label: "Teenager" },
      { href: "/products?category=school-stationery", label: "School & Stationery" },
      { href: "/products?category=furniture", label: "Furniture" },
      { href: "/products?category=room-decor", label: "Room Décor" },
      { href: "/products?category=diy", label: "DIY Kits" },
    ],
  },
  { href: "/contact", label: "Contact", icon: Mail },
];

const accountLinks = [
  { href: "/dashboard", label: "My Account", icon: User },
  { href: "/cart", label: "Shopping Cart", icon: ShoppingCart },
  { href: "/orders", label: "Past Orders", icon: Package },
  { href: "/checkout", label: "Checkout", icon: CreditCard },
  { href: "/settings", label: "Personal Info", icon: Settings },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthenticated = status === "authenticated";
  const userInitial = session?.user?.name?.charAt(0)?.toUpperCase() ||
    session?.user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
          ? "py-2 bg-white/95 backdrop-blur-md shadow-md"
          : "py-3 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="CuteCraft Logo"
              width={140}
              height={50}
              className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group py-2"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 font-semibold text-sm transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={14} className={`transition-transform duration-200 ${openSubmenu === link.label ? "rotate-180" : ""}`} />}
                </Link>

                {/* Submenu */}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 transition-all duration-200 origin-top ${openSubmenu === link.label ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-6 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-all font-medium"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Account Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className={`flex items-center gap-2 font-bold text-sm transition-colors ${isScrolled ? "text-slate-900" : "text-white"
                }`}
            >
              <Phone size={18} className="text-primary" />
              <span className="hidden xl:inline">+91 1234567890</span>
            </a>

            {isAuthenticated ? (
              /* Account Dropdown for Logged-in Users */
              <div
                className="relative"
                onMouseEnter={() => setIsAccountOpen(true)}
                onMouseLeave={() => setIsAccountOpen(false)}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${isScrolled
                      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${isScrolled ? "bg-primary text-white" : "bg-white text-primary"
                    }`}>
                    {userInitial}
                  </div>
                  <span className="hidden xl:inline">Account</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isAccountOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Account Dropdown Menu */}
                <div
                  className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 transition-all duration-200 origin-top ${isAccountOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                >
                  <div className="px-4 py-2 border-b border-slate-100 mb-2">
                    <p className="text-sm font-semibold text-slate-900">{session?.user?.name || "User"}</p>
                    <p className="text-xs text-slate-500">{session?.user?.email}</p>
                  </div>
                  {accountLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-all font-medium"
                    >
                      <item.icon size={18} />
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <button
                      onClick={() => signOut({ callbackUrl: "/login" })}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-all font-medium w-full"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Login/Signup for Guests */
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${isScrolled
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                    }`}
                >
                  <LogIn size={18} />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="btn btn-primary px-5 py-2.5 text-sm font-bold shadow-lg shadow-indigo-500/20"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[998] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[999] shadow-2xl transition-transform duration-300 transform lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <Image
            src="/logo.png"
            alt="CuteCraft Logo"
            width={100}
            height={36}
            className="h-8 w-auto"
          />
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="mb-2">
                <Link
                  href={link.href}
                  onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <link.icon size={22} className="text-primary" />
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="ml-9 mt-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-4">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-slate-500 font-medium hover:text-primary transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Account Section in Mobile */}
            {isAuthenticated && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Account</p>
                {accountLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <item.icon size={20} className="text-primary" />
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <a
            href="tel:+911234567890"
            className="flex items-center justify-center gap-3 w-full p-4 bg-white border border-slate-200 rounded-2xl text-slate-900 font-bold mb-3 shadow-sm"
          >
            <Phone size={20} className="text-primary" />
            +91 1234567890
          </a>

          {isAuthenticated ? (
            <button
              onClick={() => {
                signOut({ callbackUrl: "/login" });
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 font-bold"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 w-full p-4 bg-white border border-slate-200 rounded-2xl text-slate-900 font-bold shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn size={20} />
                Login
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary w-full p-4 rounded-2xl font-bold shadow-lg shadow-indigo-500/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

