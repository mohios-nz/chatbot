"use client";

import { useRef } from "react";
import ChatWidget, { ChatWidgetHandle } from "@/components/ChatWidget";

const EXAMPLE_QUESTIONS = [
  "What does Mohios build?",
  "How would this work for my business?",
  "What does setup look like?",
  "Can I see a real example?",
];

export default function Home() {
  const chatRef = useRef<ChatWidgetHandle>(null);

  function handlePromptClick(question: string) {
    chatRef.current?.sendMessage(question);
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Top brand */}
      <div className="pt-10 px-6 text-center">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9375rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#2D2019",
          }}
        >
          mohios
        </p>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#2D2019",
          }}
        >
          Chat with Mohios
        </h1>

        <p
          style={{
            maxWidth: "580px",
            textAlign: "center",
            color: "#8B7D6B",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Trained on how we work. Ask anything about what we build, how we build
          it, or whether it makes sense for your business.
        </p>

        {/* Example question pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            maxWidth: "700px",
          }}
        >
          {EXAMPLE_QUESTIONS.map((question) => (
            <button
              key={question}
              className="pill-button"
              onClick={() => handlePromptClick(question)}
              style={{
                border: "1px solid #E8E0D6",
                background: "transparent",
                color: "#C4682B",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          paddingBottom: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #E8E0D6",
        }}
      >
        <p style={{ color: "#8B7D6B", fontSize: "0.8125rem" }}>
          Built by{" "}
          <a
            href="https://mohios.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2D2019",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Mohios
          </a>
        </p>
        <p
          style={{
            color: "#8B7D6B",
            fontSize: "0.6875rem",
            marginTop: "0.5rem",
            fontStyle: "italic",
          }}
        >
          m&#x14D;hio (M&#x101;ori) — to know, to understand, to be expert in
        </p>
      </footer>

      <ChatWidget
        ref={chatRef}
        title="Chat with Mohios"
        subtitle="Ask me anything about what we build."
        accentColor="#C4682B"
      />

      <style>{`
        .pill-button:hover {
          background: #F0EBE3 !important;
          border-color: #C4682B !important;
        }
      `}</style>
    </main>
  );
}
