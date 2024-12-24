import { Button } from "@/components/ui/button"
import Worldmap from "@/assets/world.svg"

export function TrialCTA() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-400 to-purple-600">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div>
              <p className="text-white/90 text-lg mb-4">Want a quote?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Feel Free to Contact Us and Get a Free Quote
              </h2>
              <Button variant="secondary" className="bg-black text-white hover:bg-gray-900">
                <a href="#contact" className="text-white hover:text-white">Contact Now</a>
              </Button>
            </div>
            <div className="hidden md:block">
              <img src={Worldmap} alt="World Map" className="w-full max-w-lg ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

