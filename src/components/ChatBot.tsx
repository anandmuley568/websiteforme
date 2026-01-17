import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your website assistant. I can help you find sections and content on this website. Ask me anything!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Website knowledge base
  const websiteKnowledge = {
    sections: [
      { name: 'Hero Section', id: 'hero', description: 'The main landing section at the top of the page' },
      { name: 'About Section', id: 'about', description: 'Information about the developer, located after the hero section' },
      { name: 'Skills Section', id: 'skills', description: 'Tech stack and technologies used, shows React, TypeScript, Node.js, Python, etc.' },
      { name: 'Projects Section', id: 'projects', description: 'Featured projects including E-Commerce Platform, AI Dashboard, and Social Media App' },
      { name: 'Contact Section', id: 'contact', description: 'Contact form and social media links' },
      { name: 'Study Section', id: 'study', description: 'Learning resources including text resources, images, videos, and practice platforms' },
    ],
    studyResources: {
      youtubeChannels: [
        { name: 'Piyush Garg', url: 'https://www.youtube.com/@PiyushGargDev', location: 'Study Section > Videos card' },
        { name: 'Hitesh Choudhary', location: 'Study Section > Videos card' },
        { name: 'Telusko', location: 'Study Section > Videos card' },
        { name: 'Selenium Express', location: 'Study Section > Videos card' },
        { name: 'Codebasics', location: 'Study Section > Videos card' },
        { name: 'Javatechie', location: 'Study Section > Videos card' },
      ],
      practicePlatforms: [
        { name: 'HackerRank', url: 'https://www.hackerrank.com/', location: 'Study Section > Practice card' },
        { name: 'HackerEarth', location: 'Study Section > Practice card' },
        { name: 'LeetCode', location: 'Study Section > Practice card' },
        { name: 'CodeChef', location: 'Study Section > Practice card' },
      ],
      textResources: [
        { name: 'w3schools', location: 'Study Section > Text card' },
        { name: 'interviewbit', location: 'Study Section > Text card' },
        { name: 'sanfoundry', location: 'Study Section > Text card' },
      ],
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Simple rule-based response (fallback if API fails)
  const getRuleBasedResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Study section queries
    if (lowerQuery.includes('study') || lowerQuery.includes('learning')) {
      return "The Study Section is located near the bottom of the page, after the Contact section. It contains learning resources organized into 4 categories: Text resources (w3schools, interviewbit, sanfoundry), Images (system design diagrams), Videos (YouTube channels like Piyush Garg, Hitesh Choudhary, etc.), and Practice platforms (HackerRank, LeetCode, CodeChef, etc.). Scroll down to find it!";
    }

    // Piyush Garg queries
    if (lowerQuery.includes('piyush') || lowerQuery.includes('garg')) {
      return "Piyush Garg's YouTube channel is located in the Study Section. To find it: 1) Scroll to the Study Section (near the bottom of the page), 2) Click on the 'Videos' card (🎥 icon), 3) You'll see Piyush Garg listed in the YouTube Channels section. The link will take you to https://www.youtube.com/@PiyushGargDev";
    }

    // HackerRank queries
    if (lowerQuery.includes('hackerrank')) {
      return "HackerRank is located in the Study Section under Practice Platforms. To find it: 1) Scroll to the Study Section (near the bottom of the page), 2) Click on the 'Practice' card (💪 icon), 3) You'll see HackerRank listed first in the Practice Platforms section. The link will take you to https://www.hackerrank.com/";
    }

    // Section location queries
    if (lowerQuery.includes('about')) {
      return "The About Section is located after the Hero section. It contains information about the developer, their experience, and statistics. You can scroll down from the top or click 'About' in the navigation menu to jump directly to it.";
    }

    if (lowerQuery.includes('skill') || lowerQuery.includes('tech stack')) {
      return "The Skills Section displays the tech stack including React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, Docker, and AWS. It's located after the About section. You can click 'Skills' in the navigation menu to jump to it.";
    }

    if (lowerQuery.includes('project')) {
      return "The Projects Section showcases featured projects including E-Commerce Platform, AI Dashboard, and Social Media App. It's located after the Skills section. You can click 'Projects' in the navigation menu to jump to it.";
    }

    if (lowerQuery.includes('contact')) {
      return "The Contact Section contains a contact form and social media links. It's located after the Projects section. You can click 'Contact' in the navigation menu to jump to it.";
    }

    // General navigation help
    if (lowerQuery.includes('where') || lowerQuery.includes('find') || lowerQuery.includes('locate')) {
      return "I can help you find content on this website! The main sections are: Hero (top), About, Skills, Projects, Contact, and Study (bottom). You can use the navigation menu at the top to jump to any section. What specifically are you looking for?";
    }

    return "I'm here to help you navigate the website! The main sections are: Hero, About, Skills, Projects, Contact, and Study. You can ask me about specific content like 'Where is Piyush Garg video?' or 'Where is HackerRank?'. What would you like to know?";
  };

  // Call Gemini API or use rule-based fallback
  const getAIResponse = async (query: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      // Use rule-based response if no API key
      return getRuleBasedResponse(query);
    }

    try {
      const systemPrompt = `You are a helpful assistant for a personal portfolio website. Help users find content and sections on the website.

Website Structure:
- Hero Section: Main landing area at the top
- About Section: Developer information and stats
- Skills Section: Tech stack (React, TypeScript, Node.js, Python, MongoDB, etc.)
- Projects Section: Featured projects (E-Commerce Platform, AI Dashboard, Social Media App)
- Contact Section: Contact form and social links
- Study Section: Learning resources with 4 categories:
  * Text: w3schools, interviewbit, sanfoundry
  * Images: System design diagrams
  * Videos: YouTube channels including Piyush Garg (@PiyushGargDev), Hitesh Choudhary, Telusko, Selenium Express, Codebasics, Javatechie
  * Practice: HackerRank, HackerEarth, LeetCode, CodeChef

Provide clear, concise directions on how to find the requested content. Be friendly and helpful.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${systemPrompt}\n\nUser question: ${query}\n\nAssistant:`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || getRuleBasedResponse(query);
      return aiResponse;
    } catch (error) {
      console.error('AI API error:', error);
      // Fallback to rule-based response
      return getRuleBasedResponse(query);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again or rephrase your question.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center glow-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-secondary/50">
              <h3 className="text-lg font-semibold text-gradient">Website Assistant</h3>
              <p className="text-sm text-muted-foreground">Ask me about any section or content!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-2xl px-4 py-2 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-secondary/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about sections or content..."
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </motion.button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Try: "Where is the study section?" or "Where is Piyush Garg video?"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
