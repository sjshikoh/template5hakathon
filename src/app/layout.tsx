import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";

import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = Montserrat({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <header  className="flex justify-end items-center p-10 gap-4 h-16 text-2xl font-semibold">
            <SignedOut>
              <SignInButton />
             
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

        </header>
       
        <CartProvider>
          {" "}
          {/* Wrap everything inside the CartProvider */}
          <Navbar />
          
            
          
          {children}
          <Footer />
          {/* Optional: Include ShoppingCart here or as part of the Navbar */}
          {/* <ShoppingCart /> */}
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
