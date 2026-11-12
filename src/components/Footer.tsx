import { Gamepad2, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-midnight-700/40 py-12 bg-midnight-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Gamepad2 className="w-6 h-6 text-crystal-400" />
              <Sparkles className="w-3 h-3 text-gold-400 absolute -top-1 -right-1" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-gradient-crystal">
              WORLDBOUND
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Início', href: '#hero' },
              { label: 'Sobre', href: '#about' },
              { label: 'Como Jogar', href: '#how-to-play' },
              { label: 'Jogar', href: '#play' },
              { label: 'Apoiar', href: '#support' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-midnight-200 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-midnight-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-midnight-400">
            © 2026 WORLDBOUND - The Crystal Kingdom. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-midnight-400 flex items-center gap-1.5">
            Feito com
            <Heart className="w-3 h-3 text-ember-400 fill-current" />
            para aventureiros
          </p>
        </div>
      </div>
    </footer>
  );
}
