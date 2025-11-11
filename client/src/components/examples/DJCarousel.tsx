import DJCarousel from '../DJCarousel';
import djNexus from '@assets/generated_images/Female_DJ_nightclub_portrait_9e09f394.png';
import djPulse from '@assets/generated_images/Male_DJ_performance_shot_4e3c3aca.png';
import djVibe from '@assets/generated_images/DJ_duo_festival_performance_35e8bd55.png';

export default function DJCarouselExample() {
  const djs = [
    {
      name: "DJ NEXUS",
      image: djNexus,
      genres: ["House", "Deep House", "Afrobeat"],
      setTime: "21:00 - 23:30",
      bio: "Cape Town's most electrifying DJ, known for seamless genre-blending and keeping the energy high all night long.",
      venues: ["Ultra SA", "Rocking The Daisies", "The Waiting Room", "CTEMF"]
    },
    {
      name: "DJ PULSE",
      image: djPulse,
      genres: ["Tech House", "Progressive", "Techno"],
      setTime: "23:30 - 02:00",
      bio: "International sensation bringing underground beats and infectious energy to every performance.",
      venues: ["Tomorrowland", "ADE", "Resistance", "Time Warp"]
    },
    {
      name: "DJ VIBE",
      image: djVibe,
      genres: ["Afro House", "Amapiano", "Soulful"],
      setTime: "19:00 - 21:00",
      bio: "Local legend specializing in soulful sounds that get the crowd moving from the first beat.",
      venues: ["H20", "Shimmy Beach", "Modular", "Assembly"]
    }
  ];

  return (
    <div className="bg-background p-12">
      <DJCarousel djs={djs} />
    </div>
  );
}
