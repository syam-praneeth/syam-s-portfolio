import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, 
  FaPython, FaJava, FaDatabase, FaLinux
} from "react-icons/fa";
import { 
  SiTailwindcss, SiC, SiCplusplus, SiMongodb, SiBootstrap, SiExpress 
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "C", icon: <SiC className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Linux", icon: <FaLinux className="text-white" /> },
  { name: "DBMS", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
];

const SkillsCarousel = () => {
  return (
    <div className="w-full bg-black py-2 overflow-hidden">
      <Marquee gradient={false} speed={90} pauseOnHover>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 mx-8"
            whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
          >
            <div className="text-3xl">{skill.icon}</div>
            <span className="text-white text-md font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsCarousel;
