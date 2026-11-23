import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);
  const lastScrollYRef = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const shouldScrolled = scrollY > 30;
        if (shouldScrolled !== scrolled) {
          setScrolled(shouldScrolled);
        }
        tickingRef.current = false;
      });
    }
    lastScrollYRef.current = scrollY;
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, [handleScroll]);

  return (
    <nav className={`main-nav fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group magnetic" data-cursor="hover">
          <div className="relative w-11 h-11 shrink-0">
            <div className="absolute inset-0 bg-[var(--coral)] rounded-full border-2.5 border-[var(--ink)] transition-transform duration-500 group-hover:rotate-180"></div>
            <div className="absolute inset-[8px] bg-[var(--paper)] rounded-full border-2 border-[var(--ink)]"></div>
            <div className="absolute inset-[14px] bg-[var(--ink)] rounded-full"></div>
          </div>
          <div>
            <div className="font-display text-lg leading-none">SK Sahil Ali</div>
            <div className="font-hand text-base text-[var(--coral)] leading-none mt-0.5">software developer</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold font-sans tracking-wide">
          <NavLink to="/" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">Overview</NavLink>
          <NavLink to="/projects" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">Projects</NavLink>
          <NavLink to="/experience" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">Experience</NavLink>
          <NavLink to="/skills" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">Skills</NavLink>
          <NavLink to="/codelab" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">CodeLab</NavLink>
          <NavLink to="/contact" className={({isActive}) => `link-anim magnetic ${isActive ? 'text-[var(--coral)]' : ''}`} data-cursor="hover">Contact</NavLink>
        </div>

        <button onClick={onOpenResume} className="btn-primary text-sm magnetic hidden sm:inline-flex" data-cursor="hover">
          <span>CV / Resume</span>
          <FileText className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>
    </nav>
  );
}