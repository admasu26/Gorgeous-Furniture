'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Welcome to Gorgeous Furniture Ethiopia!\n\nHow can I help you today? Select a quick topic below or type your message:',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    // Also trigger Tawk.to live chat widget if loaded
    if (typeof window !== 'undefined' && window.Tawk_API) {
      try {
        if (typeof window.Tawk_API.maximize === 'function' && nextState) {
          window.Tawk_API.maximize();
        } else if (typeof window.Tawk_API.toggle === 'function') {
          window.Tawk_API.toggle();
        }
      } catch (err) {
        console.error('Tawk_API error:', err);
      }
    }
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Generate automated response
    setTimeout(() => {
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('location') || lower.includes('showroom') || lower.includes('where') || lower.includes('addis')) {
        botReply = '📍 Our 4 Addis Ababa Showrooms:\n1. CMC Flagship Showroom\n2. Semit 72 Hub\n3. Gerji Studio\n4. Betel Hub\n\nCall 0940510000 / 0940520000 for directions or a private walkthrough!';
      } else if (lower.includes('recliner') || lower.includes('sofa') || lower.includes('couch') || lower.includes('massage')) {
        botReply = '🛋️ Our Smart Lounge Suites feature built-in bar fridges, electronic push-button recline, USB charging, and zero-gravity massage positioning with 50+ fabric/leather colors!';
      } else if (lower.includes('delivery') || lower.includes('shipping') || lower.includes('transport')) {
        botReply = '🚚 Free Delivery across Addis Ababa for orders above ETB 50,000! We also arrange safe transport to provincial cities across Ethiopia.';
      } else if (lower.includes('warranty') || lower.includes('guarantee')) {
        botReply = '🛡️ All electronic recliners, massage chairs, and sofa frames come with a 2-Year Quality Warranty covering motors and frame structure.';
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('number') || lower.includes('call')) {
        botReply = '📞 Reach our furniture specialists directly at +251 940 510000 or +251 940 520000, or tap the WhatsApp button on your screen!';
      } else {
        botReply = `Thank you for asking about "${query}"! Gorgeous Furniture offers luxury smart recliners, king bedroom suites, marble dining tables, and custom lounge furniture in Addis Ababa. Would you like to view our showroom locations or contact us on WhatsApp?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] h-[500px] max-h-[80vh] bg-[#0B0F17] text-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#D4AF37]/50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-slate-900 border-b border-[#D4AF37]/30 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#D4AF37]/20 p-2 rounded-full border border-[#D4AF37]/60">
                <Bot className="w-5 h-5 text-[#D4AF37]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-serif">
                  Gorgeous AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h3>
                <p className="text-[10px] text-amber-200/80 font-medium">Addis Ababa • Online 24/7</p>
              </div>
            </div>

            <button
              onClick={toggleChat}
              className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B0F17]/90 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-[#D4AF37] text-slate-950 font-semibold rounded-br-none'
                      : 'bg-slate-900/90 text-amber-50 border border-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Quick Topics */}
            <div className="pt-2 flex flex-col gap-2">
              <p className="text-[10px] uppercase font-bold text-amber-200/60 tracking-wider">Quick Topics:</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: '📍 Showroom Locations', query: 'Showroom Locations' },
                  { label: '🛋️ Smart Recliners', query: 'Smart Recliners' },
                  { label: '🚚 Delivery & Warranty', query: 'Delivery & Warranty' },
                  { label: '📞 Phone Numbers', query: 'Phone Numbers' },
                ].map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-[11px] bg-slate-900 hover:bg-[#D4AF37] text-amber-100 hover:text-slate-950 border border-[#D4AF37]/30 hover:border-[#D4AF37] px-3 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>{chip.label}</span>
                    <ChevronRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-[#D4AF37]/20 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about couches, showrooms, prices..."
              className="flex-1 bg-slate-950 text-white placeholder-slate-400 text-xs px-4 py-2.5 rounded-full border border-slate-800 focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 p-2.5 rounded-full transition-all font-bold flex items-center justify-center cursor-pointer shadow-lg"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-36 sm:bottom-24 right-4 sm:right-6 z-50 group flex items-center gap-3 transition-all duration-300">
        {/* Tooltip Badge */}
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-950 text-[#E8D5A3] text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span>Live Furniture Chatbot</span>
          </div>
        )}

        <button
          onClick={toggleChat}
          type="button"
          className={`relative p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer ${
            isOpen
              ? 'bg-[#D4AF37] text-slate-950 border-2 border-[#0B0F17]'
              : 'bg-[#0B0F17] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0F17] border-2 border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]'
          }`}
          aria-label="Toggle Live Chatbot"
          title="Toggle Live Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <MessageSquareText className="w-6 h-6 sm:w-7 sm:h-7" />
          )}

          {/* Active Online Pulse Indicator */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D4AF37] border-2 border-[#0B0F17] rounded-full animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
}
