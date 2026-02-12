import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layouts/Navbar";

// Elegant serif font for headings - perfect for a library app
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Modern, readable sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BiblioSmart - Votre Bibliothèque Intelligente",
  description: "Application intelligente de gestion de bibliothèque personnelle avec recommandations IA pour Laure",
  keywords: ["bibliothèque", "livres", "lecture", "recommandations", "gestion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        { children }
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--foreground)',
            border: '1px solid var(--primary-light)',
            borderRadius: 'var(--radius-xl)',
          }
        }} />
      </body>
    </html>
  );
}
