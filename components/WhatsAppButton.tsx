"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

export default function WhatsAppButton({
    phoneNumber = "911234567890",
    message = "Hi! I'm interested in your products.",
}: WhatsAppButtonProps) {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <button
            onClick={handleClick}
            className="whatsapp-btn animate-pulse-slow"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            <MessageCircle size={28} fill="white" />
        </button>
    );
}
