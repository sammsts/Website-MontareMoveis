import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const links = [
    { name: 'Qualidade' },
    { name: 'Design Personalizado' },
    { name: 'Experiência e Habilidade' },
    { name: 'Sustentabilidade' },
  ]
  const stats = [
    { name: 'Escritório em SÂ - RS', value: '1' },
    { name: 'Anos de experiência', value: '+30' },
    { name: 'Ano no mercado', value: '+1' },
    { name: 'Em primeiro lugar', value: 'Prazo e cuidado' },
  ]
  
  export default function HeaderSection() {
    useEffect(() => {
      ScrollReveal().reveal('.scroll-effect-headersection', {
        origin: 'top',
        distance: '20px',
        duration: 1000,
        delay: 140,
        easing: 'ease-in-out',
        reset: true,
      });
      
      ScrollReveal().reveal('.scroll-effect-headersection-tags', {
        origin: 'top',
        distance: '20px',
        duration: 1500,
        delay: 140,
        easing: 'ease-in-out',
        reset: true,
      });
  
      ScrollReveal().reveal('.scroll-effect-headersection-info', {
        origin: 'top',
        distance: '20px',
        duration: 2000,
        delay: 300,
        easing: 'ease-in-out',
        reset: true,
      });
    }, []);

    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="/img/header-section.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="scroll-effect-headersection mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Trabalhamos com</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              material de qualidade, onde a entrega e montagem é realizada pela empresa, e somente é finalizado o serviço quando o cliente estiver satisfeito.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="scroll-effect-headersection-tags grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true"></span>
                </a>
              ))}
            </div>
            <dl className="scroll-effect-headersection-info mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  