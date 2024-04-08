import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function CtaSections() {
    useEffect(() => {
      ScrollReveal().reveal('.scroll-effect-testimonials-text', {
        origin: 'right',
        distance: '20px',
        duration: 1000,
        delay: 220,
        easing: 'ease-in-out',
        reset: true,
      });

      ScrollReveal().reveal('.scroll-effect-testimonials-img', {
        origin: 'right',
        distance: '20px',
        duration: 1000,
        delay: 260,
        easing: 'ease-in-out',
        reset: true,
      });
      
      ScrollReveal().reveal('.scroll-effect-testimonials-text-btn', {
        origin: 'left',
        distance: '20px',
        duration: 1500,
        delay: 300,
        easing: 'ease-in-out',
        reset: true,
      });
    }, []);

    return (
      <div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="scroll-effect-testimonials-text text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Conheça nossos parceiros.
              </h2>
              <p className="scroll-effect-testimonials-text mt-6 text-lg leading-8 text-gray-300">
                A parceria com outras empresas/prestadores de serviços é sempre bem-vinda, entre em contato conosco.
              </p>
              <div className="scroll-effect-testimonials-text-btn mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a href="parceiros" className="text-sm font-semibold leading-6 text-white">
                  Parceiros <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="scroll-effect-testimonials-img relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/img/parceiros-ctasections.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  