import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
const navItems = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Professional',
  path: '/professional'
}, {
  name: 'Journey',
  path: '/journey'
}, {
  name: 'Blog',
  path: '/blog'
}, {
  name: 'Contact',
  path: '/contact'
}];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <header className="py-4 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold text-primary hover:text-accent transition-colors">Manoj Kumar</Link>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => <Link key={item.path} to={item.path} className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
              {item.name}
            </Link>)}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        {isOpen && <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => <Link key={item.path} to={item.path} className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-2 flex justify-end">
                <ThemeToggle />
              </div>
            </nav>
          </div>}
      </div>
    </header>;
}