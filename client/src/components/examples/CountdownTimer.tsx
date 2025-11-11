import CountdownTimer from '../CountdownTimer';

export default function CountdownTimerExample() {
  const targetDate = new Date('2025-12-05T18:00:00');
  
  return (
    <div className="bg-primary p-12">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
