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
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
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
      setMessage("");

      // Get AI response
      const botResponse = await sendMessage(message.trim());
      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        sender: "bot", // Set sender as "bot" for bot's response
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error: Display error message to the user
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleMessageSend();
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="max-h-80vh flex flex-1 flex-col-reverse overflow-y-auto">
        <div className="mx-auto max-w-xl p-4">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full max-w-md items-center rounded-full border">
          <textarea
            className="h-12 flex-1 resize-none rounded-full border-none border-white bg-transparent px-3 text-lg"
            placeholder="Message Stella..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          ></textarea>
          <button
            className="text-primary ml-2 flex-shrink-0"
            onClick={handleMessageSend}
            aria-label="Send Message"
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>

      <p className="mb-4 self-center text-xs text-gray-500">
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
    <div className={`mx-auto max-w-xl p-4 ${isUser ? "order-1" : "order-2"}`}>
      <div
        className={`flex items-start gap-2 ${isUser ? "justify-start" : "justify-end"}`}
      >
        <div className="hidden items-center md:flex">
          <img
            alt={isUser ? "User" : "Stella"}
            width="24"
            height="24"
            src={
              isUser
                ? "https://cdn.discordapp.com/avatars/857426474704830465/30b1869bc9920cbf8b7d767836296e1c.webp"
                : "https://cdn.discordapp.com/avatars/824584513765376032/e551b8444bcf13ddc77c6164f25a8a0c.webp"
            }
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-medium">{isUser ? "You" : "Stella"}</div>
          <div
            className={`max-w-xl rounded-lg ${isUser ? "bg-gray-200" : "bg-primary"} p-3`}
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
