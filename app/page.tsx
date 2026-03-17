import ThreeBackground from '@/components/ThreeBackground';
import Progress from '@/components/Progress';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import InternalSearch from '@/components/InternalSearch';
import TeamWorkspace from '@/components/TeamWorkspace';
import Stats from '@/components/Stats';
import QA from '@/components/QA';
import HowItWorks from '@/components/HowItWorks';
import Platform from '@/components/Platform';
import Security from '@/components/Security';
import Integrations from '@/components/Integrations';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThreeBackground />
      <Progress />
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <div className="w-full h-[1px] relative bg-gradient-to-r from-transparent via-[rgba(0,229,160,0.35)] to-transparent">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--green)] shadow-[0_0_18px_5px_rgba(0,229,160,0.45)]" />
      </div>
      <InternalSearch />
      <TeamWorkspace />
      <div className="w-full h-[1px] relative bg-gradient-to-r from-transparent via-[rgba(0,229,160,0.35)] to-transparent">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--green)] shadow-[0_0_18px_5px_rgba(0,229,160,0.45)]" />
      </div>
      <Stats />
      <QA />
      <HowItWorks />
      <Platform />
      <Security />
      <Integrations />
      <Marquee
        reverse
        items={[
          { icon: '🔍', label: 'Smart Search' },
          { icon: '⚡', label: 'Lightning Fast' },
          { icon: '🤝', label: 'Team Collaboration' },
          { icon: '🤖', label: 'AI Powered' },
          { icon: '🔒', label: 'Enterprise Security' },
          { icon: '🌐', label: 'Works Everywhere' },
          { icon: '📱', label: 'Mobile Ready' },
          { icon: '🎯', label: 'Precision Results' },
        ]}
      />
      <Features />
      <Pricing />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
