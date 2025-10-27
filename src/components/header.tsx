"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '/', label: 'About Us' },
  { href: '#', label: 'Our Offerings' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Contact Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={cn(
        "relative text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent",
        isActive ? "text-accent" : "text-primary-foreground",
        className
      )}>
        {label}
        {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string; }) => {
     const isActive = pathname === href;
    return (
        <SheetClose asChild>
          <Link href={href} className={cn(
            "block py-3 text-lg text-center",
            isActive ? "text-accent" : "text-foreground"
            )}>
              {label}
          </Link>
        </SheetClose>
    );
  };


  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/30 shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            {logo && (
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                data-ai-hint={logo.imageHint}
                width={170}
                height={42}
                priority
                className={cn('brightness-0 invert')}
              />
            )}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.label}
                href={link.href}
                label={link.label}
                className={cn('text-white hover:text-accent')}
              />
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn('text-white hover:text-accent')}>
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] bg-background">
                 <div className="mt-12 flex flex-col gap-4">
                    {navLinks.map(link => <MobileNavLink key={link.href} {...link} />)}
                 </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
