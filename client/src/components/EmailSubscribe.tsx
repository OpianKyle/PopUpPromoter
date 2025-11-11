import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import crowdPhoto from "@assets/generated_images/Party_crowd_atmosphere_5bf86b9b.png";

interface EmailSubscribeProps {
  onSubscribe: (email: string) => Promise<void>;
}

export default function EmailSubscribe({ onSubscribe }: EmailSubscribeProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await onSubscribe(email);
      setIsSuccess(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section 
        className="relative py-32 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${crowdPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="email-subscribe-success"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/50" />
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            You're on the List!
          </h2>
          <p className="text-xl text-primary-foreground/80">
            We'll notify you the moment tickets go live. Get ready to groove!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${crowdPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-testid="email-subscribe"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/50" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Be First in Line
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12">
          Get notified when tickets drop
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-14 text-lg flex-1 bg-white/10 backdrop-blur-md border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
            data-testid="input-email"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-14 px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
            data-testid="button-notify-me"
          >
            {isSubmitting ? "Subscribing..." : "Notify Me"}
          </Button>
        </form>
        
        {error && (
          <p className="mt-4 text-red-300" data-testid="error-message">{error}</p>
        )}
        
        <p className="mt-6 text-sm text-primary-foreground/60">
          We'll only email you about ticket releases
        </p>
      </div>
    </section>
  );
}
