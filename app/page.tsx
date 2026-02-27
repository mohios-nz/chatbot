import ChatWidget from "@/components/ChatWidget";

const EXAMPLE_QUESTIONS = [
  "What does Mohios do?",
  "How much does a chatbot cost?",
  "Is AI right for my business?",
  "How is this different from ChatGPT?",
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top brand */}
      <div className="pt-10 px-6 text-center">
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.875rem",
            letterSpacing: "0.3em",
            color: "#C8A84E",
          }}
        >
          MOHIOS
        </p>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Meet the Mohios AI
        </h1>

        <p
          style={{
            maxWidth: "600px",
            textAlign: "center",
            color: "#a1a1aa",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Trained on our methodology. Available 24/7. Ask it anything about what
          we do, how we work, or whether AI makes sense for your business.
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
              style={{
                border: "1px solid #C8A84E",
                background: "transparent",
                color: "#C8A84E",
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
          paddingTop: "1rem",
        }}
      >
        <p style={{ color: "#71717a", fontSize: "0.8125rem" }}>
          Built by{" "}
          <a
            href="https://mohios.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a1a1aa",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Mohios
          </a>
        </p>
        <p
          style={{
            color: "#52525b",
            fontSize: "0.6875rem",
            marginTop: "0.5rem",
            fontStyle: "italic",
          }}
        >
          m&#x14D;hio (M&#x101;ori) — to know, to understand, to be expert in
        </p>
      </footer>

      <ChatWidget title="Mohios AI" accentColor="#0F7B6C" />

      <style>{`
        .pill-button:hover {
          background: #C8A84E !important;
          color: #0A0A0F !important;
        }
      `}</style>
    </main>
  );
}
