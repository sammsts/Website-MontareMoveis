import '../../ui/styles/globals.css'
import './style.css'

const Sobre = () => {
  
    return (
        <div className="flex flex-col items-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="pt-44 flex">
                <h1 className="text-5xl font-bold font-sans">Criando espaços com conforto e estilo que você merece</h1>
            </div>
            <div className="pt-20 flex w-9/12">
                <h3 className="text-xl text-center font-sans text-gray-500">A Montare Móveis realiza desde o orçamento e fabricação do móvel, até a montagem na sua casa. Com um objetivo muito claro, realizar o seu sonho de ter um móvel sob medida com o maior cuidado e comprometimento possível.</h3>
            </div>
            <div className="flex justify-center py-20">
                <img src="/img/logo-black.png" alt="logo-empresa" className="w-10/12"/>
            </div>
            <div className="flex w-9/12">
                <h3 className="text-xl text-center font-sans text-gray-500">Está no mercado a quase dois anos, entretanto, o CEO João Neto atua a mais de 30 anos nesta área, tornando seu nome reconhecido por toda a região devido seu ótimo trabalho. Com excelentes talentos em montagens, fabricações, restaurações e manutenções de móveis. No momento atende na região de Santo Ângelo.</h3>
            </div>
            <div className="flex w-6/12 pt-10 pb-20">
                <h3 className="text-3xl text-center font-sans font-bold">A Montare Móveis veio para inovar e tornar seu sonho de tirar sua ideia do papel e realiza-lo.</h3>
            </div>
            <div className="w-screen bg-location-orange">
                <div className="flex justify-evenly items-center">
                    <a href="https://www.google.com/maps/place/Santo+%C3%82ngelo,+RS/@-28.3204105,-54.2382789,12.02z/data=!4m6!3m5!1s0x94fe9091a97f35f1:0x5f576c0ad8e18ca8!8m2!3d-28.3001866!4d-54.2658317!16zL20vMGI0cjN5?entry=ttu" target="_blank" rel="noreferrer">
                        <div className="size-11/12 px-5 py-5">
                            <img src="/img/location.png" alt="location"/>
                        </div>
                    </a>
                    <div className="size-3/5 px-5 py-5 pr-60">
                        <h1 className="text-white font-mono text-4xl font-bold tracking-wide text-center">Atualmente atuamos no munícipio de <span className="normal-case hover:uppercase hover:underline underline-offset-8 hover:decoration-sky-500">Santo Ângelo</span> e <span className="normal-case hover:uppercase hover:underline underline-offset-8 hover:decoration-sky-500">regiões próximas</span></h1>
                    </div>
                </div>
            </div>
            <div className="pt-20 flex">
                <h1 className="text-5xl font-bold font-sans">Transformação sob medida para o seu espaço</h1>
            </div>
            <div className="pt-10 pb-20 flex w-6/12">
                <h3 className="text-xl text-center font-sans text-gray-500">Na Montare Móveis, nós moldamos sonhos em realidade. Se você imagina um ambiente renovado, nós somos a carpintaria artística que irá guiar cada detalhe, entregando não apenas móveis, mas experiências personalizadas e um serviço que entende suas necessidades.</h3>
            </div>
            <div className="flex justify-evenly w-11/12 pb-20">
                <div className="w-2/5 py-5 px-5 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),gray)] hover:-translate-y-1 hover:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] transition duration-300 ease-in-out rounded-lg">
                    <div className="flex items-center">
                        <img src="/img/valores-icon.png" alt="compromisso-icon" className="w-12 pr-2" />
                        <h1 className="font-mono text-2xl font-bold">Princípios</h1>
                    </div>
                    <div className="pt-5">
                        <ul className="space-y-2">
                            <li><b>Qualidade Artesanal:</b> Comprometimento com a excelência em cada peça produzida;</li>
                            <li><b>Personalização:</b> Cada projeto é único e adaptado às necessidades e desejos do cliente;</li>
                            <li><b>Inovação:</b> Busca constante por novas técnicas e materiais que elevem o padrão dos móveis planejados;</li>
                            <li><b>Sustentabilidade:</b> Responsabilidade ambiental no uso de recursos e processos de fabricação;</li>
                            <li><b>Integridade:</b> Transparência e honestidade em todas as interações e transações;</li>
                            <li><b>Respeito:</b> Valorização das pessoas, desde os colaboradores até os clientes e parceiros;</li>
                            <li><b>Comprometimento:</b> Dedicação total aos projetos e à satisfação do cliente;</li>
                            <li><b>Excelência no Atendimento:</b> Atendimento humanizado que entende e atende às expectativas dos clientes;</li>
                            <li><b>Durabilidade:</b> Criação de móveis que resistam ao tempo, tanto em estilo quanto em funcionalidade;</li>
                            <li><b>Comunidade:</b> Engajamento com a comunidade local e contribuição para o seu desenvolvimento;</li>
                        </ul>
                    </div>
                </div>
                <div className="w-2/5 py-5 px-5 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),gray)] hover:-translate-y-1 hover:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] hover:duration-300 rounded-lg">
                    <div className="flex items-center">
                        <img src="/img/compromisso-icon.png" alt="compromisso-icon" className="w-12 pr-2" />
                        <h1 className="font-mono text-2xl font-bold">Compromisso</h1>
                    </div>
                    <div className="pt-5">
                        <p className="indent-8 text-justify">Na Montare Móveis, comprometemo-nos com a excelência e a satisfação do cliente, oferecendo um serviço personalizado que transforma visões em realidade, criando móveis que contam histórias e criam lares.</p>
                    </div>
                    <div className="flex items-center pt-12">
                        <img src="/img/grafico-icon.png" alt="grafico-icon" className="w-12 pr-2" />
                        <h1 className="font-mono text-2xl font-bold">Consideração</h1>
                    </div>
                    <div className="pt-5">
                        <p className="indent-8 text-justify">Buscamos ser líderes em inovação e qualidade no design de móveis planejados, inspirando o setor com criatividade e compromisso com a sustentabilidade, para criar espaços que reflitam a identidade de cada cliente e contribuam para um mundo mais belo e personalizado.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default Sobre;
