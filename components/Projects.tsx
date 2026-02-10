import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calculator, Plane, GraduationCap, Globe, Database, Gamepad2, Info, Youtube, PlayCircle, ArrowRight } from 'lucide-react';

export const projectsData = [
  {
    slug: "inventory-management-system",
    title: "StoreMate: Smart Shop Management System",
    subtitle: "Intelligent Shop Management & Inventory Solution",
    description: "A professional C# desktop application for smart inventory management. Built for modern stores with real-time tracking, SQL integration, and automated reporting.",
    image: "https://lh3.googleusercontent.com/d/1K9hq3LoXD_Mj2Jwa6qhn7kt8jb6qrb6Q",
    tags: ["C#", ".NET", "SQL Server", "Desktop App"],
    demoLink: "https://youtu.be/2CtclPaCkEo?si=1fMBKCkwIjIwWijN",
    githubLink: "https://github.com/MominurIslamRoby/StoreMate-Smart-Management-for-Modern-Stores",
    icon: <Database size={20} className="text-green-400" />,
    highlight: true,
    isVideo: true
  },
  {
    slug: "study-buddy-ai",
    title: "Study Buddy AI: Your Study Assistant",
    subtitle: "AI-Powered Academic Assistant",
    description: "Transform your lecture notes into summaries, flashcards, and quizzes. Featuring Smart Summaries, Quiz Generator, and 'Ask AI' for instant explanations of complex topics.",
    image: "https://lh3.googleusercontent.com/d/1O0kXbCWrjbGHAf--0cLSMfY3LdAt6JxV",
    tags: ["Python", "AWS AI", "Gemini API", "React"],
    demoLink: "https://study-genius-web.lovable.app",
    githubLink: "https://github.com/MominurIslamRoby/study-buddy-ai",
    icon: <GraduationCap size={20} className="text-purple-400" />
  },
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator",
    subtitle: "Precision Mathematics & Responsive Tool",
    description: "Fully functional scientific calculator with responsive design and keyboard support. Built with precise mathematical logic.",
    image: "https://lh3.googleusercontent.com/d/1fmQMptMGY7ktVaLlOs3Prny2l0ILFWux",
    tags: ["React", "Vite", "Tailwind", "GitHub Pages"],
    demoLink: "https://mominurislamroby.github.io/scientific-calculator/",
    githubLink: "https://github.com/MominurIslamRoby/scientific-calculator",
    icon: <Calculator size={20} className="text-blue-400" />
  },
  {
    slug: "modern-web-portfolio",
    title: "Modern Web Portfolio",
    subtitle: "Interactive 3D Engineering Showcase",
    description: "Interactive 3D portfolio with smooth animations and responsive UI. Showcasing modern frontend techniques.",
    image: "https://lh3.googleusercontent.com/d/1JjQcDrgMIbdMKGsyncnz4lE6vGsqLHuV",
    tags: ["React", "Vite", "Tailwind", "Three.js"],
    demoLink: "https://mominurislamroby.github.io/roby-portfolio/",
    githubLink: "https://github.com/MominurIslamRoby/roby-portfolio",
    icon: <Globe size={20} className="text-pink-400" />
  },
  {
    slug: "endless-escape",
    title: "Endless Escape",
    subtitle: "High-Performance Procedural Browser Game",
    description: "A fast-paced browser game featuring smooth motion controls and procedural obstacle generation. Focus on micro-interactions.",
    image: "https://lh3.googleusercontent.com/d/1_-dG5O828k9c3orZiwp5JnUp9Z4BBani",
    tags: ["React", "Framer Motion", "Game Design"],
    demoLink: "https://endless-escape.vercel.app",
    githubLink: "https://github.com/MominurIslamRoby/endless-escape",
    icon: <Gamepad2 size={20} className="text-orange-400" />
  },
  {
    slug: "infoverse",
    title: "Vizora",
    subtitle: "Multi-modal AI Knowledge Synthesis",
    description: "AI-driven content exploration tool utilizing the Gemini API for deep information synthesis and multi-modal interactions.",
    image: "https://lh3.googleusercontent.com/d/1Y7Y-gI5GfB-h1TniEQ24PsJIoAJcQ4hr",
    tags: ["AI Studio", "Gemini API", "Node.js"],
    demoLink: "https://vizora-ten.vercel.app/",
    githubLink: "https://github.com/MominurIslamRoby/Vizora-AI",
    icon: <Info size={20} className="text-cyan-400" />
  }
];

const Projects: React.FC = () => {
  const featuredProject = projectsData.find(p => p.highlight);
  const otherProjects = projectsData.filter(p => !p.highlight);

  return (
    <section id="projects" className="scroll-mt-32 pb-20 overflow-x-hidden">
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mt-2 font-display tracking-tight"
        >
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg px-4">
          A selection of recent projects showcasing my software engineering and AI/ML expertise.
        </p>
      </div>

      {/* Featured Project Row - Responsive Flex */}
      {featuredProject && (
        <div className="mb-12 px-2 sm:px-0">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col lg:flex-row shadow-2xl bg-gray-900/40"
          >
            <div className="relative w-full lg:w-3/5 aspect-video sm:aspect-video lg:h-auto overflow-hidden m-2 sm:m-4 rounded-2xl sm:rounded-[2rem] bg-black">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {featuredProject.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <PlayCircle className="text-white w-12 h-12 sm:w-20 sm:h-20 opacity-90" />
                </div>
              )}
            </div>
            
            <div className="lg:w-2/5 p-6 sm:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20 mb-4">
                Featured Case Study
              </span>
              <h3 className="text-2xl sm:text-4xl font-black mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-lg mb-8 leading-relaxed">
                {featuredProject.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href={featuredProject.demoLink} target="_blank" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">
                  {featuredProject.isVideo ? <Youtube size={18} /> : <ExternalLink size={16} />}
                  Live Demo
                </a>
                <Link to={`/projects/${featuredProject.slug}`} className="text-blue-400 hover:text-blue-300 font-bold text-sm flex items-center gap-2 group/link">
                  Details <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
        {otherProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass rounded-2xl sm:rounded-[2rem] overflow-hidden group border border-white/5 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full bg-gray-900/40"
          >
            <div className="relative h-48 sm:h-52 overflow-hidden m-3 rounded-xl sm:rounded-2xl bg-black">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>
            <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
              <h3 className="font-bold text-lg sm:text-xl group-hover:text-blue-400 transition-colors mb-2">{project.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex items-center gap-2">
                <a href={project.demoLink} target="_blank" className="flex-1 text-center py-2.5 bg-blue-600/10 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all">Demo</a>
                <Link to={`/projects/${project.slug}`} className="flex-1 text-center py-2.5 bg-white/5 text-gray-400 rounded-lg text-xs font-bold border border-white/10 hover:text-white transition-all">Details</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;