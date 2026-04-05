"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState, type FormEvent } from "react";
import { MessageBubble } from "./MessageBubble";
import { SuggestedPrompts } from "./SuggestedPrompts";
import { TypingIndicator } from "./TypingIndicator";

export function ChatWindow() {
  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  function handlePromptSelect(prompt: string) {
    sendMessage({ text: prompt });
  }

  return (
    <div className="flex h-dvh flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-white/5 px-4 py-3">
        <a
          href="/"
          className="text-xs text-white/30 transition-colors hover:text-white/60"
        >
          &larr; Back
        </a>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/70">
            Portfolio Agent
          </span>
        </div>
        <div className="w-12" /> {/* Spacer for centering */}
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center gap-8 pt-20">
              <div className="text-center">
                <h1 className="mb-2 text-2xl font-bold text-white">
                  Welcome to my portfolio
                </h1>
                <p className="text-sm text-white/50">
                  Ask me anything about my work, skills, or background.
                </p>
              </div>
              <SuggestedPrompts onSelect={handlePromptSelect} />
            </div>
          )}

          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <TypingIndicator label="Exploring portfolio..." />
          )}
        </div>
      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-white/5 px-4 py-4">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl items-center gap-2"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my work..."
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-indigo-500/50 focus:bg-white/[0.07]"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
