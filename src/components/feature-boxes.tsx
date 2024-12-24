import { Card } from "@/components/ui/card"
import { Box, Layers, Circle, Wand2, Monitor } from 'lucide-react'

const features = [
  {
    icon: Box,
    title: "Web Development",
    description: "We design and develop websites that are not only visually appealing, but also functional and user-friendly."
  },
  {
    icon: Layers,
    title: "App Development",
    description: "We develop mobile applications that meet the needs of your business and your customers."
  },
  {
    icon: Circle,
    gradient: true,
    title: "SEO Optimization",
    description: "We help you optimize your website to rank higher on search engines and attract more organic traffic."
  },
  {
    icon: Monitor,
    title: "Graphic Designing",
    description: "Tell your story with stunning visuals. We create logos, banners, and other graphics that represent your brand."
  },
  {
    icon: Wand2,
    title: "Whatsapp Automation",
    description: "Automate your customer service and marketing efforts on WhatsApp with our chatbot solutions."
  },
  {
    icon: Box,
    title: "UI/UX Design",
    description: "We design user interfaces that are intuitive and easy to use, ensuring a seamless user experience."
  }
]

export function FeatureBoxes() {
  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 p-8 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 ${
                feature.gradient ? 'bg-gradient-to-br from-pink-400 to-purple-500' : ''
              }`}>
                {feature.gradient ? (
                  <feature.icon className="w-8 h-8 text-white" />
                ) : (
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

