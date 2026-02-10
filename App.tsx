import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BackgroundEffect from './components/BackgroundEffect.tsx';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const SkillsPage = lazy(() => import('./pages/SkillsPage.tsx'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.tsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const EducationPage = lazy(() => import('./pages/EducationPage.tsx'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage.tsx'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.tsx'));

// Component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="min-h-[70vh] w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center z-[100] bg-[#030712]">
    <div className="loading-pulse"></div>
  </div>
);

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 overflow-x-hidden w-full">
      <ScrollToTop />
      <BackgroundEffect />
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-12 py-24 md:py-32 overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;