import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetaxexpertt.com"),
  title: "The TAX expertt | CA, GST, ITR & Company Registration Services",
  description: "Top-rated Tax Consultant in New Delhi. We provide expertt GST Registration, Income Tax Return (ITR) filing, Company Registration, Accounting, Trademark & FSSAI services. Fast, affordable, and 100% compliant.",
  keywords: [
    "Tax Consultant in Delhi",
    "GST Registration Services", 
    "Income Tax Return Filing", 
    "ITR Filing Online",
    "Company Registration India",
    "Pvt Ltd Incorporation",
    "Trademark Registration",
    "FSSAI License",
    "MSME Udyam Registration",
    "Accounting and Bookkeeping services",
    "Chartered Accountant services Delhi",
    "Tax expert New Delhi",
    "Business compliance India"
  ],
  authors: [{ name: "Mohd. Rahamtulla" }],
  creator: "The TAX expertt",
  publisher: "The TAX expertt",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thetaxexpertt.com", // Replace with actual URL
    title: "The TAX expertt | Premium Tax & Business Solutions in India",
    description: "Expert Tax & Business Solutions You Can Trust. Affordable and 100% compliant services for all your regulatory needs including GST, ITR, and Company Incorporation.",
    siteName: "The TAX expertt",
    images: [
      {
        url: "/og-image.jpg", // Add a nice standard image url
        width: 1200,
        height: 630,
        alt: "The TAX expertt - Tax & Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The TAX expertt | Premium Tax & Business Solutions",
    description: "Expert Tax & Business Solutions You Can Trust. Affordable and 100% compliant services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="text-on-background selection:bg-secondary selection:text-white">
        <Preloader />
        {children}
      </body>

    </html>
  );
}
