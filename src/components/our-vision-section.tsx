
"use client";

import { useRef } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { StarfieldAnimation } from './starfield-animation';

const AuroraLayer = ({ style, delay }: { style: React.CSSProperties, delay: string }) => (
    <div
        className="aurora-layer"
        style={{
            ...style,
            animationDelay: delay,
            animationDuration: '30s'
        }}
    />
);

export const OurVisionSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visionImage = PlaceHolderImages.find(p => p.id === 'our-mission');

    const auroraLayers = [
        { style: { width: '120vw', height: '120vh', top: '50%', left: '50%', background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 60%)' }, delay: '0s' },
        { style: { width: '150vw', height: '150vh', top: '40%', left: '60%', background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, rgba(0, 0, 0, 0) 60%)' }, delay: '-5s' },
        { style: { width: '100vw', height: '100vh', top: '60%', left: '40%', background: 'radial-gradient(circle, rgba(199, 164, 91, 0.4) 0%, rgba(0, 0, 0, 0) 60%)' }, delay: '-10s' },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full flex items-center py-20 md:py-32 px-4 overflow-hidden"
        >
             <div className="aurora-background">
                {auroraLayers.map((layer, i) => <AuroraLayer key={i} {...layer} />)}
             </div>
             <StarfieldAnimation />
             <div className="absolute inset-0 bg-black -z-10 opacity-50" />
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center z-10">
                    <AnimateOnScroll animationClasses="animate-fade-in-up">
                        <h2 className="section-label mb-4">Our Vision</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-200">
                         <h3 className="section-heading mb-6 relative">
                            <span className="relative inline-block transform transition-transform duration-1000 ease-out">
                                Pioneering Financial Intelligence
                            </span>
                        </h3>
                    </AnimateOnScroll>
                    <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-300">
                        <div className="w-24 h-0.5 bg-gold-accent mb-8 mx-auto shadow-[0_0_15px_2px_rgba(199,164,91,0.4)]" />
                    </AnimateOnScroll>
                    <div className="space-y-6 text-muted-foreground text-lg">
                        <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-400">
                            <p>
                                To be the undisputed global leader in financial research and analytics, setting the benchmark for accuracy, foresight, and innovation.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-500">
                            <p>
                                We envision a future where every financial decision is empowered by our intelligence, creating a more transparent and efficient global market for all.
                            </p>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};
