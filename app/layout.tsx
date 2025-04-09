import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"

import {
  ClerkProvider,
} from '@clerk/nextjs'
import { NavbarDashboard } from "../components/NavbarDashboard";
import { Footer } from "@/components/Footer";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxion Drive",
  description: "Luxion Drive - Luxury Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="es">
      <body className={`${outfit.className} antialiased`}>
        <NextTopLoader color="#000"/>
        <NavbarDashboard />
            {children}
          <Footer />
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
