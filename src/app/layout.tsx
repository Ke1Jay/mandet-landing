import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter font which is more stable with Next.js 15
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mandet.co - Process Automation & Development Solutions",
  description: "We transform your business operations with intelligent automation and custom development that drives measurable growth. Expert automation, e-commerce, and full-stack solutions.",
  keywords: [
    "process automation",
    "business automation",
    "shopify development", 
    "custom automation solutions",
    "e-commerce development",
    "web application development",
    "Make.ai automation",
    "n8n workflows",
    "full-stack development",
    "custom web solutions"
  ],
  authors: [{ name: "Mandet Team" }],
  creator: "Mandet.co",
  publisher: "Mandet.co", 
  robots: "index, follow",
  openGraph: {
    title: "Mandet.co - Process Automation & Development Solutions",
    description: "Transform your business operations with intelligent automation and custom development. No politics, just results.",
    url: "https://mandet.co",
    siteName: "Mandet.co", 
    images: [
      {
        url: "https://mandet.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mandet.co - Automation & Development Solutions"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandet.co - Process Automation & Development Solutions",
    description: "Transform your business operations with intelligent automation and custom development. No politics, just results.",
    images: ["https://mandet.co/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://mandet.co"
  },
  other: {
    "theme-color": "#B8753A"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mandet",
              "url": "https://mandet.co",
              "logo": "https://mandet.co/logo.png",
              "description": "Automation and development solutions including process automation, Shopify development, and full-stack web services",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LV",
                "addressLocality": "Riga"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+371-XXXX-XXXX",
                "contactType": "Customer Service",
                "email": "hello@mandet.co"
              },
              "foundingDate": "2023",
              "numberOfEmployees": "2-10",
              "sameAs": []
            })
          }}
        />
        
        {/* Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Process Automation Services",
              "description": "Custom automation solutions using Make.ai, n8n, and other cutting-edge platforms",
              "provider": {
                "@type": "Organization",
                "name": "Mandet"
              },
              "serviceType": "Business Process Automation"
            })
          }}
        />
      </body>
    </html>
  );
}
