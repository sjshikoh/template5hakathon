import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
import ShoppingCart from "@/components/ShoppingCart"; // Optional: Import the ShoppingCart component

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
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
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
  );
}
