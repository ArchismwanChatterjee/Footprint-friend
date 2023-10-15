import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://widget.writesonic.com/CDN/botsonic.min.js";
    script.async = true;
    script.id = "Botsonic";

    // Add the script to the head of the document
    document.head.appendChild(script);

    // Initialize Botsonic
    script.onload = () => {
      window.Botsonic("init", {
        serviceBaseUrl: "https://api.botsonic.ai",
        token: "fefbbfd7-2654-4da6-9f5d-05a8f1a27d7f",
      });
    };
  }, []);

  return (
    <div
      id="ChatbotContainer"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      <div id="BotsonicWidgetContainer">
        {/* The Botsonic widget will be added here once the script is loaded */}
      </div>
    </div>
  );
}

export default Chatbot;
