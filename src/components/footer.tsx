export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 md:py-16">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Heading Section */}
        <div className="col-span-1">
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Crafting Innovative 
            <br />
            Software Solutions
            <br />
            <span className="text-orange-500 font-medium">
              with &hearts; at
            </span>
            <br />
            <span className="text-orange-500 font-medium">
            <img src="/logo.svg" alt="Zapware" style={{
            width: "160px",
            height: "50px"
          }} />
            </span>
          </h2>
          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="hover:opacity-75 transition-opacity text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg mb-6">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="#services" className="bg-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-gray-400">
              Services
            </a>
            <a href="#clients" className="bg-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-gray-400">
              Clients
            </a>
            <a href="#contact" className="bg-zinc-900 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-gray-400">
              Contact Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-lg mb-6">Contact</h3>
          <div className="space-y-4">
            <p>contact@zapware.in</p>
            <p>+91 95414 83162</p>
            <p className="max-w-xs">
              Sopore, Jammu & Kashmir, India, 193201
            </p>
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="container mx-auto mb-16 text-center">
        <h1 className="text-[12vw] font-bold leading-none tracking-tighter text-center">
          {/* Zapware.in */}
          <img src="/zap.svg" alt="Zapware" className="mx-auto md:scale-[1.5] lg:scale-[2.0]" />
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024  Zapware</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors text-gray-400">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

