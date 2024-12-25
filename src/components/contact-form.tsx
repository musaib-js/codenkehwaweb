import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import sphere from "@/assets/sphere.svg"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import TechOrbit from "./tech-orbit"

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("coming here")
    toast({
      title: "Wohoo! 🎉",
      description: "Our team will get back to you soon.",
    })
  }

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            {/* <img src={sphere} alt="Globe" className="w-full max-w-lg mx-auto" /> */}
            <TechOrbit />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
            <div className="relative space-y-6 z-50">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 border-gray-700 text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Input
                type="text"
                placeholder="Name"
                className="bg-gray-800 border-gray-700 text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Textarea
                placeholder="Message"
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 cursor-pointer"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

