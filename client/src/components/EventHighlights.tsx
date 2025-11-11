import { Music, Wine, MapPin, Users, Radio, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Music,
    title: "Premium Sound System",
    description: "State-of-the-art audio equipment for the ultimate listening experience"
  },
  {
    icon: Wine,
    title: "Exclusive Cocktails & Bar",
    description: "Signature drinks crafted by expert mixologists"
  },
  {
    icon: MapPin,
    title: "Rooftop Terrace Access",
    description: "Dance under the stars with panoramic city views"
  },
  {
    icon: Users,
    title: "Limited Capacity",
    description: "Intimate atmosphere with Cape Town's finest crowd"
  },
  {
    icon: Radio,
    title: "Live DJ Sets",
    description: "Non-stop beats from the city's top talent"
  },
  {
    icon: Sparkles,
    title: "VIP Experience",
    description: "Exclusive areas with premium service available"
  }
];

export default function EventHighlights() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background" data-testid="event-highlights">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
          <span className="heading-highlight heading-glow">Event Highlights</span>
        </h2>
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
          An unforgettable night featuring everything you need for the perfect party experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 sm:p-8 hover-elevate active-elevate-2 transition-all duration-200"
              data-testid={`highlight-${index}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <highlight.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 heading-glow">{highlight.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
