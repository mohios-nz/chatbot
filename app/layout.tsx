import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohios AI Assistant",
  description: "Meet the Mohios AI — trained on our methodology, available 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
