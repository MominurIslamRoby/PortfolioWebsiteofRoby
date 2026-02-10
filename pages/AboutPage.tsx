import React from 'react';
import About from '../components/About.tsx';
import Education from '../components/Education.tsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Zap, Shield, Database } from 'lucide-react';

const AboutPage: React.FC = () => {
  const profileImageUrl = "https://lh3.googleusercontent.com/d/1b2vQfJi0pf9Xb-gbDVYZwgJc8V1NA41V";
  const { scrollY } = useScroll();
  
  // Parallax layers
  const yImage = useTransform(scrollY, [0, 800], [0, -100]);
  const yBg = useTransform(scrollY, [0, 800], [0, -40]);
  const yHUD = useTransform(scrollY, [0, 800], [0, -150]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <div className="space-y-24 md:space-y-32 pt-12 md:pt-16 relative overflow-hidden px-4">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 backdrop-blur-md rounded-full mb-8 border border-blue-500/20"
        >
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-blue-400">System Identification: Roby</span>
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black font-display tracking-tight mb-6 leading-[0.9]">
          Beyond the <span className="text-gradient">Logic</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed px-4 opacity-70">
          Architecting high-performance ecosystems where intelligent logic meets human-centric design.
        </p>
      </motion.div>

      {/* High-End Architectural Profile Hero */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative perspective-1000">
        <motion.div
          style={{ opacity: opacityFade }}
          className="relative group"
        >
          {/* Main Container - The "Shadowbox" */}
          <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-white/10 bg-gray-950/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] flex items-center justify-center p-4">
            
            {/* Layer 1: Animated Tech Grid Background */}
            {/* Merged multiple style attributes into one to fix JSX duplicate attribute error */}
            <motion.div 
              style={{ 
                y: yBg,
                backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
              className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
            />
            
            {/* Layer 2: Atmospheric Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[100px] delay-1000"></div>

            {/* Layer 3: HUD Viewfinder Brackets */}
            <div className="absolute inset-8 border-t-2 border-l-2 border-white/10 rounded-tl-3xl w-12 h-12"></div>
            <div className="absolute inset-8 border-t-2 border-r-2 border-white/10 rounded-tr-3xl w-12 h-12 ml-auto left-auto"></div>
            <div className="absolute inset-8 border-b-2 border-l-2 border-white/10 rounded-bl-3xl w-12 h-12 mt-auto top-auto"></div>
            <div className="absolute inset-8 border-b-2 border-r-2 border-white/10 rounded-br-3xl w-12 h-12 ml-auto mt-auto left-auto top-auto"></div>

            {/* Layer 4: Floating Tech Data Nodes (Parallax) */}
            <motion.div 
              style={{ y: yHUD }}
              className="absolute inset-0 z-30 pointer-events-none hidden md:block"
            >
              {/* Node 1 */}
              <div className="absolute top-1/4 left-[10%] flex items-center gap-3">
                <div className="w-10 h-px bg-blue-500/50"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-blue-400/80 tracking-widest uppercase">Neural Arch</span>
                  <span className="text-[8px] font-mono text-gray-500">v2.5_Stable</span>
                </div>
              </div>

              {/* Node 2 */}
              <div className="absolute bottom-1/3 right-[8%] flex items-center gap-3">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-black text-purple-400/80 tracking-widest uppercase">System Scalability</span>
                  <span className="text-[8px] font-mono text-gray-500">99.9% Uptime</span>
                </div>
                <div className="w-10 h-px bg-purple-500/50"></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-[15%] right-[15%] p-3 glass rounded-xl border-white/10 rotate-12 opacity-40">
                <Cpu size={16} className="text-blue-500" />
              </div>
              <div className="absolute bottom-[20%] left-[15%] p-3 glass rounded-xl border-white/10 -rotate-12 opacity-40">
                <Zap size={16} className="text-yellow-500" />
              </div>
            </motion.div>
            
            {/* Layer 5: Main Portrait Image */}
            <motion.div 
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              className="relative z-20 h-full w-full flex items-center justify-center pt-24 sm:pt-32 md:pt-40"
            >
              <img 
                src={profileImageUrl} 
                alt="Mominur Islam Roby" 
                className="h-[130%] sm:h-[150%] md:h-[160%] w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Bottom Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none z-30"></div>
            
            {/* Technical Metadata Bar */}
            <div className="absolute bottom-10 left-10 right-10 z-40 flex items-center justify-between opacity-40">
              <div className="flex items-center gap-4">
                <div className="text-[8px] md:text-[10px] font-mono tracking-widest text-white uppercase">
                  LAT: 23.8103° N / LONG: 90.4125° E
                </div>
                <div className="h-4 w-px bg-white/20"></div>
                <div className="text-[8px] md:text-[10px] font-mono tracking-widest text-white uppercase">
                  AIUB_ENGR_DEPT
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase">Status: Optimal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Content Sections */}
      <div className="relative z-10">
        <About />
      </div>
      
      <div className="py-16 md:py-24 border-t border-white/5 relative z-10">
        <Education />
      </div>
    </div>
  );
};

export default AboutPage;