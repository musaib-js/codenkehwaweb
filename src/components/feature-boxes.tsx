import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Box, Wand2, Globe, SearchCheck, GitGraph, TabletSmartphone } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We design and develop websites that are not only visually appealing, but also functional and user-friendly."
  },
  {
    icon: TabletSmartphone,
    title: "App Development",
    description: "We develop engaging mobile applications that meet the needs of your business and your customers."
  },
  {
    icon: SearchCheck,
    title: "SEO Optimization",
    description: "We help you optimize your website to rank higher on search engines and attract more organic traffic."
  },
  {
    icon: GitGraph,
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child animation
      delayChildren: 0.2,  // Delay before starting children animations
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50, // Start slightly below the view
    scale: 0.9,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    }
  }
};

export function FeatureBoxes() {
  return (
    <section className="py-20 bg-black overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Trigger animation near viewport
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <Card className="bg-gray-900/50 border-gray-800 p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6">
                  <feature.icon 
                    className="w-8 h-8 text-white" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureBoxes;
