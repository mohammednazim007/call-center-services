import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"; // Use a valid font like Manrope
import Header from "./components/Header/header";
import Footer from "./shared/footer/footer";
import ToutProvider from "./shared/reactour/tout-provider/tour-provider";
import FollowCursor from "./shared/follow-cursor/follow-cursor";
import { Toaster } from "react-hot-toast";
import SmoothScrollerProvider from "./shared/smooth-scroller-provider/smoothScroller";

export const metadata: Metadata = {
  title: "calling app marketing",
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
    <html lang="en" className="scroll-smooth no-scrollbar ">
      <body className={`${manrope.variable} `}>
        <SmoothScrollerProvider>
          <ToutProvider>
            <Header />
            {children}
            <Footer />
            <FollowCursor />
            <Toaster position="top-center" reverseOrder={false} />
          </ToutProvider>
        </SmoothScrollerProvider>
      </body>
    </html>
  );
}
