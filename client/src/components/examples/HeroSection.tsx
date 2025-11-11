import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const targetDate = new Date('2025-12-05T18:00:00');
  
  return (
    <HeroSection 
      targetDate={targetDate} 
      onSubscribeClick={() => console.log('Subscribe clicked')} 
    />
  );
}
