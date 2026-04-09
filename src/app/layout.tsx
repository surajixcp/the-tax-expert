import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The TAX expert | Premium Tax & Business Solutions",
  description: "Expert Tax & Business Solutions You Can Trust",
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
        {children}
      </body>
    </html>
  );
}
