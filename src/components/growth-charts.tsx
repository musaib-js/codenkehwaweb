import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

export default function AnimatedGrowth() {
  const [progress, setProgress] = useState(0)
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setBarHeights(prevHeights => {
        const newHeights = prevHeights.map(() => Math.floor(Math.random() * 60) + 40)
        return newHeights
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 p-6">
        <div className="w-24 h-24 mx-auto relative">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
          <div
            className="absolute inset-0 rounded-full border-4 border-t-pink-400 border-r-purple-500 transition-transform duration-1000 ease-out"
            style={{ transform: `rotate(${progress * 3.6}deg)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
            {progress}%
          </div>
        </div>
      </Card>

      {/* Growth Bar */}
      <Card className="bg-gray-800 border-gray-700 p-6">
        <div className="flex items-end justify-between h-32 gap-2">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className="w-1/5 bg-gradient-to-t from-pink-400 to-purple-500 rounded transition-all duration-1000 ease-out"
              style={{
                height: `${height}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 text-gray-400">
          Your <span className="text-pink-400 mx-1"> Growth </span>
        </div>
      </Card>
    </div>
  )
}

