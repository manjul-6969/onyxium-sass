"use client";

import React, { useState, useEffect, useRef } from "react";
import { sendMessage } from "@/utils/handlers/sendMessage";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSend = async () => {
    try {
      if (!message.trim()) return;

      // Send user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message.trim(),
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Get AI response
      const botResponse = await sendMessage(message.trim());
      const botMessage: Message = { id: Date.now().toString(), text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error: Display error message to the user
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col-reverse flex-1 overflow-y-auto">
        <div className="max-w-xl mx-auto p-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex items-end p-1 m-4 mb-10 border rounded-sm">
        <textarea
          className="flex-1 border-none bg-transparent text-lg focus:outline-none resize-none px-3"
          placeholder="Message Stella..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="text-primary ml-2"
          onClick={handleMessageSend}
          aria-label="Send Message"
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
      <p className="text-xs text-gray-500 self-center mb-4">
        Remember: Everything Characters say is made up!
      </p>
    </div>
  );
};

interface MessageProps {
  message: Message;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { text, sender } = message;
  const isUser = sender === "user";

  return (
    <div className={`max-w-xl mx-auto p-4 ${isUser ? "order-1" : "order-2"}`}>
      <div className={`flex items-start gap-2 ${isUser ? "justify-start" : "justify-end"}`}>
        <div className="hidden md:flex items-center">
          <img
            alt={isUser ? "User" : "Stella"}
            width="24"
            height="24"
            src={isUser ? "/user-avatar.png" : "/stella-avatar.png"}
            className="object-cover h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-medium">{isUser ? "You" : "Stella"}</div>
          <div className={`max-w-xl rounded-lg ${isUser ? "bg-gray-200" : "bg-primary"} p-3`}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
