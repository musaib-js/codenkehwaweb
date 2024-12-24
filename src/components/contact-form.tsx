import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import sphere from "@/assets/sphere.svg"

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Globe Illustration */}
          <div className="hidden lg:block">
            <img src={sphere} alt="Globe" className="w-full max-w-lg mx-auto" />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600"
              >
                Get in Touch
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

