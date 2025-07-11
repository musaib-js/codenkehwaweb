import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const companies = [
  {name: "Revonex", logo: "Revonex", link: "https://revonex.in"},
  { name: "The Asian Real Estate", logo: "The Asian Real Estate", link: "https://www.theasianrealestate.com" },
  { name: "Growth Gear Innovations", logo: "Growth Gear Innovations", link: "https://growthgearinnovations.in" },
  { name: "FirstTech Media", logo: "FirstTech Media", link: "https://firsttechmedia.com" },
  { name: "Ganjean Health", logo: "Ganjean Health", link: "https://ganjean.com" },
  { name: "Disha", logo: "Disha" },
  { name: "Mirchal Sir's Tutorials", logo: "Mirchal Sir's Tutorials" },
];

export function CompanyLogos() {
  const scrollingLogos = [...companies, ...companies]; // Duplicate the array for seamless scrolling

  return (
    <section className="bg-black mt-4 overflow-hidden" id="clients">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Companies we've Worked
          <br />
          With
        </h2>
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "200%" }} // Double the width for seamless scrolling
        >
          {scrollingLogos.map((company, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 p-6 flex items-center justify-center w-1/6 min-w-max mx-2"
            >
              <span
                className="text-gray-500 font-medium text-sm text-center"
                title={company.name}
              >
                {company.link ? (
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400"
                  >
                    {company.logo}
                  </a>
                ) : (
                  company.logo
                )}
              </span>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
