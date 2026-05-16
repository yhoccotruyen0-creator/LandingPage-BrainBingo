/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { Problem } from '@/src/components/sections/Problem';
import { Features } from '@/src/components/sections/Features';
import { Journey } from '@/src/components/sections/Journey';
import { Comparison } from '@/src/components/sections/Comparison';
import { Competition } from '@/src/components/sections/Competition';
import { SocialProof } from '@/src/components/sections/SocialProof';
import { CTAForm } from '@/src/components/sections/CTAForm';
import { DemoModal } from '@/src/components/DemoModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <Problem />
        <Features />
        <Journey />
        <Comparison />
        <Competition />
        <SocialProof />
        <CTAForm />
      </main>

      <Footer />
      
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </div>
  );
}

