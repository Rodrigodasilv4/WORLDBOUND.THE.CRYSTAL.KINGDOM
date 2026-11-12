import { useState } from 'react';
import { Heart, Coffee, Sparkles, Download, Copy, Check } from 'lucide-react';

const tiers = [
  {
    amount: 'R$ 1',
    icon: Coffee,
    title: 'Apoio Simbólico',
    description: 'Mostre que você curte o projeto. Cada real faz diferença!',
    accent: 'crystal',
    gradient: 'from-crystal-500/20 to-crystal-600/10',
    border: 'border-crystal-400/30 hover:border-crystal-400/60',
    glow: 'hover:shadow-glow-crystal',
  },
  {
    amount: 'R$ 5',
    icon: Heart,
    title: 'Aventureiro Apoiador',
    description: 'Ajude a manter os servidores e o desenvolvimento do jogo.',
    accent: 'gold',
    gradient: 'from-gold-500/20 to-gold-600/10',
    border: 'border-gold-400/30 hover:border-gold-400/60',
    glow: 'hover:shadow-glow-gold',
    featured: true,
  },
  {
    amount: 'R$ 10',
    icon: Sparkles,
    title: 'Lenda do Reino',
    description: 'Seja parte da história. Ajude a criar novos conteúdos e expansões.',
    accent: 'ember',
    gradient: 'from-ember-500/20 to-ember-600/10',
    border: 'border-ember-400/30 hover:border-ember-400/60',
    glow: 'hover:shadow-glow-ember',
  },
];

const accentText: Record<string, string> = {
  crystal: 'text-crystal-400',
  gold: 'text-gold-400',
  ember: 'text-ember-400',
};

export default function Support() {
  const [pixCopied, setPixCopied] = useState(false);
  const [pixCopyError, setPixCopyError] = useState(false);
  const pixKey = 'snowdry77@jim.com';

  const copyPixKey = async () => {
    setPixCopyError(false);

    try {
      await navigator.clipboard.writeText(pixKey);
      setPixCopied(true);
      window.setTimeout(() => setPixCopied(false), 2200);
    } catch {
      setPixCopyError(true);
    }
  };

  return (
    <section
      id="support"
      className="relative py-24 lg:py-32 bg-midnight-900/30"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-500/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase mb-4 block">
            Apoie o Projeto
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Apoie o</span>{' '}
            <span className="text-gradient-gold">WORLDBOUND</span>
          </h2>
          <p className="text-lg text-midnight-200 max-w-3xl mx-auto leading-relaxed">
            WORLDBOUND é gratuito e sempre será. Se você está gostando da
            aventura, considere apoiar o desenvolvimento. Cada contribuição
            ajuda a manter o jogo vivo e a criar novos conteúdos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-b ${tier.gradient} border ${tier.border} ${tier.glow} p-8 text-center transition-all duration-500 hover:scale-[1.03] ${
                tier.featured ? 'md:scale-105 md:-translate-y-2' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-midnight-950 text-xs font-bold uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div
                className={`w-16 h-16 rounded-2xl bg-midnight-900/50 flex items-center justify-center mx-auto mb-6`}
              >
                <tier.icon className={`w-8 h-8 ${accentText[tier.accent]}`} />
              </div>

              <p
                className={`font-display font-black text-4xl mb-2 ${accentText[tier.accent]}`}
              >
                {tier.amount}
              </p>

              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {tier.title}
              </h3>

              <p className="text-sm text-midnight-200 leading-relaxed mb-6">
                {tier.description}
              </p>

              <button
                className="w-full px-6 py-3 rounded-xl bg-midnight-800/60 text-white font-medium text-sm hover:bg-midnight-700/60 transition-colors flex items-center justify-center gap-2 border border-midnight-600/40"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '#support';
                  link.click();
                }}
              >
                Apoiar com {tier.amount}
                <Heart className="w-3.5 h-3.5 opacity-50" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-6 items-center rounded-2xl bg-glass-light p-6 sm:p-8 border border-gold-400/20">
          <div className="flex items-start gap-4 text-left">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-gold-500/15 flex items-center justify-center">
              <Heart className="w-5 h-5 text-gold-400 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-1">
                Quer ajudar diretamente?
              </h3>
              <p className="text-sm text-midnight-200 leading-relaxed">
                Envie qualquer valor pelo Pix e ajude a manter o WORLDBOUND vivo.
              </p>
              <p className="mt-3 text-xs text-midnight-300 uppercase tracking-wider">
                Chave Pix
              </p>
              <p className="text-base sm:text-lg font-semibold text-gold-300 break-all">
                {pixKey}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={copyPixKey}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-500 text-midnight-950 font-semibold text-sm hover:bg-gold-400 transition-colors"
          >
            {pixCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {pixCopied ? 'Chave copiada' : 'Copiar chave Pix'}
          </button>
          {pixCopyError && (
            <p className="lg:col-start-2 text-xs text-ember-300 text-center lg:text-right">
              Não foi possível copiar. Selecione a chave manualmente.
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-glass-light">
            <Heart className="w-4 h-4 text-ember-400 fill-current" />
            <span className="text-sm text-midnight-100">
              Obrigado por fazer parte da jornada!
            </span>
          </div>
        </div>

        <div id="download" className="mt-20 text-center">
          <span className="text-xs font-semibold text-crystal-400 tracking-[0.3em] uppercase mb-4 block">
            Baixar
          </span>
          <h3 className="font-display font-bold text-3xl text-white mb-4">
            Prefere jogar offline?
          </h3>
          <p className="text-midnight-200 max-w-xl mx-auto mb-8">
            Baixe o jogo completo e jogue em qualquer lugar, mesmo sem internet.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-midnight-950 font-semibold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-glow-gold hover:scale-105"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/worldbound.html';
              link.download = 'worldbound.html';
              link.click();
            }}
          >
            <Download className="w-5 h-5" />
            Baixar WORLDBOUND
          </button>
        </div>
      </div>
    </section>
  );
}
