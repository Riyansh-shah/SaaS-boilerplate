import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "ABC.gym Gym Trial | Transform Your Body, Transform Your Life",
    template: "%s | ABC.gym Gym Trial",
  },
  description:
    "Your premier fitness destination. Join our state-of-the-art gym with expert trainers, diverse classes, and flexible memberships. Start your transformation today!",
  keywords: [
    "gym",
    "fitness center",
    "workout",
    "personal training",
    "gym membership",
    "strength training",
    "cardio",
    "yoga classes",
    "HIIT",
    "CrossFit",
    "fitness classes",
  ],
  authors: [{ name: "ABC.gym Gym Trial" }],
  creator: "ABC.gym Gym Trial",
  publisher: "ABC.gym Gym Trial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abcgym.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ABC.gym Gym Trial | Transform Your Body, Transform Your Life",
    description:
      "Your premier fitness destination with state-of-the-art equipment, expert trainers, and diverse fitness classes.",
    url: "https://abcgym.com",
    siteName: "ABC.gym Gym Trial",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC.gym Gym Trial | Transform Your Body, Transform Your Life",
    description:
      "Your premier fitness destination with state-of-the-art equipment, expert trainers, and diverse fitness classes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "ABC.gym Gym Trial",
              description:
                "Premier fitness destination with state-of-the-art equipment, expert trainers, and diverse fitness classes",
              url: "https://abcgym.com",
              telephone: "+91-1234567890",
              email: "info@abcgym.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "23.0225",
                longitude: "72.5714",
              },
              openingHours: "Mo-Su 05:00-23:00",
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
