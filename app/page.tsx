import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Nichos } from '@/components/Nichos';
import { Results } from '@/components/Results';
import { Process } from '@/components/Process';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Nichos />
        <Results />
        <Process />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
