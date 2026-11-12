import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Como Jogar', href: '#how-to-play' },
  { label: 'Jogar', href: '#play' },
  { label: 'Apoiar', href: '#support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-950/85 backdrop-blur-xl border-b border-midnight-700/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Gamepad2 className="w-7 h-7 text-crystal-400 group-hover:text-crystal-300 transition-colors" />
            <Sparkles className="w-3 h-3 text-gold-400 absolute -top-1 -right-1 animate-glow-pulse" />
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-gradient-crystal">
            WORLDBOUND
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-midnight-200 hover:text-gold-300 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => handleNav('#play')}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-crystal-500 to-crystal-600 text-white text-sm font-semibold hover:from-crystal-400 hover:to-crystal-500 transition-all duration-300 shadow-glow-crystal hover:scale-105"
          >
            Jogar Grátis
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-midnight-100 p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-midnight-950/95 backdrop-blur-xl border-t border-midnight-700/40 mt-3">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-midnight-200 hover:text-gold-300 transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
