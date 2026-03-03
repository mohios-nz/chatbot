"use client";

import ChatWindow from "@/components/ChatWindow";

const SUGGESTIONS = [
  "What does Mohios build?",
  "How would this work for my business?",
  "What does setup look like?",
  "Can I see a real example?",
];

export default function WidgetPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ChatWindow
        apiUrl="/api/chat"
        title="Chat with Mohios"
        subtitle="Ask me anything about what we build."
        accentColor="#C4682B"
        embedded
        suggestions={SUGGESTIONS}
      />
    </div>
  );
}
