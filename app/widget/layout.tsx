import "../globals.css";

export const metadata = {
  title: "Chat with Mohios",
};

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          overflow: "hidden",
          background: "transparent",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
