import "./style.css";

export default function LogoClouds() {
    return (
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Parcerias
          </h2>
          <div className="mx-auto mt-10">
            <button className="btn-gabarito">GABARITO</button>
            {/* <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/img/parceria-gabarito.png"
              alt="Gabarito"
              width={158}
              height={48}
            /> */}
          </div>
        </div>
      </div>
    )
  }
  