import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const nunito = Nunito({
  variable: "--font-nunito", // Змінна для використання в CSS
  subsets: ["latin"],
  weight: ["400", "700"], // Додай необхідні товщини
});



export const metadata: Metadata = {
  title: "rehab manual",
  description: "all about rehab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased min-h-screen flex flex-col`}>
        <Header/>        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
