import CountdownTimer from "./CountdownTimer";
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Vibrant_gradient_party_background_30d995a5.png";

interface HeroSectionProps {
  targetDate: Date;
  onSubscribeClick: () => void;
}

export default function HeroSection({ targetDate, onSubscribeClick }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center flex flex-col justify-center min-h-screen">
        <div className="mb-4">
          <p className="text-primary-foreground text-sm md:text-base font-bold tracking-[0.3em] mb-1 heading-glow">
            FRIDAY
          </p>
          <p className="text-primary-foreground text-base md:text-lg font-bold tracking-[0.2em] heading-glow">
            5<sup className="text-xs">TH</sup> DECEMBER
          </p>
        </div>
        
        <div className="my-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary-foreground w-8 md:w-16"></div>
            <p className="text-primary-foreground text-xs md:text-sm font-bold tracking-[0.3em] heading-glow">
              GROOVY GALA
            </p>
            <div className="h-px bg-primary-foreground w-8 md:w-16"></div>
          </div>
          
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary-foreground tracking-tighter leading-[0.85]"
            style={{
              textShadow: `
                0 0 10px hsl(var(--primary)),
                0 0 20px hsl(var(--primary)),
                0 0 30px hsl(var(--primary)),
                0 0 40px hsl(var(--primary) / 0.5),
                0 0 70px hsl(var(--primary) / 0.3)
              `
            }}
          >
            HOUSE
            <br />
            PARTY
          </h1>
        </div>
        
        <div className="my-8">
          <CountdownTimer targetDate={targetDate} />
        </div>
        
        <div className="mt-8 mb-6 text-primary-foreground">
          <p className="text-xs md:text-sm tracking-wider mb-1 heading-glow">GET YOUR TICKET ONLINE AT</p>
          <p className="text-lg md:text-xl font-bold tracking-wide heading-glow">GROOVYGALA.CRD.CO</p>
        </div>
        
        <div className="mb-8 text-primary-foreground/90">
          <p className="text-xs md:text-sm tracking-widest heading-glow">LOCATION TBA</p>
        </div>
      </div>
    </section>
  );
}
