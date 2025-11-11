import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
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
  const heroRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const djsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
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

  const handleNavigate = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      hero: heroRef,
      highlights: highlightsRef,
      djs: djsRef,
      details: detailsRef,
      tickets: subscribeRef,
    };
    
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubscribeClick = () => {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSubscribe = async (email: string) => {
    await subscribeMutation.mutateAsync(email);
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      <div ref={heroRef}>
        <HeroSection targetDate={targetDate} onSubscribeClick={handleSubscribeClick} />
      </div>
      <div ref={highlightsRef}>
        <EventHighlights />
      </div>
      <div ref={djsRef}>
        <FeaturedDJ />
      </div>
      <div ref={detailsRef}>
        <EventDetails />
      </div>
      <div ref={subscribeRef}>
        <EmailSubscribe onSubscribe={handleSubscribe} />
      </div>
      <Footer />
    </div>
  );
}
