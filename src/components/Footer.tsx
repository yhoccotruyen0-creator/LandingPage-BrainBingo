import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-4">
            <div className="text-2xl font-bold text-forest-green mb-4">Superbrain</div>
            <p className="text-sm text-on-surface-variant">
              © 2024 Superbrain Daily Practice. Empowering minds through structured growth.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-4 flex flex-wrap gap-4 text-sm font-medium text-on-surface-variant">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Contact Support</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="hover:text-vibrant-orange transition-colors">
    {children}
  </a>
);
