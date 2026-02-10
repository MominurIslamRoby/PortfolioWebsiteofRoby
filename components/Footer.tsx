import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
              <Terminal size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight uppercase text-white">
              ROBY
            </span>
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-12 leading-relaxed opacity-80 font-light">
          Engineering high-performance software with <span className="text-blue-500/80">architectural precision</span> and intelligent logic.
        </p>

        {/* Structured Link Grid for Mobile/Desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-y-6 sm:gap-x-12 mb-12 text-gray-400 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/skills" className="hover:text-blue-400 transition-colors">Skills</Link>
          <Link to="/experience" className="hover:text-blue-400 transition-colors">Experience</Link>
          <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col items-center gap-3 pt-8 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-mono tracking-widest uppercase font-bold">
            Designed & Built with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
          </div>
          <div className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em]">
            Mominur Islam Roby © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;