
"use client";

import { AnimateOnScroll } from './animate-on-scroll';

export const DisclaimerSection = () => {
    return (
        <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-[#1B1C1E] to-[#121315]">
            <div className="container mx-auto relative z-10 text-center">
                <AnimateOnScroll animationClasses="animate-fade-in-up">
                    <h2 className="section-label mb-8">Disclaimer</h2>
                </AnimateOnScroll>
                <div className="max-w-4xl mx-auto text-muted-foreground text-sm space-y-6 text-center">
                    <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-200">
                        <p className="whitespace-pre-line font-noto-serif">
{`18+ Age Warning:
You must be at least 18 years old to participate in this Stock Market Trading Workshop.

For Educational Purposes Only:
The information presented in this Stock Market Trading Workshop is intended for educational purposes only and does not constitute financial advice or a solicitation to buy or sell any financial instruments. The information is provided “as is” without warranty of any kind, express or implied, including but not to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

Investment Risk:
Investing in the stock market involves inherent risks, and there is no guarantee of profit. Participants in this workshop should be aware of the risks involved and should consult with a licensed financial professional before making any investment decisions. Past performance is not indicative of future results.

Individual Results:
Individual results from participating in this workshop will vary depending on a variety of factors, including knowledge, experience, market conditions, and personal circumstances. ProfitUni does not guarantee any specific outcomes or financial success as a result of attending this workshop.

No Guarantees:
ProfitUni does not guarantee the accuracy or completeness of the information provided in this workshop. The information is based on the current market conditions and is subject to change without notice.

Third-Party Links:
This webpage may contain links to third-party websites or resources. ProfitUni is not responsible for the content or accuracy of any third-party information and does not endorse any specific products or services.

By accessing this page and participating in this workshop, you acknowledge and agree to the following:

You are at least 18 years old.
You understand that investing in the stock market involves risks and there is no guarantee of profit.
You are solely responsible for any investment decisions you make and any financial consequences that may result.
You will not hold ProfitUni liable for any losses or damages arising from your participation in this workshop.
You agree to use the information provided in this workshop responsibly and ethically.`}
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animationClasses="animate-fade-in-up" className="animation-delay-400">
                        <div className="whitespace-pre-line text-lg">
                            <p className="font-noto-serif font-extrabold text-red-500">
                                All The Rights Of This Prototypes Are Reserved  And the information and images shown here is a prototype and Non Copyrighted. Remember, this Website Is For Sale.
                            </p>
                            <p><span className="text-gold-accent font-headline font-bold">For More Details,</span></p>
                            <p>
                                <span className="text-gold-accent font-headline font-bold">Contact : </span>
                                <span className="text-white">+91 8600070638</span>
                            </p>
                            <p>
                                <span className="text-gold-accent font-headline font-bold">Email : </span>
                                <span className="text-white">kavirajverma1976@gmail.com</span>
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};
