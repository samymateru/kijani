import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {TopNavigation} from "@/app/home/_home/components/top-navigation";
import {BottomNavigation} from "@/app/home/_home/components/bottom_navigation";
import { Poppins } from 'next/font/google'


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Choose based on your design
    variable: '--font-poppins',    // Optional: if using CSS variable
    display: 'swap'
})


export const metadata: Metadata = {
  title: "Kijani",
  description: "Website To showcase and self Plants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="w-svw h-svh overflow-hidden bg-background scroll-smooth ${poppins.className}" >
      <body className="hw-svw h-svh bg-background overflow-y-auto">
      <header className="sticky top-0 z-50 bg-background px-2 sm:px-5 md:px-10 oveflow-hidden">
        <TopNavigation />
      </header>
        <section className={"overflow-hidden px-3 sm:px-5 md:px-14"}>
          {children}
        </section>
        <BottomNavigation/>
      </body>
    </html>
  );
}
