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

  // Create iframe container
  var iframe = document.createElement("iframe");
  iframe.src = iframeUrl;
  iframe.style.cssText =
    "position:fixed;bottom:0;right:0;width:440px;height:640px;border:none;z-index:2147483647;background:transparent;pointer-events:none;";
  iframe.setAttribute("allow", "clipboard-write");
  iframe.title = "Chat Widget";

  // Allow the widget to receive pointer events only on its interactive parts
  iframe.addEventListener("load", function () {
    // The widget itself handles pointer-events on its children
    // We keep the iframe container as pointer-events:none so the host page
    // remains clickable, and the widget sets pointer-events:auto on its elements
  });

  document.body.appendChild(iframe);

  // Listen for resize messages from the widget
  window.addEventListener("message", function (e) {
    if (e.origin !== new URL(host).origin) return;
    if (e.data && e.data.type === "chat-widget-resize") {
      iframe.style.pointerEvents = e.data.open ? "auto" : "none";
    }
  });
})();
