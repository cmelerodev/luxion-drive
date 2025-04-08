import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { NavbarDashboard } from "../components/NavbarDashboard";


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
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
