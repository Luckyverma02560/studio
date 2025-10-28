import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const heroImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');
const storyImage = PlaceHolderImages.find(p => p.id === 'our-story');
const missionImage = PlaceHolderImages.find(p => p.id === 'our-mission');

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

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-primary mb-6 ${className}`}>{children}</h2>
);

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
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10">
          <AnimateOnScroll>
            <h1 className="text-[90px] font-display font-normal text-accent">About Us</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative -mt-20 md:-mt-28 z-10">
        <div className="container mx-auto py-16 md:py-24 px-4">
          <AnimateOnScroll>
            <Card className="bg-background/80 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
              <SectionTitle className="text-center">Who We Are</SectionTitle>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-base leading-relaxed">
                <p>
                  Demystify Capital Markets is a premier provider of research and
                  analytics (R&A) services for financial institutions across the globe. We
                  provide a broad range of services, including equity research, credit
                  research, investment banking support, and financial modeling.
                </p>
                <p>
                  Our team of experienced professionals has a deep understanding of the
                  capital markets and is committed to providing our clients with the
                  highest quality of service. We are headquartered in New Delhi, India,
                  and have a team of over 50 professionals.
                </p>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>
      
      <div className="bg-card">
        <section className="container mx-auto pb-16 md:pb-24 px-4">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                {storyImage && (
                  <Image
                    src={storyImage.imageUrl}
                    alt={storyImage.description}
                    data-ai-hint={storyImage.imageHint}
                    width={600}
                    height={750}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                )}
              </div>
              <div>
                <SectionTitle>Our Story</SectionTitle>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Demystify Capital Markets was founded in 2021 by a team of
                  experienced investment bankers and research analysts who saw a need
                  for high-quality, independent research and analytics services. The
                  founders had all worked at top-tier investment banks and had seen
                  firsthand the challenges that financial institutions face in
                  getting the information they need to make informed decisions.
                  <br /><br />
                  They decided to create a company that would provide financial
                  institutions with the same level of research and analytics that they
                  had come to expect from the bulge-bracket firms, but at a fraction
                  of the cost.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="container mx-auto pb-16 md:pb-24 px-4">
          <AnimateOnScroll>
            <SectionTitle>Our Vision</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground text-base leading-relaxed">
              <p>
                Our vision is to be the leading provider of research and analytics
                services to the financial services industry. We aim to achieve this
                by providing our clients with the highest quality of service, by
                investing in our people and technology, and by being a trusted
                partner to our clients.
              </p>
              <p>
                We believe that by providing our clients with the information they
                need to make informed decisions, we can help them to achieve their
                business goals and to create long-term value for their shareholders.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="container mx-auto pb-16 md:pb-24 px-4">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <SectionTitle>Our Mission</SectionTitle>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our mission is to provide our clients with the highest quality of
                  research and analytics services, to help them make informed
                  decisions, and to achieve their business goals. We are committed
                  to providing our clients with a high level of service, and we are
                  always looking for new ways to improve our offerings.
                  <br /><br />
                  We believe that our success is dependent on the success of our
                  clients, and we are dedicated to helping our clients achieve their
                  full potential.
                </p>
              </div>
              <div>
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    data-ai-hint={missionImage.imageHint}
                    width={600}
                    height={750}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="container mx-auto pb-16 md:pb-24 px-4">
          <AnimateOnScroll className="text-center">
            <SectionTitle>Our Team</SectionTitle>
            <p className="max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed mb-12">
              We have a team of experienced professionals with a deep understanding
              of the capital markets. Our team is committed to providing our
              clients with the highest quality of service.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const image = PlaceHolderImages.find(p => p.id === member.id);
              return (
                <AnimateOnScroll key={member.id} className={`animation-delay-${(index % 4) * 200}`}>
                  <Card className="overflow-hidden text-center group border-none shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="relative">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={member.name}
                            data-ai-hint={image.imageHint}
                            width={400}
                            height={400}
                            className="object-cover w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-colors duration-300 flex items-center justify-center">
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <Link href="#" className="text-accent-foreground hover:text-white">
                              <Linkedin size={24} />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
