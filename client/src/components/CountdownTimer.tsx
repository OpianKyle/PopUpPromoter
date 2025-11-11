import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8" data-testid="countdown-timer">
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-8xl font-bold text-primary-foreground" data-testid="countdown-days">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-sm md:text-base font-medium text-primary-foreground/80 mt-2">
          D
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-primary-foreground/60">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-8xl font-bold text-primary-foreground" data-testid="countdown-hours">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm md:text-base font-medium text-primary-foreground/80 mt-2">
          H
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-primary-foreground/60">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-8xl font-bold text-primary-foreground" data-testid="countdown-minutes">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm md:text-base font-medium text-primary-foreground/80 mt-2">
          M
        </div>
      </div>
      
      <div className="text-4xl md:text-6xl font-bold text-primary-foreground/60">:</div>
      
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-8xl font-bold text-primary-foreground" data-testid="countdown-seconds">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm md:text-base font-medium text-primary-foreground/80 mt-2">
          S
        </div>
      </div>
    </div>
  );
}
