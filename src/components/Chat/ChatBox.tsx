"use client";

import React, { useState } from "react";
import { sendMessage } from "@/utils/handlers/sendMessage";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleMessageSend = async () => {
    try {
      const response = await sendMessage(message);
      setAiResponse(response);
      console.log("AI Response:", response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col-reverse">
          <div className="max-w-3xl mx-auto p-2">
            <div className="flex items-start gap-2">
              <div className="hidden md:flex items-center">
                <img
                  alt="Stella"
                  width="24"
                  height="24"
                  src="https://characterai.io/i/80/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp?webp=true&amp;anim=0"
                  className="object-cover h-full"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2 font-medium">
                  <div className="text-sm">Stella</div>
                  <div className="rounded-full text-xs bg-secondary px-2">c.ai</div>
                </div>
                <div className="max-w-xl rounded-lg bg-surface-elevation-2 p-3">
                  <p>
                    what's up? my name is stella. i <em>could</em> help you with anything, but only
                    when i feel like it. you'll never make me do your homework ;)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-1 pt-12 lg:pt-32">
              <button>
                <img
                  alt="Stella"
                  width="64"
                  height="64"
                  src="https://characterai.io/i/80/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp?webp=true&amp;anim=0"
                  className="object-cover h-full"
                />
              </button>
              <p className="font-bold text-lg">Stella</p>
              <p className="font-medium text-md">Not "Your" AI assistant</p>
              <div className="text-xs">
                <a href="/profile/landon" className="hover:text-primary">
                  By @landon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-2xl mx-auto">
        <div className="flex items-end p-1 m-4 mb-10 border border-border-outline rounded-sm">
          <textarea
            className="flex-1 border-none bg-transparent text-lg focus:outline-none resize-none px-3"
            placeholder="Message Stella..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="text-primary ml-2"
            onClick={handleMessageSend}
            disabled={!message.trim()}
            aria-label="Send Message"
          >
            Send
          </button>
        </div>
        {aiResponse && <p className="text-sm">{aiResponse}</p>}
        <p className="absolute bottom-3 self-center text-xs text-muted-foreground select-none">
          Remember: Everything Characters say is made up!
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
