import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import * as React from "react";
import { Provider } from "./provider";
import Header from "@/shared/widgets/header";
import Footer from "@/shared/widgets/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-Poppins",
});
export const metadata: Metadata = {
  title: "Shahriar Sajeeb",
  description: "Shahriar Sajeeb is a professional software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Provider>
          <Header />
          {children}
          <Footer />
          </Provider>
      </body>
    </html>
  );
}
