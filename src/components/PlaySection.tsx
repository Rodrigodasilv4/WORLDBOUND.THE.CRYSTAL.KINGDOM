import { useState } from 'react';
import { Play, Maximize2, Loader2, X, Gamepad2, Download } from 'lucide-react';

export default function PlaySection() {
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startGame = () => {
    setLoading(true);
    setGameStarted(true);
  };

  const closeGame = () => {
    setGameStarted(false);
    setLoading(false);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const goFullscreen = () => {
    const container = document.getElementById('game-container');
    if (container) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen().catch(() => {});
      }
    }
  };

  const downloadGame = () => {
    const link = document.createElement('a');
    link.href = '/worldbound.html';
    link.download = 'worldbound.html';
    link.click();
  };

  return (
    <section
      id="play"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-crystal-500/12 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-crystal-400 tracking-[0.3em] uppercase mb-4 block">
            Jogue Agora
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-gradient-crystal">PLAY</span>{' '}
            <span className="text-white">WORLDBOUND</span>
          </h2>
          <p className="text-lg text-midnight-200 max-w-2xl mx-auto leading-relaxed">
            Inicie sua aventura diretamente no navegador. Sem instalação, sem
            cadastro. Seu progresso é salvo automaticamente.
          </p>
        </div>

        {!gameStarted ? (
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer" onClick={startGame}>
            <img
              src="/assets/images/IMG_6101.jpeg"
              alt="Tela inicial de WORLDBOUND"
              className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-400/90 backdrop-blur-md border-2 border-gold-100/80 flex items-center justify-center group-hover:bg-gold-300 group-hover:scale-110 transition-all duration-300 shadow-glow-gold">
                <Play className="w-10 h-10 sm:w-12 sm:h-12 text-midnight-950 fill-current ml-1" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  Iniciar Aventura
                </h3>
                <p className="text-sm sm:text-base text-midnight-100">
                  Clique para começar a jogar WORLDBOUND
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="game-container"
            className="relative rounded-2xl overflow-hidden bg-midnight-950 border border-crystal-400/30 shadow-glow-crystal"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-midnight-900/80 border-b border-midnight-700/40">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-crystal-400" />
                <span className="font-display font-semibold text-white text-sm">
                  WORLDBOUND - The Crystal Kingdom
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={downloadGame}
                  className="p-2 rounded-lg bg-midnight-800/50 hover:bg-gold-500/20 text-midnight-200 hover:text-gold-300 transition-colors"
                  title="Baixar jogo"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={goFullscreen}
                  className="p-2 rounded-lg bg-midnight-800/50 hover:bg-crystal-500/20 text-midnight-200 hover:text-crystal-300 transition-colors"
                  title="Tela cheia"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={closeGame}
                  className="p-2 rounded-lg bg-midnight-800/50 hover:bg-ember-500/20 text-midnight-200 hover:text-ember-400 transition-colors"
                  title="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative w-full bg-midnight-950">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 aspect-video">
                  <Loader2 className="w-12 h-12 text-crystal-400 animate-spin" />
                  <p className="text-midnight-200 text-sm">
                    Carregando o Reino de Cristal...
                  </p>
                </div>
              )}
              <iframe
                src="/worldbound.html"
                title="WORLDBOUND - The Crystal Kingdom"
                onLoad={handleIframeLoad}
                className="w-full h-[70vh] min-h-[500px] border-0 block"
                allow="fullscreen; autoplay; gamepad; accelerometer; gyroscope"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Grátis', value: 'Sem custo', sub: 'Jogue sem pagar nada' },
            { label: 'No Navegador', value: 'Sem download', sub: 'Funciona direto no browser' },
            { label: 'Salva Auto.', value: 'Continue depois', sub: 'Seu progresso fica salvo' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-glass-light text-center hover:border-crystal-400/30 transition-colors"
            >
              <p className="text-xs text-midnight-300 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-lg font-display font-semibold text-crystal-300">
                {item.value}
              </p>
              <p className="text-xs text-midnight-200 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
