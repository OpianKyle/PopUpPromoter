import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface DJ {
  name: string;
  image: string;
  genres: string[];
  setTime: string;
  bio: string;
  venues: string[];
}

interface DJCarouselProps {
  djs: DJ[];
}

export default function DJCarousel({ djs }: DJCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % djs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [djs.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + djs.length) % djs.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % djs.length);
  };

  const currentDJ = djs[currentIndex];

  return (
    <div className="relative" data-testid="dj-carousel">
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${currentDJ.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="w-full p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <h3 
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white heading-glow"
                data-testid="dj-carousel-name"
              >
                {currentDJ.name}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {currentDJ.genres.map((genre, idx) => (
                  <Badge 
                    key={idx} 
                    className="text-base px-6 py-2 bg-primary/90 backdrop-blur-sm"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-bold text-white/90 mb-4">
                Set Time: {currentDJ.setTime}
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
                {currentDJ.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span>Previous Venues:</span>
                {currentDJ.venues.map((venue, idx) => (
                  <span key={idx} className="font-semibold text-white/90">
                    {venue}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex items-center justify-between pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="pointer-events-auto bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full h-14 w-14 border border-white/20"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="pointer-events-auto bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full h-14 w-14 border border-white/20"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {djs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-12 bg-primary' 
                : 'w-2.5 bg-muted hover:bg-muted-foreground/50'
            }`}
            data-testid={`carousel-dot-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}
