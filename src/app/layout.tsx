import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CompQsoft Digital | AI & Digital Transformation Services",
  description: "Leading AI Microsoft Frontier Transformation Partner",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
