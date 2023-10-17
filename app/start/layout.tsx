import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MANSA - Get Started",
  description: "Fill form and upload required documents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
