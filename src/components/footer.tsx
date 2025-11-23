import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FooterParticles } from './footer-particles';

export default function Footer() {
  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '/', label: 'About Us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Payment' },
    { href: '#', label: 'Investor Charter' },
    { href: '#', label: 'Contact Us' },
    { href: '#', label: 'Blog' },
  ];

  const offeringsLinks = [
    { href: '#', label: 'Equity Research' },
    { href: '#', label: 'Credit Research' },
    { href: '#', label: 'Investment Banking Support' },
    { href: '#', label: 'Financial Modeling' },
  ];

  const socialLinks = [
    { href: '#', icon: Linkedin },
    { href: '#', icon: Twitter },
    { href: '#', icon: Facebook },
    { href: '#', icon: Instagram },
  ];

  return (
    <footer className="relative bg-black text-primary-foreground/80 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FooterParticles />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and About */}
          <div>
            {logo && (
              <Link href="/">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  width={40}
                  height={40}
                  className={cn('brightness-0 invert mb-4 rounded-full')}
                />
              </Link>
            )}
            <p className="text-sm leading-relaxed mb-6">
              Demystify Capital Markets is a premier provider of research and analytics (R&A) services for financial institutions across the globe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Offerings */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Offerings</h3>
            <ul className="space-y-3">
              {offeringsLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mt-1 mr-4 shrink-0" />
                <span>Room No. 001, 1-st Floor, XXXX Residence, Sector 44, Noida - 201020</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent mr-4 shrink-0" />
                <a href="tel:+918600070638" className="hover:text-accent transition-colors">+91 86000 70638</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-4 shrink-0" />
                <a href="mailto:kavirajverma1976@gmail.com" className="hover:text-accent transition-colors">kavirajverma1976@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4 relative z-10">
        <div className="container mx-auto px-4 text-center text-xs text-primary-foreground/50">
          <p>Copyright © 2024 Demystify Capital Markets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
