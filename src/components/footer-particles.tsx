
'use client';
import { useState, useEffect } from 'react';

const PARTICLE_COUNT = 50;
const GLOWING_COLORS = ['#D0021B']; // Red only

export const FooterParticles = () => {
    const [particles, setParticles] = useState<JSX.Element[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const generateParticles = () => {
                return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
                    const size = Math.random() * 2 + 1;
                    const color = GLOWING_COLORS[Math.floor(Math.random() * GLOWING_COLORS.length)];
                    const style = {
                        left: `${Math.random() * 100}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                        boxShadow: `0 0 4px ${color}, 0 0 6px ${color}33`,
                        animationDuration: `${Math.random() * 20 + 25}s`,
                        animationDelay: `-${Math.random() * 30}s`,
                    };
                    return <div key={i} className="particle" style={style} />;
                });
            };
            setParticles(generateParticles());
        }
    }, [isMounted]);

    if (!isMounted) {
        return null;
    }

    return <div className="absolute bottom-0 left-0 w-full h-[150%] particle-container opacity-30">{particles}</div>;
};
