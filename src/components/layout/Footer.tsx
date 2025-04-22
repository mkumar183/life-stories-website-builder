
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Your Name</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              A personal website showcasing my professional journey, family life, and self-discovery path through yoga and meditation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-serif text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/professional" className="text-muted-foreground hover:text-primary transition-colors">
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link to="/journey" className="text-muted-foreground hover:text-primary transition-colors">
                  Life Journey
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:text-right">
            <h3 className="font-serif text-xl font-medium mb-4">Connect</h3>
            <div className="flex space-x-4 md:justify-end">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with React, Tailwind CSS, and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
