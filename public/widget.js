(function () {
  "use strict";

  var config = window.ChatWidgetConfig || {};
  var host = config.host || "";

  if (!host) {
    // Infer host from the script tag's src
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].src || "";
      if (src.indexOf("widget.js") !== -1) {
        host = src.replace(/\/widget\.js.*$/, "");
        break;
      }
    }
  }

  if (!host) {
    console.error("[ChatWidget] Could not determine host URL. Set window.ChatWidgetConfig.host");
    return;
  }

  // Build iframe URL with config params
  var params = new URLSearchParams();
  if (config.systemPrompt) params.set("systemPrompt", config.systemPrompt);
  if (config.title) params.set("title", config.title);
  if (config.accentColor) params.set("accentColor", config.accentColor);

  var iframeUrl = host + "/widget?" + params.toString();

  // Create iframe — starts small (just the bubble), expands when chat opens
  var iframe = document.createElement("iframe");
  iframe.src = iframeUrl;
  iframe.style.cssText =
    "position:fixed;bottom:0;right:0;width:80px;height:80px;border:none;z-index:2147483647;background:transparent;";
  iframe.setAttribute("allow", "clipboard-write");
  iframe.title = "Chat Widget";

  document.body.appendChild(iframe);

  // Listen for open/close messages from the widget to resize the iframe
  window.addEventListener("message", function (e) {
    if (e.origin !== new URL(host).origin) return;
    if (e.data && e.data.type === "chat-widget-resize") {
      if (e.data.open) {
        iframe.style.width = "440px";
        iframe.style.height = "640px";
      } else {
        iframe.style.width = "80px";
        iframe.style.height = "80px";
      }
    }
  });
})();
