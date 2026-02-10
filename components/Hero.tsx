import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ChevronRight, Download, Sparkles, Terminal, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);

  const roles = [
    "Software Architect",
    "Frontend Developer",
    "AI & Machine Learning Enthusiast",
    "Competitive Programmer"
  ];

  const cvRoleOptions = [
    { 
      label: 'Software Engineer', 
      url: 'https://drive.google.com/file/d/124VgKFf-iMfM8V4WIvBal2n5-JPsx60n/view?usp=drive_link', 
      description: 'Systems & Core Dev focus' 
    },
    { 
      label: 'Frontend Developer', 
      url: 'https://drive.google.com/file/d/1teXNFdvgo4hvtIg35vJcM9yVPDH9sMZ6/view?usp=drive_link', 
      description: 'UI/UX & Web Optimization' 
    },
    { 
      label: 'AI/ML Specialist', 
      url: 'https://drive.google.com/file/d/1HW9VXKPo0HP-ATZ2WfeqIdeoOTeo-AFO/view?usp=drive_link', 
      description: 'Data Science & AWS AI focus' 
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setIsCVMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  
  const moveX = useTransform(springX, [-500, 500], [-10, 10]);
  const moveY = useTransform(springY, [-500, 500], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center bg-transparent pt-12 pb-24 md:pt-20 md:pb-32 px-4"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full relative z-10 flex flex-col items-center text-center">
        <div className="max-w-7xl w-full px-2 sm:px-6">
          
          {/* Minimal Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 sm:gap-6 mb-8"
          >
            <div className="h-[1px] w-6 sm:w-10 bg-blue-500/20" />
            <Sparkles size={12} className="text-blue-500/50" />
            <span className="text-blue-400/80 font-mono text-[8px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-bold">
              Engineering Excellence
            </span>
            <Sparkles size={12} className="text-blue-500/50" />
            <div className="h-[1px] w-6 sm:w-10 bg-blue-500/20" />
          </motion.div>

          {/* Optimized Typography */}
          <motion.h1 
            style={{ x: moveX, y: moveY }}
            className="text-[2.5rem] xs:text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display mb-8 tracking-tighter leading-[1] text-white select-none drop-shadow-sm break-words px-2"
          >
            MOMINUR ISLAM <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">ROBY</span>
          </motion.h1>

          {/* Role Switcher */}
          <div className="h-12 sm:h-16 relative mb-8 sm:mb-12 flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-2xl md:text-4xl text-gray-400 font-light tracking-tight w-full absolute flex items-center justify-center gap-2 sm:gap-3"
              >
                <Terminal size={18} className="text-blue-500/50 hidden xs:block" />
                <span className="truncate px-2">{roles[currentRoleIdx]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Descriptive Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-xl md:text-2xl mb-12 sm:mb-16 leading-relaxed opacity-70 px-4 font-light"
          >
            Architecting performance-first software ecosystems where 
            <span className="text-blue-400/60 font-medium"> intelligent logic</span> meets <span className="text-purple-400/60 font-medium">human-centric</span> design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-40 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden px-8 md:px-12 py-4 md:py-5 bg-blue-600 text-white rounded-xl sm:rounded-full font-bold text-sm sm:text-lg transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] group cursor-pointer"
              >
                Explore projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
            
            <div className="relative w-full sm:w-auto" ref={cvMenuRef}>
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCVMenuOpen(!isCVMenuOpen)}
                className={`w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white/5 backdrop-blur-xl hover:bg-white/10 rounded-xl sm:rounded-full font-bold text-sm sm:text-lg transition-all flex items-center justify-center gap-3 border border-white/10 group ${isCVMenuOpen ? 'border-blue-500/40 bg-white/10' : ''}`}
              >
                <Download size={20} className="text-blue-500" /> 
                Get Resume 
                <ChevronDown size={20} className={`text-blue-500/40 transition-transform duration-300 ${isCVMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isCVMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 12, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 bg-gray-950/95 backdrop-blur-3xl rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-[100] p-2 min-w-full sm:min-w-[340px]"
                  >
                    <div className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-black mb-2 px-4 pt-3 pb-3 opacity-70">
                      ATS-OPTIMIZED
                    </div>
                    <div className="space-y-1">
                      {cvRoleOptions.map((opt) => (
                        <a
                          key={opt.label}
                          href={opt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsCVMenuOpen(false)}
                          className="flex items-center justify-between w-full px-4 py-3 hover:bg-blue-500/10 rounded-xl transition-all group/item"
                        >
                          <div className="flex flex-col text-left">
                            <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover/item:text-white">
                              {opt.label}
                            </span>
                          </div>
                          <ExternalLink size={14} className="text-gray-500 group-hover/item:text-blue-400" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;