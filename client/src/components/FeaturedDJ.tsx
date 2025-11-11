import { Badge } from "@/components/ui/badge";
import djPhoto from "@assets/generated_images/Featured_DJ_portrait_bbbb907e.png";

export default function FeaturedDJ() {
  return (
    <section className="py-20 px-6 bg-card" data-testid="featured-dj">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured DJ
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={djPhoto}
              alt="Featured DJ"
              className="w-full rounded-lg shadow-lg"
              data-testid="dj-photo"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                DJ NEXUS
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="text-sm px-4 py-1" data-testid="genre-house">House</Badge>
                <Badge className="text-sm px-4 py-1" data-testid="genre-deep-house">Deep House</Badge>
                <Badge className="text-sm px-4 py-1" data-testid="genre-afrobeat">Afrobeat</Badge>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Set Time: <span className="font-bold text-foreground">21:00 - 23:30</span>
              </p>
              
              <p className="leading-relaxed">
                Cape Town's most electrifying DJ, known for seamless genre-blending and 
                keeping the energy high all night long. Fresh off performances at major 
                festivals across South Africa, DJ Nexus brings an unmatched vibe to every set.
              </p>
              
              <div className="pt-4">
                <p className="font-semibold text-foreground mb-2">Previous Venues:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ultra South Africa</li>
                  <li>Rocking The Daisies</li>
                  <li>The Waiting Room</li>
                  <li>CTEMF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
