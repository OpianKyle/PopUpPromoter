import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import HeroSection from "@/components/HeroSection";
import EventHighlights from "@/components/EventHighlights";
import FeaturedDJ from "@/components/FeaturedDJ";
import EventDetails from "@/components/EventDetails";
import EmailSubscribe from "@/components/EmailSubscribe";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Home() {
  const { toast } = useToast();
  const subscribeRef = useRef<HTMLDivElement>(null);
  const targetDate = new Date('2025-12-05T18:00:00');

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/subscribe", { email });
      return response.json();
    },
    onError: (error: any) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      throw error;
    },
  });

  const handleSubscribeClick = () => {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubscribe = async (email: string) => {
    await subscribeMutation.mutateAsync(email);
  };

  return (
    <div className="min-h-screen">
      <HeroSection targetDate={targetDate} onSubscribeClick={handleSubscribeClick} />
      <EventHighlights />
      <FeaturedDJ />
      <EventDetails />
      <div ref={subscribeRef}>
        <EmailSubscribe onSubscribe={handleSubscribe} />
      </div>
      <Footer />
    </div>
  );
}
