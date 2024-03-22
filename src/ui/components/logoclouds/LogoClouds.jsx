import "./style.css";

export default function LogoClouds() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Parcerias
          </h2>
          <a href="https://www.instagram.com/gabarito_engdesign/" target="_blank">
            <button 
              className="mx-auto grid justify-items-center text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br"
            >
              <img 
                src="/img/parceria-gabarito.png" 
                className="btn-gabarito mt-12"
                alt="Gabarito"
                width={158}
                height={48}
              />
              <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
                <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-24 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
                  <div className="rounded-sm bg-black py-1 px-2">
                    <p className="whitespace-nowrap">Engenharia elétrica e Design de interiores</p>
                  </div>
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
    )
  }
  