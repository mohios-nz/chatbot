"use client";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  accentColor: string;
}

export default function MessageBubble({
  role,
  content,
  accentColor,
}: MessageBubbleProps) {
  const isUser = role === "user";

  // Basic markdown-ish formatting: **bold**, *italic*, `code`, newlines
  function formatContent(text: string) {
    const parts: (string | JSX.Element)[] = [];
    // Split by code blocks first
    const segments = text.split(/(`[^`]+`)/g);
    segments.forEach((segment, i) => {
      if (segment.startsWith("`") && segment.endsWith("`")) {
        parts.push(
          <code
            key={i}
            className="bg-black/10 rounded px-1 py-0.5 text-sm font-mono"
          >
            {segment.slice(1, -1)}
          </code>
        );
      } else {
        // Handle bold and italic
        const formatted = segment
          .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
          .map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={`${i}-${j}`}>{part.slice(2, -2)}</strong>
              );
            }
            if (part.startsWith("*") && part.endsWith("*")) {
              return <em key={`${i}-${j}`}>{part.slice(1, -1)}</em>;
            }
            return part;
          });
        parts.push(...formatted);
      }
    });
    return parts;
  }

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "text-white rounded-br-md"
            : "bg-gray-100 text-gray-800 rounded-bl-md"
        }`}
        style={isUser ? { backgroundColor: accentColor } : undefined}
      >
        {formatContent(content)}
      </div>
    </div>
  );
}
