import '../../ui/styles/globals.css'
import './style.css'

const Sobre = () => {
  
    return (
        <div className="flex flex-col items-center">
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
            <div className="flex w-6/12 pt-10 pb-10">
                <h3 className="text-3xl text-center font-sans font-bold">A Montare Móveis veio para inovar e tornar seu sonho de tirar sua ideia do papel e realiza-lo.</h3>
            </div>
            <a href="https://www.google.com/maps/place/Santo+%C3%82ngelo,+RS/@-28.3204105,-54.2382789,12.02z/data=!4m6!3m5!1s0x94fe9091a97f35f1:0x5f576c0ad8e18ca8!8m2!3d-28.3001866!4d-54.2658317!16zL20vMGI0cjN5?entry=ttu" target="_blank" rel="noreferrer">
                <div className="flex justify-center py-20 w-screen bg-location-orange">
                    <img src="/img/location.png" alt="location" className="size-3/5"/>
                </div>
            </a>

        </div>
    );
  };
export default Sobre;
