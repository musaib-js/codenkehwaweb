import { motion } from 'framer-motion';
import django from "../assets/dj.svg";
import node from "../assets/node.svg";
import react from "../assets/react.svg";
import web from "../assets/web.svg";
import chatgpt from "../assets/chatgpt.svg";
const TechOrbit = () => {
  const orbitDuration = 20;
  
  const techStack = [
    {
      name: "React",
      color: "#61DAFB",
      orbit: 0,
      icon: react
    },
    {
      name: "Node.js",
      color: "#68A063",
      orbit: 72,
      icon: node
    },
    {
      name: "Django",
      color: "#092E20",
      orbit: 144,
      icon: django
    },
    {
      name: "SQL",
      color: "#336791",
      orbit: 216,
      icon: web
    },
    {
        name: "ChatGPT",
        color: "#6F86D6",
        orbit: 288,
        icon: chatgpt
    }
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center  rounded-lg">
      <motion.div 
        className="absolute w-24 h-24 flex items-center justify-center rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 40px rgba(147, 51, 234, 0.5)",
            "0 0 20px rgba(59, 130, 246, 0.5)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </motion.div>

      {/* Orbit Paths */}
      {techStack.map((_, index) => (
        <motion.div
          key={`orbit-${index}`}
          className="absolute rounded-full border border-gray-700/30"
          style={{
            width: `${300 + index * 40}px`,
            height: `${300 + index * 40}px`,
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: orbitDuration + index * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Tech Logos */}
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: orbitDuration + index * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${300 + index * 40}px`,
            height: `${300 + index * 40}px`,
          }}
        >
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "100%",
              top: "50%"
            }}
            whileHover={{ 
              scale: 1.3,
              boxShadow: `0 0 20px ${tech.color}`
            }}
          >
            <div 
              className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center"
              style={{
                boxShadow: `0 0 10px ${tech.color}40`
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8"
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechOrbit;