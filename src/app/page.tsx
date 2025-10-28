import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { WhoWeAreSection } from '@/components/who-we-are-section';
import { OurStorySection } from '@/components/our-story-section';
import { OurVisionSection } from '@/components/our-vision-section';
import { OurMissionSection } from '@/components/our-mission-section';
import { OurTeamSection } from '@/components/our-team-section';


const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');

const teamMembers = [
  { id: 'team1', name: 'Vandana M.', role: 'Founder & CEO' },
  { id: 'team2', name: 'Amit A.', role: 'Co-Founder & COO' },
  { id: 'team3', name: 'Ankit M.', role: 'Head of Operations' },
  { id: 'team4', name: 'Riddhima B.', role: 'Talent Acquisition Lead' },
  { id: 'team5', name: 'Nishant G.', role: 'Senior Manager' },
  { id: 'team6', name: 'Ankit J.', role: 'Senior Manager' },
  { id: 'team7', name: 'Nupur A.', role: 'Manager' },
  { id: 'team8', name: 'Aastha G.', role: 'Manager' },
  { id: 'team9', name: 'Poonam P.', role: 'Assistant Manager' },
];

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <AnimateOnScroll>
            <h1 className="text-[90px] font-display font-normal text-bright-accent">About Us</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="bg-gradient-angled">
        <WhoWeAreSection />
        <OurStorySection />
        <OurVisionSection />
        <OurMissionSection />
        <OurTeamSection teamMembers={teamMembers} placeholderImages={PlaceHolderImages} />
      </div>
    </>
  );
}
