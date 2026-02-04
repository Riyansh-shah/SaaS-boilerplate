"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already responded to cookie consent
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) return null;

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <div className="fixed bottom-4 left-4 right-4 max-w-md bg-white rounded-2xl shadow-2xl p-5 z-[900] animate-fade-in-up border border-slate-100">
            <button
                onClick={handleDecline}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
            >
                <X size={16} />
            </button>

            <h4 className="font-semibold text-slate-900 mb-2 text-sm">🍪 Cookie Notice</h4>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies.
            </p>

            <div className="flex gap-2">
                <button onClick={handleAccept} className="btn btn-primary text-xs px-4 py-2">
                    Accept
                </button>
                <button onClick={handleDecline} className="btn btn-outline text-xs px-4 py-2">
                    Decline
                </button>
            </div>
        </div>
    );
}
