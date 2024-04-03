import CtaSections from "../ctasections/CtaSections";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function Testimonials() {
    useEffect(() => {
      ScrollReveal().reveal('.scroll-effect-testimonials-img', {
        origin: 'left',
        distance: '20px',
        duration: 1000,
        delay: 220,
        easing: 'ease-in-out',
        reset: true,
      });
      
      ScrollReveal().reveal('.scroll-effect-testimonials-text', {
        origin: 'right',
        distance: '20px',
        duration: 1000,
        delay: 220,
        easing: 'ease-in-out',
        reset: true,
      });
    }, []);
    
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="scroll-effect-testimonials-img mx-auto h-8" src="/img/logo-title.png" alt="logo-title-montaremoveis" />
          <figure className="mt-10">
            <blockquote className="scroll-effect-testimonials-text text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Cada móvel que montei e fabriquei foi um passo na minha jornada. Cada peça é um reflexo da minha dedicação 
                e paixão. Como CEO, entendo que cada desafio é uma oportunidade para criar algo único e personalizado. 
                A montagem e fabricação de móveis me ensinaram a ver além do comum, a imaginar o extraordinário.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="scroll-effect-testimonials-img mx-auto h-12 w-12 rounded-full"
                src="/img/profile-ceo2.png"
                alt="João Neto - CEO"
              />
              <div className="scroll-effect-testimonials-text mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">João Neto</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO/Fundador da Montare Móveis</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <CtaSections />
      </section>
    )
  }
  