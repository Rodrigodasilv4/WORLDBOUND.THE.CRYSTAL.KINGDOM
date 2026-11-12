import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowToPlay from '@/components/HowToPlay';
import PlaySection from '@/components/PlaySection';
import Support from '@/components/Support';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-midnight-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowToPlay />
        <PlaySection />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
