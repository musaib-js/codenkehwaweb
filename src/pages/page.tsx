import { Button } from "@/components/ui/button";
import { FeatureBoxes } from "@/components/feature-boxes";
import { OrbitalSection } from "@/components/orbital-section";
import { CompanyLogos } from "@/components/company-logos";
import { TrialCTA } from "@/components/trial-cta";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import AnimatedChat from "@/components/animated-messages";
import AnimatedGrowth from "@/components/growth-charts";
import ChatInterface from "@/components/ai-chat";
import { useEffect } from "react";
import { FaqSection } from "./faqs";
import TestimonialsSection from "@/components/testimonials";

export default function LandingPage() {
  useEffect(() => {
    const heroSection = document.querySelector(".animated-bg");
    if (heroSection) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        heroSection.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white !z-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <span className="text-xl font-bold">Zapware</span>
        </div>
        <div className="flex items-center gap-4 px-2">
          <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600">
            <a href="#contact" className="text-white hover:text-white">
              Get Started
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="animated-bg absolute inset-0 -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforming Ideas into <br />
          Digital Reality
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Welcome to <strong>Zapware</strong> — where innovation gets
          brewed, and your business gets the digital caffeine boost it needs!
          We’re not here to play it safe; we’re here to shake things up, one
          pixel, one click, and one campaign at a time. Let’s dive into what
          makes us the boldest brew in the tech world.
          {/* We craft innovative software solutions to empower your business in the
          digital age. <br></br>Your idea, Our Code. Your Success, Our Pride. */}
        </p>
        <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 px-8 py-6 text-lg">
          <a href="#contact" className="text-white hover:text-white">
            Get Started Now
          </a>
        </Button>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 pb-32 relative z-10">
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedChat />
            <AnimatedGrowth />
            <ChatInterface />
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

      <TestimonialsSection />
      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Background Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-r from-pink-500 to-purple-600 blur-3xl opacity-20 pointer-events-none" />
    </div>
  );
}
