import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Lazy-load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const CodeLabPage = lazy(() => import('./pages/CodeLabPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lazy-load heavy modals
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-3 border-[var(--coral)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-hand text-xl text-[var(--coral)]">Loading...</p>
      </div>
    </div>
  );
}

function ModalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="w-10 h-10 border-3 border-[var(--coral)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Global scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          // Trigger path draw
          entry.target.querySelectorAll('.path-draw').forEach(p => p.classList.add('in'));
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    const observeNodes = () => {
      document.querySelectorAll('.reveal, .reveal-stagger, .path-draw').forEach(el => observer.observe(el));
    };

    observeNodes();
    // Observe on route change via mutation observer instead of interval
    const mutationObserver = new MutationObserver(() => {
      observeNodes();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Background is handled by index.css body { background: var(--bg); } */}
      <div className="min-h-screen flex flex-col justify-between">
        {/* Subtle Grain Texture from the new theme */}
        <div className="grain" />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Persistent Multi-Page Navigation Header */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Multi-Page Routes Container */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <HomePage
                    onOpenResume={() => setResumeModalOpen(true)}
                    onSelectProject={(proj) => setSelectedProject(proj)}
                  />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProjectsPage
                    onSelectProject={(proj) => setSelectedProject(proj)}
                  />
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ExperiencePage
                    onOpenResume={() => setResumeModalOpen(true)}
                  />
                </Suspense>
              }
            />
            <Route
              path="/skills"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SkillsPage />
                </Suspense>
              }
            />
            <Route
              path="/codelab"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CodeLabPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage
                    onOpenResume={() => setResumeModalOpen(true)}
                  />
                </Suspense>
              }
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenResume={() => setResumeModalOpen(true)} />

        {/* Global Modals - Lazy loaded */}
        {selectedProject && (
          <Suspense fallback={<ModalLoader />}>
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Suspense>
        )}

        {resumeModalOpen && (
          <Suspense fallback={<ModalLoader />}>
            <ResumeModal onClose={() => setResumeModalOpen(false)} />
          </Suspense>
        )}

      </div>
    </Router>
  );
}