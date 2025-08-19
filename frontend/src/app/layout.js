import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import LanguageToggle from "@/components/LanguageToggle";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ilyass Tran - Developer",
  description: "Portfolio of Ilyass Tran, a developer based in Toulouse, France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
          <Navbar />
          <LanguageToggle />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
