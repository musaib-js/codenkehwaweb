import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeatureBoxes } from "@/components/feature-boxes";
import { OrbitalSection } from "@/components/orbital-section";
import { CompanyLogos } from "@/components/company-logos";
import { TrialCTA } from "@/components/trial-cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <span className="text-xl font-bold">CodeNKehwa</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Home</Button>
          <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600">
          <a  href="#contact"  className="text-white hover:text-white">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforming Ideas into <br />
          Digital Reality
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          We craft innovative software solutions to empower your business in the
          digital age. <br></br>Your idea, Our Code. Your Success, Our Pride.
        </p>
        <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 px-8 py-6 text-lg">
          <a  href="#contact"  className="text-white hover:text-white">Get Started Now</a>
        </Button>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 pb-32 relative z-10">
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Left Reviews */}
            <Card className="bg-gray-800 border-gray-700">
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700" />
                    <div className="h-4 bg-gray-700 rounded w-3/4" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Center Preview */}
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 p-6">
                <div className="w-24 h-24 mx-auto relative">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
                  <div
                    className="absolute inset-0 rounded-full border-4 border-t-pink-400 border-r-purple-500"
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>
              </Card>

              {/* Growth Bar */}
              <Card className="bg-gray-800 border-gray-700 p-6">
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 60, 75, 85, 95].map((height, i) => (
                    <div
                      key={i}
                      className={`w-1/5 bg-gradient-to-t from-pink-400 to-purple-500 rounded opacity-0 animate-bar`}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.3}s`, 
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-4 text-gray-400">
                  Your <span className="text-pink-400 mx-1"> Growth </span>
                </div>
              </Card>
            </div>

            {/* Right Reviews */}

            <Card className="bg-gray-800 border-gray-700">
              <div className="p-4 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4" />
                      <div className="h-3 bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <FeatureBoxes />

      {/* Orbital Section */}
      <OrbitalSection />

      {/* Company Logos */}
      <CompanyLogos />

      {/* Trial CTA */}
      <TrialCTA />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Background Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-r from-pink-500 to-purple-600 blur-3xl opacity-20" />

    </div>
  );
}
