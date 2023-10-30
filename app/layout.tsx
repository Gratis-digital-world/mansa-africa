import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

// import { Montserrat } from "@next/font/google";

// const myFont = localFont({
//   src: "../public/fonts/euclid/Euclid-Circular-A-Regular.ttf",
// src: [
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Bold-Italic.ttf",
//     // weight: "400",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Bold.ttf",
//     // weight: "400",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Italic.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Light-Italic.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Light.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Medium-Italic.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Medium.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-Regular.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-SemiBold-Italic.ttf",
//     // weight: "700",
//   },
//   {
//     path: "../public/fonts/euclid/Euclid-Circular-A-SemiBold.ttf",
//     // weight: "400",
//   },
// ],
//   display: "swap",
//   variable: "--font-euclid",
// });

// const poppins = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

// const myFont = localFont({
//   // src: "../public/fonts/euclid/Euclid-Circular-A-Regular.ttf",

//   display: "swap",
//   weight: "400 500 600 700 800 900",
//   variable: "--font-euclid",
// });

export const metadata: Metadata = {
  title: "MANSA - Africa's Due Dilligence Data Platform",
  description: "Empowering African Businesses with Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${myFont.variable} font-myFont`}>{children}</body> */}
      {/* <body className={myFont.className}>{children}</body> */}
      <body className="mycontainer">{children}</body>
    </html>
  );
}
