import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to balance visual weight of different symbols
  const getSymbolClass = (symbol: string) => {
    switch (symbol) {
      case '×': return 'text-3xl pb-1';
      case '+': return 'text-4xl pb-1';
      case '-': return 'text-4xl pb-2'; // Lift minus slightly
      case '%': return 'text-2xl mt-1'; // Reduce percent size
      default: return 'text-3xl';
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Sticky Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-sm ${
          scrolled ? 'bg-bg/90 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-accent transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ud.crew
          </div>

          {/* Symbol Nav */}
          <div className="flex space-x-8 md:space-x-12">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative flex flex-col items-center justify-center w-8 h-8"
                aria-label={item.label}
              >
                <span className={`font-light text-white group-hover:text-accent transition-colors duration-300 ${getSymbolClass(item.symbol)}`}>
                  {item.symbol}
                </span>
                
                {/* Tooltip / Label */}
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-[10px] text-accent tracking-widest uppercase transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>

                {/* Neon Glow effect on hover */}
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Language Toggle (Mock) */}
          <div className="hidden md:flex text-xs font-medium tracking-widest text-sub">
            <span className="text-white cursor-pointer">KR</span>
            <span className="mx-2 text-white/20">|</span>
            <span className="cursor-pointer hover:text-white transition-colors">EN</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold mb-2">ud.crew</h2>
              <p className="text-sm text-sub max-w-md leading-relaxed">
                A private lounge for those who keep playing.<br/>
                We connect, recover, and grow together.
              </p>
            </div>
            <div className="mt-8 md:mt-0 text-xs text-white/30">
              &copy; 2024 Underdogs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;