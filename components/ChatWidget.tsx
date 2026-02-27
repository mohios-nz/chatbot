"use client";

import { useState, useEffect, useCallback } from "react";
import ChatWindow from "./ChatWindow";

interface ChatWidgetProps {
  apiUrl?: string;
  systemPrompt?: string;
  title?: string;
  accentColor?: string;
}

export default function ChatWidget({
  apiUrl = "/api/chat",
  systemPrompt = "You are a helpful assistant.",
  title = "Chat",
  accentColor = "#6366f1",
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Notify parent iframe about open/close state
  const notifyParent = useCallback((open: boolean) => {
    try {
      if (window.parent !== window) {
        window.parent.postMessage({ type: "chat-widget-resize", open }, "*");
      }
    } catch {
      // Ignore cross-origin errors
    }
  }, []);

  useEffect(() => {
    notifyParent(isOpen);
  }, [isOpen, notifyParent]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end" style={{ pointerEvents: "auto" }}>
      {/* Chat Window */}
      <div
        className={`mb-3 transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
        style={{ width: "380px", height: "560px" }}
      >
        <ChatWindow
          apiUrl={apiUrl}
          systemPrompt={systemPrompt}
          title={title}
          accentColor={accentColor}
          onClose={() => setIsOpen(false)}
        />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: accentColor }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"
          }`}
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"
          }`}
        >
          <path d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>
    </div>
  );
}
