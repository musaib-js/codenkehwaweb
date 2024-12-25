import { Card } from '@/components/ui/card';
import { User, Bot } from 'lucide-react';
import { useEffect, useState } from 'react';


const ChatInterface = () => {
  const messages = [
    {
      type: 'user',
      content: 'Hey, can you help me with an AI project?',
      timestamp: '2:30 PM'
    },
    {
      type: 'ai',
      content: 'Of course! What do you need help with?',
      timestamp: '2:30 PM'
    },
    {
      type: 'user',
      content: 'I need a bot for my business?',
      timestamp: '2:30 PM'
    },
    {
      type: 'ai',
      content: 'Hold my Kehwa, I got this!',
      timestamp: '2:30 PM'
    }
  ];

  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([])
  
    useEffect(() => {
      const timer = setInterval(() => {
        setVisibleMessages(prev => {
          if (prev.length < messages.length) {
            return [...prev, messages[prev.length]]
          }
          clearInterval(timer)
          return prev
        })
      }, 1000) 
  
      return () => clearInterval(timer)
    }, [])

  return (
    <Card className="bg-gray-800 border-gray-700">
      <div className="p-4 space-y-4">
        {visibleMessages.map((message, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'user' ? 'bg-gray-400' : 'bg-pink-500'
            }`}>
              {message.type === 'user' ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-white " />
              )}
            </div>
            <div className="space-y-1 flex-1">
              <div className={`p-3 rounded-lg ${
                message.type === 'user' ? 'bg-blue-500/10 text-blue-200' : 'bg-purple-500/10 text-purple-200'
              }`}>
                {message.content}
              </div>
              <div className="text-xs text-gray-400">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChatInterface;