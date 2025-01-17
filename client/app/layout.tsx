import type { Metadata } from "next";
import {  Montserrat} from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include desired font weights
});


export const metadata: Metadata = {
  title: "studyGPT",
  description: "your study companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
