import Navbar from '../Navbar';

export default function NavbarExample() {
  return (
    <div className="h-screen bg-background">
      <Navbar onNavigate={(section) => console.log('Navigate to:', section)} />
      <div className="pt-32 px-6 text-center">
        <p className="text-muted-foreground">Scroll down to see navbar effect</p>
      </div>
    </div>
  );
}
