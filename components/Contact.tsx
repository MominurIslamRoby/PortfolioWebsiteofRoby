
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Linkedin, Github, MapPin, Send, 
  Facebook, Youtube, CheckCircle2, Loader2, User, 
  Tag, MessageSquare, Copy, ExternalLink 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [sendingStep, setSendingStep] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "mominur.roby@gmail.com", href: "mailto:mominur.roby@gmail.com", color: "blue" },
    { icon: <Phone size={20} />, label: "Phone", value: "+88 01793146103", href: "tel:+8801793146103", color: "green" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "mominur-islam-roby", href: "https://www.linkedin.com/in/mominur-islam-roby", color: "sky" },
    { icon: <MapPin size={20} />, label: "Location", value: "Dhaka, Bangladesh", href: "https://google.com/maps/search/Dhaka,+Bangladesh", color: "red" },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setSendingStep(0);

    // High-fidelity submission simulation steps
    const steps = ["Validating Payload...", "Securing Connection...", "Transmitting Data..."];
    for (let i = 0; i < steps.length; i++) {
      setSendingStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      // Logic for actual integration would go here (e.g., EmailJS or Formspree)
      console.log("Transmission Successful:", formData);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  const sendingMessages = ["Validating Payload...", "Securing Connection...", "Transmitting Data..."];

  return (
    <section id="contact" className="scroll-mt-32 px-4 md:px-0">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Gateway Active</span>
        </motion.div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="text-4xl md:text-6xl font-black font-display mt-2"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm md:text-base opacity-70">
          Ready to architect the next generation of software? Drop a message or reach out through my direct channels.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        {/* Left Side: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative glass p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-0.5">{info.label}</p>
                      <p className="text-sm font-bold text-gray-200 truncate max-w-[160px] sm:max-w-full">{info.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleCopy(info.value)}
                      className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-blue-400 transition-all relative"
                      title="Copy to clipboard"
                    >
                      <AnimatePresence>
                        {copiedText === info.value ? (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded shadow-xl"
                          >
                            Copied!
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                      <Copy size={16} />
                    </button>
                    <a 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-blue-400 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Socials Grid */}
          <div className="glass p-6 rounded-3xl border border-white/5 bg-blue-500/[0.02]">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 text-center">Neural Networks</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: <Github size={20} />, href: "https://github.com/MominurIslamRoby" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/mominur.roby.00000007" },
                { icon: <Youtube size={20} />, href: "https://www.youtube.com/@Tech.WithRoby" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-6 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden min-h-[580px]"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500/20 relative z-10">
                      <CheckCircle2 size={48} className="text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4">Transmission Successful</h3>
                  <p className="text-gray-400 max-w-sm mb-10 leading-relaxed">
                    Message received, {formData.name.split(' ')[0]}. My system has logged your inquiry and I will respond shortly.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 transition-all"
                  >
                    Open New Session
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Your Identity</label>
                      <div className="relative group/input">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" />
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-700" 
                          placeholder="e.g. Mominur Islam Roby" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Contact Protocol</label>
                      <div className="relative group/input">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" />
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-700" 
                          placeholder="e.g. mominur.roby@gmail.com" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Project Classification</label>
                    <div className="relative group/input">
                      <Tag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" />
                      <input 
                        required
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:bg-white/[0.08] focus:outline-none transition-all placeholder:text-gray-700" 
                        placeholder="e.g. Software Architecture Inquiry" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Transmission Data</label>
                    <div className="relative group/input">
                      <MessageSquare size={18} className="absolute left-4 top-6 text-gray-500 group-focus-within/input:text-blue-500 transition-colors" />
                      <textarea 
                        required
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:bg-white/[0.08] focus:outline-none transition-all resize-none placeholder:text-gray-700" 
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all shadow-xl shadow-blue-600/20 group disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                  >
                    <AnimatePresence mode="wait">
                      {status === 'sending' ? (
                        <motion.div 
                          key="sending" 
                          initial={{ y: 20, opacity: 0 }} 
                          animate={{ y: 0, opacity: 1 }} 
                          exit={{ y: -20, opacity: 0 }}
                          className="flex flex-col items-center"
                        >
                          <span className="text-xs tracking-[0.2em] mb-1">{sendingMessages[sendingStep]}</span>
                          <Loader2 size={18} className="animate-spin opacity-50" />
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="idle" 
                          initial={{ y: 20, opacity: 0 }} 
                          animate={{ y: 0, opacity: 1 }} 
                          className="flex items-center gap-3 uppercase tracking-[0.3em] text-[10px]"
                        >
                          Initiate Transmission <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
