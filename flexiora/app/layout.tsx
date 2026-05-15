import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLEXiORA - Transform Your Body",
  description: "Your ultimate fitness and body transformation journey starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <header className="w-full py-6 px-8 flex justify-between items-center border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <div className="text-2xl font-bold tracking-wider text-red-600">
            FLEX<span className="text-white">iORA</span>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Programs</a>
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-medium transition text-sm">
            Sign In
          </button>
        </header>
        {children}
      </body>
    </html>
  );
}
