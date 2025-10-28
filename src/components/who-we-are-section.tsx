
"use client";
import { useState } from 'react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { WhoWeAreCard } from '@/components/who-we-are-card';
import { WhoWeAreParticles } from '@/components/who-we-are-particles';

export const WhoWeAreSection = () => {
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!e.currentTarget) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y / rect.height - 0.5) * -12;
        const rotateY = (x / rect.width - 0.5) * 12;
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform('');
    };

    return (
        <section
            className="relative bg-gradient-to-b from-[#0E0E10] to-[#1B1C1E] py-24 md:py-32 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <WhoWeAreParticles />
            <div className="relative container mx-auto px-4 z-10">
                <AnimateOnScroll animationClasses="animate-fade-in-up" once={true}>
                    <WhoWeAreCard transform={transform} />
                </AnimateOnScroll>
            </div>
        </section>
    );
};
