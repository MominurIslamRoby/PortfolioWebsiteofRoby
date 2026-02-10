import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#02040a]">
      {/* Expansive Atmospheric Nebula Layers - Optimized for Mobile Performance */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[150px] sm:blur-[200px] opacity-60 mix-blend-screen animate-pulse-slow"
        style={{ willChange: 'transform, opacity' }}
      ></div>
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[110%] h-[110%] bg-purple-600/5 rounded-full blur-[150px] sm:blur-[220px] opacity-50 mix-blend-screen animate-pulse-slow" 
        style={{ animationDelay: '3s', willChange: 'transform, opacity' }}
      ></div>
      
      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#02040a_100%)] opacity-40"></div>
    </div>
  );
};

export default BackgroundEffect;