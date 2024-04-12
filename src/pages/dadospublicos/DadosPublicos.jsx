import '../../ui/styles/globals.css'
import DescriptionLists from '../../ui/components/descriptionlists/DescriptionLists.jsx';

const DadosPublicos = () => {
    return (
        <div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute sm:inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <DescriptionLists />
        </div>
    );
}

export default DadosPublicos;