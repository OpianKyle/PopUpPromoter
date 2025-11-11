import DJCarousel, { type DJ } from "./DJCarousel";
import djPhoto from "@assets/generated_images/Featured_DJ_portrait_bbbb907e.png";

const djs: DJ[] = [
  {
    name: "DJ NEXUS",
    image: djPhoto,
    genres: ["House", "Deep House", "Afrobeat"],
    setTime: "21:00 - 23:30",
    bio: "Cape Town's most electrifying DJ, known for seamless genre-blending and keeping the energy high all night long. Fresh off performances at major festivals across South Africa, DJ Nexus brings an unmatched vibe to every set.",
    venues: ["Ultra South Africa", "Rocking The Daisies", "The Waiting Room", "CTEMF"]
  },
  {
    name: "DJ PULSE",
    image: djPhoto,
    genres: ["Tech House", "Progressive", "Techno"],
    setTime: "23:30 - 02:00",
    bio: "International sensation bringing underground beats and infectious energy to every performance. Known for marathon sets that take crowds on unforgettable journeys through sound.",
    venues: ["Tomorrowland", "ADE Amsterdam", "Resistance", "Time Warp"]
  },
  {
    name: "DJ VIBE",
    image: djPhoto,
    genres: ["Afro House", "Amapiano", "Soulful"],
    setTime: "19:00 - 21:00",
    bio: "Local legend specializing in soulful sounds that get the crowd moving from the first beat. Master of reading the room and creating the perfect warm-up atmosphere.",
    venues: ["H20", "Shimmy Beach Club", "Modular", "Assembly"]
  }
];

export default function FeaturedDJ() {
  return (
    <section className="py-20 px-6 bg-card" data-testid="featured-dj">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured DJs
        </h2>
        
        <DJCarousel djs={djs} />
      </div>
    </section>
  );
}
