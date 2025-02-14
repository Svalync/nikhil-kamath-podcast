"use client";

import { useState } from "react";

export default function ChatLayout() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="container mx-auto h-screen bg-gray-100 flex items-center justify-center">
      {!loaded && <p>Loading chatbot...</p>}
      <iframe
        height="100%"
        width="100%"
        src="https://svalync.com/widget_chatbot/fd11c5e8-c7d9-4d7e-bdf2-10f7010d02cf"
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? "block" : "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      ></iframe>
    </div>
  );
}
