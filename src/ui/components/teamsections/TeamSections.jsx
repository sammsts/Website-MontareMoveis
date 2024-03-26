import CarouselCircular from '../carousel/Carousel'
import './style.css'

const people = [
  {
    name: 'Sinara Maciel',
    role: 'Fundadora / CEO',
    imageUrl:
      '/img/profile-ceo-teamsections.png',
  },
]
  
export default function TeamSections() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl text-black items-center justify-between grid xl:grid-cols-2">
        <div className="mx-auto grid gap-x-8 gap-y-20 px-6 lg:px-8 ">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gabarito</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Engenharia elétrica e Design de interiores; <br />
                Proj. Subestação particular / Loteamento / Ent. de energia / Ef. energética / Laudo técnico / Microgeração. <br />
                CREA 252020
              </p>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <a href="https://www.instagram.com/gabarito_engdesign/" target="_blank" rel="noreferrer">
            <div className="flex items-center justify-between">
              <button className="cta flex items-center">
                <span className="hover-underline-animation"> Conheça </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
        <div className="mx-auto w-full">
          <CarouselCircular />
        </div>
      </div>
    </div>
  )
}
