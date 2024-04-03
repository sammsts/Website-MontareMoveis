import TeamSections from "../../ui/components/teamsections/TeamSections";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Parceiros = () => {
    useEffect(() => {
        ScrollReveal().reveal('.scroll-effect-parceiros-txt', {
          origin: 'left',
          distance: '20px',
          duration: 1000,
          delay: 220,
          easing: 'ease-in-out',
          reset: true,
        });
      }, []);

    return (
        <div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <h1 className="scroll-effect-parceiros-txt mx-auto py-10 grid max-w-7xl px-6 text-4xl font-bold tracking-tight text-black sm:text-5xl">Nossos parceiros</h1>
            <TeamSections />
        </div>
    );
};

export default Parceiros;
