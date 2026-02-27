"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ChatWidget from "@/components/ChatWidget";

function WidgetInner() {
  const searchParams = useSearchParams();

  const systemPrompt =
    searchParams.get("systemPrompt") || "You are a helpful assistant.";
  const title = searchParams.get("title") || "Chat";
  const accentColor = searchParams.get("accentColor") || "#6366f1";

  return (
    <ChatWidget
      apiUrl="/api/chat"
      systemPrompt={systemPrompt}
      title={title}
      accentColor={accentColor}
    />
  );
}

export default function WidgetPage() {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background: transparent;
            overflow: hidden;
          }
        `}</style>
      </head>
      <body>
        <Suspense fallback={null}>
          <WidgetInner />
        </Suspense>
      </body>
    </html>
  );
}
