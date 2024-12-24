import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import django from "@/assets/dj.svg"
import react from "@/assets/react.svg"
import node from "@/assets/node.svg"
import web from "@/assets/web.svg"

export function OrbitalSection() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const isMobile = window.innerWidth < 768

  return (
    <section className={`relative min-h-screen bg-black overflow-hidden ${isMobile && 'mt-4' }`}>
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Orbital Animation */}
          <div className="relative aspect-square max-w-2xl mx-auto">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center z-10">
              <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-800 text-white"
                style={{
                  width: `${ring * 33}%`,
                  height: `${ring * 33}%`,
                  transform: `translate(-50%, -50%) rotate(${rotation + (ring * 30)}deg)`,
                }}
              />
            ))}

            {/* Floating Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transform -translate-y-6"
                 style={{ transform: `rotate(${-rotation}deg) translateY(-150px) rotate(${rotation}deg)` }}>
              <span className="text-white text-xl">
                <img src={django} alt="Django" className="w-8 h-8" />
              </span>
            </div>
            
            <div className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-x-6"
                 style={{ transform: `rotate(${-rotation}deg) translateX(150px) rotate(${rotation}deg)` }}>
              <span className="text-black text-2xl">
                <img src={react} alt = "React" className="w-8 h-8" />
              </span>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-6"
                 style={{ transform: `rotate(${-rotation}deg) translateY(150px) rotate(${rotation}deg)` }}>
              <span className="text-white text-xl">
                <img src={node} alt = "NodeJS" className="w-8 h-8" />
              </span>
            </div>
            
            <div className="absolute top-1/2 left-0 w-12 h-12 bg-white rounded-full flex items-center justify-center transform -translate-x-6"
                 style={{ transform: `rotate(${-rotation}deg) translateX(-150px) rotate(${rotation}deg)` }}>
              <span className="text-white font-bold">
                <img src={web} alt = "Web" className="w-8 h-8" />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`text-center lg:text-left ${isMobile && 'mt-[200px]' }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re here to guide and help you at all times
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Your success is our success. We are committed to providing you with the best possible service and support.
            </p>
            <Button 
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-md"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

