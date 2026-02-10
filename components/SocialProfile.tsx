import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Globe } from 'lucide-react';

const SocialProfile: React.FC = () => {
  const leftSocials = [
    { icon: <Facebook size={20} className="md:w-[22px]" />, href: "https://www.facebook.com/mominur.roby.00000007" },
    { icon: <Github size={20} className="md:w-[22px]" />, href: "https://github.com/MominurIslamRoby" },
  ];

  const rightSocials = [
    { icon: <Linkedin size={20} className="md:w-[22px]" />, href: "https://www.linkedin.com/in/mominur-islam-roby" },
    { icon: <Globe size={20} className="md:w-[22px]" />, href: "https://mominurislamroby.github.io/roby-portfolio/" },
  ];

  const profileImageUrl = "https://lh3.googleusercontent.com/d/1EdftMVnCnVyXNPP6Z0ZTEoBRdjEHB_x6";

  return (
    <section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Main Pill Container - Fluid & Responsive */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-10 px-5 sm:px-10 py-6 sm:py-8 bg-white/[0.02] border border-white/5 rounded-[2rem] sm:rounded-full backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        {/* Left Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {leftSocials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 border border-white/5 rounded-xl sm:rounded-[1.25rem] text-gray-400 hover:text-blue-400 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Central Portrait */}
        <div className="relative group">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full p-0.5 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border border-white/10 relative z-10 overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-950">
              <img 
                src={profileImageUrl} 
                alt="Mominur Islam Roby" 
                className="w-full h-full object-cover object-center scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full -z-10"></div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {rightSocials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 border border-white/5 rounded-xl sm:rounded-[1.25rem] text-gray-400 hover:text-blue-400 transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-[8px] sm:text-[10px] font-mono tracking-[0.4em] uppercase text-gray-500 font-black text-center"
      >
        Connect with me
      </motion.p>
    </section>
  );
};

export default SocialProfile;