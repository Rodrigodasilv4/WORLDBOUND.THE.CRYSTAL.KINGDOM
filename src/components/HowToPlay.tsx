import {
  Gamepad2,
  MousePointer2,
  Keyboard,
  Smartphone,
  Footprints,
  Camera,
  Sword,
  Shield,
  Hand,
  Zap,
  User,
  Package,
  Pause,
} from 'lucide-react';

const pcControls = [
  {
    keys: 'W A S D',
    icon: Footprints,
    action: 'Movimentação',
    description: 'Andar em todas as direções pelo mundo',
  },
  {
    keys: 'Mouse',
    icon: Camera,
    action: 'Câmera',
    description: 'Girar a câmera e olhar ao redor',
  },
  {
    keys: 'Clique Esq.',
    icon: Sword,
    action: 'Atacar',
    description: 'Realizar ataques físicos',
  },
  {
    keys: 'Clique Dir.',
    icon: Shield,
    action: 'Esquiva',
    description: 'Esquivar e bloquear ataques inimigos',
  },
  {
    keys: 'E',
    icon: Hand,
    action: 'Interagir',
    description: 'Conversar, pegar itens e ativar objetos',
  },
  {
    keys: 'Q / R / F',
    icon: Zap,
    action: 'Habilidades',
    description: 'Usar habilidades especiais desbloqueadas',
  },
  {
    keys: 'T',
    icon: User,
    action: 'Montaria',
    description: 'Chamar ou montar Drako',
  },
  {
    keys: 'I',
    icon: Package,
    action: 'Inventário',
    description: 'Abrir inventário e equipamentos',
  },
  {
    keys: 'ESC',
    icon: Pause,
    action: 'Pausa',
    description: 'Pausar o jogo e acessar o menu',
  },
];

export default function HowToPlay() {
  return (
    <section
      id="how-to-play"
      className="relative py-24 lg:py-32 bg-midnight-900/30"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase mb-4 block">
            Controles
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Como</span>{' '}
            <span className="text-gradient-gold">Jogar</span>
          </h2>
          <p className="text-lg text-midnight-200 max-w-3xl mx-auto leading-relaxed">
            WORLDBOUND pode ser jogado no computador com teclado e mouse, ou no
            celular com controles de toque. Veja abaixo os comandos para cada
            plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl bg-glass p-8 border border-midnight-700/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-crystal-500/15 flex items-center justify-center">
                <Keyboard className="w-6 h-6 text-crystal-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-white">
                  Computador
                </h3>
                <p className="text-sm text-midnight-300">Teclado e Mouse</p>
              </div>
            </div>

            <div className="space-y-3">
              {pcControls.map((ctrl, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg bg-midnight-800/30 hover:bg-midnight-800/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-midnight-700/50 flex items-center justify-center group-hover:bg-crystal-500/20 transition-colors flex-shrink-0">
                    <ctrl.icon className="w-5 h-5 text-crystal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-white block">
                      {ctrl.action}
                    </span>
                    <span className="text-xs text-midnight-300">
                      {ctrl.description}
                    </span>
                  </div>
                  <kbd className="px-3 py-1.5 rounded-md bg-midnight-700/60 border border-midnight-600/50 text-xs font-mono text-gold-200 whitespace-nowrap flex-shrink-0">
                    {ctrl.keys}
                  </kbd>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-glass p-8 border border-midnight-700/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-ember-500/15 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-ember-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    Celular
                  </h3>
                  <p className="text-sm text-midnight-300">Controles de Toque</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-midnight-800/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Gamepad2 className="w-5 h-5 text-ember-400" />
                    <h4 className="font-medium text-white">Joystick Virtual</h4>
                  </div>
                  <p className="text-sm text-midnight-200">
                    Um joystick aparece no canto da tela para movimentar seu
                    personagem em qualquer direção, de forma suave e intuitiva.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-midnight-800/30">
                  <div className="flex items-center gap-3 mb-2">
                    <MousePointer2 className="w-5 h-5 text-ember-400" />
                    <h4 className="font-medium text-white">Botões de Toque</h4>
                  </div>
                  <p className="text-sm text-midnight-200">
                    Botões na tela permitem atacar, esquivar, interagir, usar
                    habilidades e abrir o inventário com um simples toque.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-midnight-800/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Camera className="w-5 h-5 text-ember-400" />
                    <h4 className="font-medium text-white">Câmera por Gesto</h4>
                  </div>
                  <p className="text-sm text-midnight-200">
                    Arraste na tela para girar a câmera e explorar o ambiente ao
                    redor do seu personagem.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-crystal-500/10 to-gold-500/10 border border-crystal-400/20 p-6 text-center">
              <p className="text-sm text-midnight-100">
                O jogo detecta automaticamente seu dispositivo e ajusta os
                controles. Jogue como preferir!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
