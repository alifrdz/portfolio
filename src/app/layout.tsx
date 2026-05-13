import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/slides/Navbar"; // Tambahkan impor ini

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alif Portfolio",
  description: "Web Portfolio based on guidelines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased h-full">
      <body className={`${poppins.className} min-h-screen flex flex-col font-sans`}>
        {/* Navbar ditaruh di sini supaya muncul otomatis di semua halaman */}
        <Navbar /> 
        
        {children}
      </body>
    </html>
  );
}