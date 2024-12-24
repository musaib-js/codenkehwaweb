import { Card } from "@/components/ui/card"

const companies = [
  { name: "PILF", logo: "PILF", link: "https://pilf.in" },
  { name: "Ganjean Health", logo: "Ganjean Health", link: "https://ganjean.com"},
  { name: "Get Advice", logo: "Get Advice" },
  { name: "Disha", logo: "Disha" },
  { name: "The Asian Real Estate", logo: "The Asian Real Estate", link: "https://theasianrealestate.in" },
  { name: "Mirchal Sir's Tutorials", logo: "Mirchal Sir's Tutorials" },
]

export function CompanyLogos() {
  return (
    <section className="bg-black" id="clients">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Companies we Worked<br />With in Since 2020
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <Card key={company.name} className="bg-gray-900/50 border-gray-800 p-6 flex items-center justify-center">
              <span className="text-gray-500 font-medium text-xl" title={company.name}>
                {
                  company.link ? (
                    <a href={company.link} target="_blank" rel="noopener noreferrer" className="text-gray-400">
                      {company?.logo?.length > 10 ? company.logo.slice(0, 10) + "..." : company.logo}
                    </a>
                  ) : (
                    company?.logo?.length > 10 ? company.logo.slice(0, 10) + "..." : company.logo
                  )}
                
                
                </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

