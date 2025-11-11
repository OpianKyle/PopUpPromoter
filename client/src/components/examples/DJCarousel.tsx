import DJCarousel from '../DJCarousel';
import djPhoto from '@assets/generated_images/Featured_DJ_portrait_bbbb907e.png';

export default function DJCarouselExample() {
  const djs = [
    {
      name: "DJ NEXUS",
      image: djPhoto,
      genres: ["House", "Deep House", "Afrobeat"],
      setTime: "21:00 - 23:30",
      bio: "Cape Town's most electrifying DJ, known for seamless genre-blending and keeping the energy high all night long.",
      venues: ["Ultra South Africa", "Rocking The Daisies", "The Waiting Room", "CTEMF"]
    },
    {
      name: "DJ PULSE",
      image: djPhoto,
      genres: ["Tech House", "Progressive", "Techno"],
      setTime: "23:30 - 02:00",
      bio: "International sensation bringing underground beats and infectious energy to every performance.",
      venues: ["Tomorrowland", "ADE Amsterdam", "Resistance", "Time Warp"]
    },
    {
      name: "DJ VIBE",
      image: djPhoto,
      genres: ["Afro House", "Amapiano", "Soulful"],
      setTime: "19:00 - 21:00",
      bio: "Local legend specializing in soulful sounds that get the crowd moving from the first beat.",
      venues: ["H20", "Shimmy Beach Club", "Modular", "Assembly"]
    }
  ];

  return (
    <div className="bg-background p-12">
      <DJCarousel djs={djs} />
    </div>
  );
}
