import { Play, Download, ChevronDown, Sparkles, Swords, Map } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/14332269/pexels-photo-14332269.jpeg?auto=compress&cs=tinysrgb&w=1920';
const floatingIslandImage =
  'https://images.pexels.com/photos/18069363/pexels-photo-18069363.png?auto=compress&cs=tinysrgb&w=940';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Reino de Cristal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/70 via-midnight-950/60 to-midnight-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/60 via-transparent to-midnight-950/60" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crystal-500/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass-light mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-medium text-midnight-100 tracking-wide uppercase">
            Aventura de Fantasia 3D
          </span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-in-up">
          <span className="block text-white drop-shadow-2xl">WORLDBOUND</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient-gold font-bold mt-3 tracking-[0.2em]">
            THE CRYSTAL KINGDOM
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-midnight-100 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          Sua aventura começa aqui. Explore um vasto reino de cristal, enfrente
          criaturas lendárias e descubra os segredos de uma terra esquecida pelo
          tempo.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => scrollTo('#play')}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-crystal-500 to-crystal-600 text-white font-semibold text-lg hover:from-crystal-400 hover:to-crystal-500 transition-all duration-300 shadow-glow-crystal hover:scale-105 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            Jogar Grátis
          </button>
          <button
            onClick={() => scrollTo('#download')}
            className="group px-8 py-4 rounded-xl bg-glass text-gold-200 font-semibold text-lg hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border border-gold-500/30"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Baixar Jogo
          </button>
        </div>

        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { icon: Map, label: 'Mundo Aberto', value: 'Explore' },
            { icon: Swords, label: 'Combate Épico', value: 'Lute' },
            { icon: Sparkles, label: 'Reino de Cristal', value: 'Descubra' },
            { icon: Play, label: 'Grátis no Navegador', value: 'Jogue' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-glass-light hover:border-crystal-400/40 transition-colors"
            >
              <item.icon className="w-6 h-6 text-crystal-400" />
              <span className="text-xs text-midnight-200 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-midnight-300 hover:text-gold-300 transition-colors animate-float-slow"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <img
        src={floatingIslandImage}
        alt="Ilha flutuante"
        className="absolute top-20 right-10 w-32 lg:w-48 opacity-40 animate-float-slow hidden lg:block z-5"
      />
    </section>
  );
}
