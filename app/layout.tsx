import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "CC-Trial | Customized Gift Ideas | Ahmedabad",
    template: "%s | CC-Trial",
  },
  description:
    "Discover unique customized gifts for kids and loved ones. Shop furniture, room décor, DIY kits, school supplies, and more. Based in Ahmedabad, Gujarat.",
  keywords: [
    "customized gifts",
    "personalized gifts",
    "kids gifts",
    "Ahmedabad gifts",
    "DIY kits",
    "room décor",
    "furniture for kids",
    "school stationery",
    "birthday gifts",
    "Gujarat",
  ],
  authors: [{ name: "CC-Trial" }],
  creator: "CC-Trial",
  publisher: "CC-Trial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cc-trial.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CC-Trial | Customized Gift Ideas",
    description:
      "Discover unique customized gifts for kids and loved ones. Shop furniture, room décor, DIY kits, and more.",
    url: "https://cc-trial.com",
    siteName: "CC-Trial",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CC-Trial | Customized Gift Ideas",
    description:
      "Discover unique customized gifts for kids and loved ones. Shop furniture, room décor, DIY kits, and more.",
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
              "@type": "LocalBusiness",
              name: "CC-Trial",
              description:
                "Customized gift ideas for kids and loved ones in Ahmedabad",
              url: "https://cc-trial.com",
              telephone: "+91-1234567890",
              email: "abc@email.com",
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
              openingHours: "Mo-Sa 10:00-19:00",
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
