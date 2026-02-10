
import React from 'react';
import Hero from '../components/Hero.tsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Code, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import SocialProfile from '../components/SocialProfile.tsx';

const Home: React.FC = () => {
  const shortcuts = [
    { title: 'Who I Am', desc: 'Final year CS student at AIUB with a deep passion for architectural AI integration.', link: '/about', icon: <User className="text-blue-400" />, color: "blue" },
    { title: 'Expertise', desc: 'Specializing in high-performance React systems, .NET scalability, and AWS AI services.', link: '/skills', icon: <Code className="text-cyan-400" />, color: "cyan" },
    { title: 'Journey', desc: 'Evolving from competitive programming to business management and software creation.', link: '/experience', icon: <Briefcase className="text-purple-400" />, color: "purple" },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      
      {/* Infinite Overview Section - No Boxes */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <Sparkles size={16} className="text-blue-500/50" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase font-black">Strategic Overview</span>
            <Sparkles size={16} className="text-blue-500/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-display tracking-tight text-white text-center"
          >
            Professional <span className="text-blue-500">Milestones</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {shortcuts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Subtle Hover Glow - replaces the static box */}
              <div className="absolute -inset-8 bg-gradient-to-b from-blue-500/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              
              <div className="relative mb-8 p-5 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-base leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
              
              <Link 
                to={item.link} 
                className="inline-flex items-center gap-2 text-blue-500 text-sm font-black tracking-widest uppercase hover:gap-4 transition-all"
              >
                Learn More <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Statement Section - No Container backgrounds */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-3xl md:text-5xl font-display italic text-white/90 leading-[1.3] font-light tracking-tight">
              "Build systems like your future depends on them — <span className="text-blue-500 font-medium">because it does.</span>"
            </p>
            <div className="flex flex-col items-center">
              <div className="h-px w-20 bg-blue-500/30 mb-6"></div>
              <div className="text-blue-500 font-mono tracking-[0.5em] text-xs uppercase font-black">
                Mominur Islam Roby
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SocialProfile />
    </div>
  );
};

export default Home;
