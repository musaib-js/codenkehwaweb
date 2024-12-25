import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

const messages = [
  { id: 1, text: "Hi! Help me with my website", isUser: true },
  { id: 2, text: "We're here for you!", isUser: false },
  { id: 3, text: "Can you help with a campaign", isUser: true },
  { id: 4, text: "Let us do some magic!", isUser: false },
  { id: 5, text: "Can you build my app", isUser: true },
  { id: 6, text: "We're already on it!", isUser: false },
]

export default function AnimatedChat() {
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
        {visibleMessages.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center gap-3 opacity-0 transition-opacity duration-500 ease-in ${
              visibleMessages.includes(item) ? 'opacity-100' : ''
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              {item.isUser ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-gray-400">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-pink-400">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              )}
            </div>
            <div className={`h-6 bg-gray-700 rounded w-3/4 px-2 flex items-center ${item.isUser?'text-gray-400':'text-pink-400'}`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

