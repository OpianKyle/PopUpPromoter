import DJCarousel, { type DJ } from "./DJCarousel";
import djNexus from "@assets/generated_images/Female_DJ_nightclub_portrait_9e09f394.png";
import djPulse from "@assets/generated_images/Male_DJ_performance_shot_4e3c3aca.png";
import djVibe from "@assets/generated_images/DJ_duo_festival_performance_35e8bd55.png";

const djs: DJ[] = [
  {
    name: "DJ NEXUS",
    image: djNexus,
    genres: ["House", "Deep House", "Afrobeat"],
    setTime: "21:00 - 23:30",
    bio: "Cape Town's most electrifying DJ, known for seamless genre-blending and keeping the energy high all night long. Fresh off performances at major festivals across South Africa, DJ Nexus brings an unmatched vibe to every set.",
    venues: ["Ultra SA", "Rocking The Daisies", "The Waiting Room", "CTEMF"]
  },
  {
    name: "DJ PULSE",
    image: djPulse,
    genres: ["Tech House", "Progressive", "Techno"],
    setTime: "23:30 - 02:00",
    bio: "International sensation bringing underground beats and infectious energy to every performance. Known for marathon sets that take crowds on unforgettable journeys through sound.",
    venues: ["Tomorrowland", "ADE", "Resistance", "Time Warp"]
  },
  {
    name: "DJ VIBE",
    image: djVibe,
    genres: ["Afro House", "Amapiano", "Soulful"],
    setTime: "19:00 - 21:00",
    bio: "Local legend specializing in soulful sounds that get the crowd moving from the first beat. Master of reading the room and creating the perfect warm-up atmosphere.",
    venues: ["H20", "Shimmy Beach", "Modular", "Assembly"]
  }
];

export default function FeaturedDJ() {
  return (
    <section className="py-20 bg-card" data-testid="featured-dj">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="heading-highlight heading-glow">Featured DJs</span>
        </h2>
      </div>
      
      <DJCarousel djs={djs} />
    </section>
  );
}
