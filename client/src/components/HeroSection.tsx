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
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <p className="text-primary-foreground/90 text-lg md:text-xl font-bold tracking-wider mb-4">
            FRIDAY
          </p>
          <p className="text-primary-foreground/90 text-2xl md:text-3xl font-bold tracking-wider">
            5<sup>TH</sup> DECEMBER
          </p>
        </div>
        
        <div className="mb-8">
          <p className="text-primary-foreground/70 text-sm md:text-base tracking-widest mb-4">
            —GROOVY GALA—
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-primary-foreground tracking-tight leading-none">
            HOUSE
            <br />
            PARTY
          </h1>
        </div>
        
        <div className="my-16">
          <CountdownTimer targetDate={targetDate} />
        </div>
        
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Prepare yourself for Cape Town's biggest house party
        </p>
        
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-12 py-6 rounded-full font-bold backdrop-blur-md"
          onClick={onSubscribeClick}
          data-testid="button-get-early-access"
        >
          Get Early Access
        </Button>
        
        <div className="mt-12 text-primary-foreground/70">
          <p className="text-sm">Get your ticket online at</p>
          <p className="text-lg font-bold mt-1">groovygala.crd.co</p>
        </div>
        
        <div className="mt-6 text-primary-foreground/60">
          <p className="text-sm">Location TBA</p>
        </div>
      </div>
    </section>
  );
}
