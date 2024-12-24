import { Twitter, Linkedin, DiscIcon as Discord } from 'lucide-react'

const sections = [
  {
    title: "Sections",
    links: ["Home", "Section One", "Section Two", "Section Tree"]
  },
  {
    title: "Sections",
    links: ["Home", "Section One", "Section Two", "Section Tree"]
  },
  {
    title: "Sections",
    links: ["Home", "Section One", "Section Two", "Section Tree"]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" className="fill-current text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">CodeNKehwa</span>
            </div>
            <p className="text-gray-400">
              An IT company to turn your ideas into digital reality. We craft innovative software solutions to empower your business in the digital age. Your idea, Our Code. Your Success, Our Pride.
            </p>
          </div>

          {/* Section Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            UI/UX Design by Inkyy.com.
            All Rights Reserved &copy; CodeNKehwa {new Date().getFullYear()}.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Discord className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

