
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface OurTeamSectionProps {
  teamMembers: TeamMember[];
  placeholderImages: ImagePlaceholder[];
}

export const OurTeamSection = ({ teamMembers, placeholderImages }: OurTeamSectionProps) => {
  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 bg-gradient-to-b from-[#121315] to-[#1B1C1E]">
       <div className="absolute inset-0 z-0">
           <div className="absolute top-1/4 left-1/4 w-2/3 h-2/3 bg-gold-accent/10 rounded-full filter blur-[100px] animate-pulse-slow" />
           <div className="absolute bottom-1/4 right-1/4 w-2/3 h-2/3 bg-accent/10 rounded-full filter blur-[100px] animate-pulse-slow animation-delay-600" />
       </div>

      <div className="container mx-auto relative z-10">
        <AnimateOnScroll className="text-center" animationClasses="animate-fade-in-up">
          <h2 className="section-label">Our Team</h2>
          <h3 className="section-heading mt-4 mb-6">The Architects of Insight</h3>
          <p className="section-subheading mb-12">
            A synergetic blend of seasoned experts and analytical minds dedicated to navigating the currents of capital markets.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => {
            const image = placeholderImages.find(p => p.id === member.id);
            return (
              <AnimateOnScroll
                key={member.id}
                className={`animation-delay-${(index % 3) * 200}`}
                animationClasses="animate-fade-in-up"
              >
                <Card className="group overflow-hidden text-center bg-secondary/20 backdrop-blur-sm border border-border/10 shadow-lg shadow-black/30 transition-all duration-300 hover:!shadow-gold-accent/20 hover:-translate-y-2 hover:border-gold-accent/30">
                  <CardContent className="p-0">
                    <div className="relative aspect-square w-full h-full">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={member.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Link href="#" className="bg-gold-accent text-accent-foreground p-2 rounded-full inline-block hover:bg-white hover:text-black">
                            <Linkedin size={20} />
                          </Link>
                        </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline-display font-semibold text-xl text-heading-text">{member.name}</h3>
                      <p className="text-sm text-gold-accent">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

    
