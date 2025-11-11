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
          <p className="text-primary-foreground text-base md:text-lg font-bold tracking-[0.3em] mb-2">
            FRIDAY
          </p>
          <p className="text-primary-foreground text-lg md:text-xl font-bold tracking-[0.2em]">
            5<sup className="text-sm">TH</sup> DECEMBER
          </p>
        </div>
        
        <div className="my-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-primary-foreground w-12 md:w-24"></div>
            <p className="text-primary-foreground text-sm md:text-base font-bold tracking-[0.3em]">
              GROOVY GALA
            </p>
            <div className="h-px bg-primary-foreground w-12 md:w-24"></div>
          </div>
          
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black text-primary-foreground tracking-tighter leading-[0.85] mb-12">
            HOUSE
            <br />
            PARTY
          </h1>
        </div>
        
        <div className="my-16">
          <CountdownTimer targetDate={targetDate} />
        </div>
        
        <div className="mt-16 mb-8 text-primary-foreground">
          <p className="text-sm md:text-base tracking-wider mb-2">GET YOUR TICKET ONLINE AT</p>
          <p className="text-xl md:text-2xl font-bold tracking-wide">GROOVYGALA.CRD.CO</p>
        </div>
        
        <div className="mb-12 text-primary-foreground/90">
          <p className="text-sm md:text-base tracking-widest">LOCATION TBA</p>
        </div>
        
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base md:text-lg px-12 py-6 rounded-full font-bold backdrop-blur-md"
          onClick={onSubscribeClick}
          data-testid="button-get-early-access"
        >
          Get Early Access
        </Button>
      </div>
    </section>
  );
}
