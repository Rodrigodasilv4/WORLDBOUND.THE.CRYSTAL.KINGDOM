import {
  Compass,
  Swords,
  ScrollText,
  TrendingUp,
  Shield,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Exploração Vasta',
    description:
      'Percorra florestas encantadas, montanhas cristalinas, cavernas brilhantes e ilhas flutuantes num mundo aberto cheio de segredos.',
    image:
      'https://images.pexels.com/photos/32877821/pexels-photo-32877821.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crystal',
  },
  {
    icon: Swords,
    title: 'Combate Dinâmico',
    description:
      'Enfrente criaturas lendárias em batalhas em tempo real. Use ataques, esquivas e habilidades especiais para vencer inimigos poderosos.',
    image:
      'https://images.pexels.com/photos/10068853/pexels-photo-10068853.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'ember',
  },
  {
    icon: ScrollText,
    title: 'Missões e Aventuras',
    description:
      'Complete missões épicas, converse com habitantes do reino e desvende a história do Reino de Cristal enquanto progreda na sua jornada.',
    image:
      'https://images.pexels.com/photos/12650746/pexels-photo-12650746.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'gold',
  },
  {
    icon: TrendingUp,
    title: 'Evolução do Personagem',
    description:
      'Ganhe experiência, suba de nível, desbloqueie novas habilidades e torne-se mais forte a cada batalha vencida.',
    image:
      'https://images.pexels.com/photos/4913385/pexels-photo-4913385.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crystal',
  },
  {
    icon: Shield,
    title: 'Equipamentos Lendários',
    description:
      'Encontre e equipe armas, armaduras e itens raros espalhados pelo mundo. Cada equipamento altera sua aparência e poder.',
    image:
      'https://images.pexels.com/photos/10068847/pexels-photo-10068847.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'gold',
  },
  {
    icon: MapPin,
    title: 'O Reino de Cristal',
    description:
      'Descubra a lore de um reino antigo formado por cristais mágicos, onde cada região guarda mistérios e perigos únicos.',
    image:
      'https://images.pexels.com/photos/34611655/pexels-photo-34611655.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crystal',
  },
];

const accentMap: Record<string, { text: string; bg: string; border: string }> = {
  crystal: {
    text: 'text-crystal-400',
    bg: 'bg-crystal-500/10',
    border: 'group-hover:border-crystal-400/50',
  },
  gold: {
    text: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'group-hover:border-gold-400/50',
  },
  ember: {
    text: 'text-ember-400',
    bg: 'bg-ember-500/10',
    border: 'group-hover:border-ember-400/50',
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crystal-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-crystal-400 tracking-[0.3em] uppercase mb-4 block">
            Sobre o Jogo
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-white">Um Mundo</span>{' '}
            <span className="text-gradient-crystal">Sem Limites</span>
          </h2>
          <p className="text-lg text-midnight-200 max-w-3xl mx-auto leading-relaxed">
            WORLDBOUND é uma aventura de fantasia onde você explora o misterioso
            Reino de Cristal. Com seu companheiro Drako, enfrente perigos,
            descubra tesouros e escreva sua própria lenda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const accent = accentMap[feature.accent];
            return (
              <div
                key={i}
                className={`group relative rounded-2xl bg-glass overflow-hidden border transition-all duration-500 hover:scale-[1.02] ${accent.border}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/40 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-10 h-10 rounded-lg ${accent.bg} flex items-center justify-center backdrop-blur-sm`}
                  >
                    <feature.icon className={`w-5 h-5 ${accent.text}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-midnight-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/9891031/pexels-photo-9891031.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Drako - Companheiro"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-950 via-midnight-950/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-8 lg:px-16">
              <span className="text-xs font-semibold text-gold-400 tracking-[0.3em] uppercase mb-3 block">
                Seu Companheiro
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Conheça Drako
              </h3>
              <p className="text-midnight-100 leading-relaxed text-base sm:text-lg">
                Drako é seu leal companheiro de aventura. Ao seu lado, você
                explorará as terras mais perigosas do Reino de Cristal, montará
                sobre as nuvens e enfrentará os maiores desafios que o reino
                esconde. Uma jornada que ninguém pode enfrentar sozinho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
