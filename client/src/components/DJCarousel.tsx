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
    }, 5000);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
          <img
            src={currentDJ.image}
            alt={currentDJ.name}
            className="w-full rounded-lg shadow-lg transition-opacity duration-500"
            data-testid="dj-carousel-image"
          />
          
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full h-12 w-12"
              data-testid="carousel-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="bg-black/50 backdrop-blur-md hover:bg-black/70 text-white rounded-full h-12 w-12"
              data-testid="carousel-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="dj-carousel-name">
              {currentDJ.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {currentDJ.genres.map((genre, idx) => (
                <Badge key={idx} className="text-sm px-4 py-1">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              Set Time: <span className="font-bold text-foreground">{currentDJ.setTime}</span>
            </p>
            
            <p className="leading-relaxed">{currentDJ.bio}</p>
            
            <div className="pt-4">
              <p className="font-semibold text-foreground mb-2">Previous Venues:</p>
              <ul className="list-disc list-inside space-y-1">
                {currentDJ.venues.map((venue, idx) => (
                  <li key={idx}>{venue}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {djs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-muted hover:bg-muted-foreground/50'
            }`}
            data-testid={`carousel-dot-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}
