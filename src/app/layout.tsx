import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"; // Use a valid font like Manrope
import Header from "./components/Header/header";
import Footer from "./shared/footer/footer";
import ToutProvider from "./shared/reactour/tout-provider/tour-provider";

export const metadata: Metadata = {
  title: "call center",
  description: "call center, grow your business",
};

const manrope = Manrope({
  subsets: ["latin"], // Specify the character subset
  variable: "--font-manrope", // Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${manrope.variable} antialiased`}>
        <ToutProvider>
          <Header />
          {children}
          <Footer />
        </ToutProvider>
      </body>
    </html>
  );
}
