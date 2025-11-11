import EmailSubscribe from '../EmailSubscribe';

export default function EmailSubscribeExample() {
  const handleSubscribe = async (email: string) => {
    console.log('Subscribe:', email);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };
  
  return <EmailSubscribe onSubscribe={handleSubscribe} />;
}
