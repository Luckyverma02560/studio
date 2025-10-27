import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  const logo = PlaceHolderImages.find(p => p.id === 'logo');

  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '/', label: 'About Us' },
    { href: '#', label: 'Our Offerings' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Contact Us' },
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
    <footer className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and About */}
          <div>
            {logo && (
              <Link href="/">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  width={180}
                  height={45}
                  className="brightness-0 invert mb-4"
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
                <span>B-9, I-st Floor, Shivalik, Malviya Nagar, New Delhi - 110017</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent mr-4 shrink-0" />
                <a href="tel:+919953580559" className="hover:text-accent transition-colors">+91 99535 80559</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-4 shrink-0" />
                <a href="mailto:info@demystifycm.com" className="hover:text-accent transition-colors">info@demystifycm.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-primary-foreground/50">
          <p>Copyright © 2024 Demystify Capital Markets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
