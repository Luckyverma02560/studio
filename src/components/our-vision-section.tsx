
"use client";

import { useRef } from 'react';
import { AnimateOnScroll } from './animate-on-scroll';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const OurVisionSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visionImage = PlaceHolderImages.find(p => p.id === 'our-mission'); // Re-using mission image for now

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-full flex items-center py-20 md:py-32 px-4 overflow-hidden"
        >
             <div className="absolute inset-0 bg-secondary -z-10" />
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="text-left">
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
                            <div className="w-24 h-0.5 bg-gold-accent mb-8 shadow-[0_0_15px_2px_rgba(199,164,91,0.4)]" />
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

                    <AnimateOnScroll animationClasses="animate-fade-in-up" className="relative aspect-[4/5] animation-delay-600">
                        <div className="group perspective-1000">
                             {visionImage && (
                                <Image
                                    src={visionImage.imageUrl}
                                    alt={visionImage.description}
                                    data-ai-hint={visionImage.imageHint}
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                             )}
                            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                             <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-gold-accent/50" />
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};
