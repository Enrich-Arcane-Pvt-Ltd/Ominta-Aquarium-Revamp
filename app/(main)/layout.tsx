import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./Components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ominta Aquarium",
  description: "Luxury Aquarium Design & Installation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b1b1b] text-white`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </body>
    </html>
  );
}
