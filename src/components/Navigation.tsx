import React, { useState, useEffect } from 'react';
import { Settings, X } from 'lucide-react';

interface NavigationProps {
  statusBadge?: string;
  onOpenConfigDrawer?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  statusBadge = 'Student & Creator',
  onOpenConfigDrawer
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        { id: 'about-section', name: 'about' },
        { id: 'projects-section', name: 'work' },
        { id: 'content-section', name: 'content' },
        { id: 'journey-section', name: 'journey' },
        { id: 'contact-section', name: 'contact' },
      ];

      const scrollPosition = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about-section', id: 'about' },
    { label: 'WORK', href: '#projects-section', id: 'work' },
    { label: 'CONTENT', href: '#content-section', id: 'content' },
    { label: 'JOURNEY', href: '#journey-section', id: 'journey' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrolled
          ? 'opacity-100 translate-y-0 bg-[#080808]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.10)] py-3 shadow-2xl pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: ADITYA */}
        <a
          id="nav-brand-aditya"
          href="#hero-section"
          onClick={(e) => handleScrollTo(e, '#hero-section')}
          className="group flex items-center gap-2 font-display text-base sm:text-lg font-black tracking-widest text-[#F2F0EA] hover:text-cyan-300 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>ADITYA</span>
        </a>

        {/* Center: Navigation (ABOUT, WORK, CONTENT, JOURNEY) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative py-1 text-xs tracking-widest font-mono uppercase transition-colors ${
                  isActive
                    ? 'text-[#F2F0EA] font-bold'
                    : 'text-[#929292] hover:text-[#F2F0EA]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CONTACT + Optional Config/Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="nav-contact-link"
            href="#contact-section"
            onClick={(e) => handleScrollTo(e, '#contact-section')}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all ${
              activeSection === 'contact'
                ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_#22d3ee]'
                : 'bg-[#161616] text-[#F2F0EA] border border-[rgba(255,255,255,0.10)] hover:border-cyan-400/60'
            }`}
          >
            CONTACT
          </a>

          {onOpenConfigDrawer && (
            <button
              onClick={onOpenConfigDrawer}
              aria-label="Open portfolio settings drawer"
              className="p-2 rounded-full bg-[#161616] border border-[rgba(255,255,255,0.10)] text-[#929292] hover:text-[#F2F0EA] hover:border-cyan-400/40 transition-colors cursor-pointer hidden sm:flex"
              title="Central Configuration Settings"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#161616] border border-[rgba(255,255,255,0.10)] text-[#F2F0EA]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <span className="text-xs font-mono">MENU</span>}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101010] border-b border-[rgba(255,255,255,0.10)] px-6 py-4 space-y-3 animate-in fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="block py-2 text-xs font-mono tracking-widest text-[#929292] hover:text-[#F2F0EA]"
            >
              {item.label}
            </a>
          ))}
          {onOpenConfigDrawer && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigDrawer();
              }}
              className="w-full text-left py-2 text-xs font-mono text-cyan-400 border-t border-[rgba(255,255,255,0.10)] pt-3"
            >
              PORTFOLIO CONFIGURATION
            </button>
          )}
        </div>
      )}
    </header>
  );
};
