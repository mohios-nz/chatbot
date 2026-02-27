import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Chat Widget Demo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          An embeddable AI chat widget powered by Claude. Click the chat bubble
          in the bottom-right corner to try it out.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Embed on your site
          </h2>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
            <code>{`<script>
  window.ChatWidgetConfig = {
    host: "https://your-app.vercel.app",
    systemPrompt: "You are a helpful assistant for Acme Corp.",
    title: "Acme Support",
    accentColor: "#6366f1"
  };
</script>
<script src="https://your-app.vercel.app/widget.js"></script>`}</code>
          </pre>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Configuration
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">
                    Option
                  </th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">
                    Default
                  </th>
                  <th className="text-left py-2 font-medium text-gray-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">host</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">URL where the widget is deployed</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">systemPrompt</td>
                  <td className="py-2 pr-4 text-xs">
                    &quot;You are a helpful assistant.&quot;
                  </td>
                  <td className="py-2">System prompt for Claude</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-mono text-xs">title</td>
                  <td className="py-2 pr-4">&quot;Chat&quot;</td>
                  <td className="py-2">Title shown in the chat header</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">accentColor</td>
                  <td className="py-2 pr-4">#6366f1</td>
                  <td className="py-2">Primary color for the widget</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ChatWidget
        systemPrompt="You are a friendly demo assistant for the Chat Widget project. Keep responses concise and helpful."
        title="Demo Chat"
        accentColor="#6366f1"
      />
    </main>
  );
}
