import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (id: string) => void;
}

const NavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full text-left px-4 py-3 text-lg hover:bg-white/5 transition-colors duration-200 rounded-lg md:w-auto md:px-3 md:py-2 md:text-base"
    >
      {children}
    </button>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export default function Layout({ children, onNavigate }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleExploreClick = () => {
    const revenueEngineSection = document.getElementById('revenue-engine');
    if (revenueEngineSection) {
      revenueEngineSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white grain">
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => onNavigate('home')} className="font-mono text-xl font-bold tracking-tighter">
              FireLink
            </button>
            
            <div className="hidden md:flex md:items-center md:gap-x-8">
              <NavLink to="home" onClick={() => onNavigate('home')}>Home</NavLink>
              <NavLink to="case-studies" onClick={() => onNavigate('case-studies')}>Case Studies</NavLink>
              <NavLink to="revenue-engine" onClick={() => onNavigate('revenue-engine')}>Offers</NavLink>
              <NavLink to="about" onClick={() => onNavigate('about')}>About Us</NavLink>
              <button
                onClick={handleExploreClick}
                className="button-primary bg-opacity-90 hover:bg-opacity-80 transition-all duration-300"
              >
                <span>Explore Offers</span>
              </button>
            </div>
            
            <button
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/10 bg-black/90 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-2 px-4 py-6">
              <NavLink to="home" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}>Home</NavLink>
              <NavLink to="case-studies" onClick={() => { onNavigate('case-studies'); setIsMenuOpen(false); }}>Case Studies</NavLink>
              <NavLink to="revenue-engine" onClick={() => { onNavigate('revenue-engine'); setIsMenuOpen(false); }}>Offers</NavLink>
              <NavLink to="about" onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}>About Us</NavLink>
              <div className="pt-4">
                <button
                  onClick={handleExploreClick}
                  className="w-full button-primary bg-opacity-90 hover:bg-opacity-80 transition-all duration-300"
                >
                  <span>Explore Offers</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
      
      <main className="pt-16">{children}</main>
    </div>
  );
}