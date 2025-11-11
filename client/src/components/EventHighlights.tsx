import { Music, Wine, MapPin, Users, Radio, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section className="py-20 px-6 bg-background" data-testid="event-highlights">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Event Highlights
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          An unforgettable night featuring everything you need for the perfect party experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate active-elevate-2 transition-all duration-200"
              data-testid={`highlight-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
