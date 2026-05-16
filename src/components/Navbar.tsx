import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  return (
    <nav className="bg-surface/90 dark:bg-deep-moss/90 backdrop-blur-md sticky top-0 w-full z-50 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-7xl mx-auto h-16">
        <div className="text-2xl font-bold text-forest-green">
          Superbrain
        </div>
        
        <div className="hidden md:flex gap-6 items-center">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#roadmap">Roadmap</NavLink>
          <NavLink href="#leaderboard">Leaderboard</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
        </div>

        <div className="flex gap-4 items-center">
          <button className="hidden sm:block text-forest-green border-2 border-forest-green px-4 py-1.5 rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-vibrant-orange text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Join Now
          </button>
          <button className="md:hidden text-forest-green p-1">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-on-surface-variant hover:text-forest-green transition-colors font-semibold text-sm hover:opacity-90"
  >
    {children}
  </a>
);
