import { Clock, MapPin, Users, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";

const details = [
  {
    icon: Clock,
    label: "Doors Open",
    value: "18:00"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town CBD"
  },
  {
    icon: Users,
    label: "Capacity",
    value: "Limited"
  },
  {
    icon: Shirt,
    label: "Dress Code",
    value: "Stylish Casual"
  }
];

export default function EventDetails() {
  return (
    <section className="py-20 px-6 bg-background" data-testid="event-details">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Event Details
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-elevate active-elevate-2 transition-all duration-200"
              data-testid={`detail-${index}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <detail.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
                <p className="text-2xl font-bold">{detail.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
