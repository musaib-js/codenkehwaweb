import { Button } from "@/components/ui/button"

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
                Contact Now
              </Button>
            </div>
            <div className="hidden md:block">
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-lg ml-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M200,50 C300,50 350,150 350,200 C350,250 300,350 200,350 C100,350 50,250 50,200 C50,150 100,50 200,50"
                  className="text-white/20"
                />
                <path
                  d="M200,100 C270,100 300,170 300,200 C300,230 270,300 200,300 C130,300 100,230 100,200 C100,170 130,100 200,100"
                  className="text-white/20"
                />
                <path
                  d="M200,150 C240,150 250,190 250,200 C250,210 240,250 200,250 C160,250 150,210 150,200 C150,190 160,150 200,150"
                  className="text-white/20"
                />
                <circle cx="200" cy="200" r="5" className="text-white fill-current" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

