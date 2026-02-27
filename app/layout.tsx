import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohios AI",
  description:
    "AI assistant trained on the Mohios methodology. Ask about AI consulting, chatbots, and what we build.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          backgroundColor: "#0A0A0F",
          color: "#ffffff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
