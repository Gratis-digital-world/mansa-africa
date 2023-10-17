import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MANSA - Privacy Policy",
  description:
    "This Privacy Policy governs the collection, use, and disclosure of your personal information when you use our website and services.",
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
