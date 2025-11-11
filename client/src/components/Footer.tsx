import { SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Powered by Groovy Events
            </p>
            <a 
              href="https://groovygala.crd.co" 
              className="text-sm text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-website"
            >
              groovygala.crd.co
            </a>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-twitter"
            >
              <SiX className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Groovy Gala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
