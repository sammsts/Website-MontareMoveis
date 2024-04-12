import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function DescriptionLists() {
  return (
    <div className="px-0 pt-20 sm:px-20">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Informações sobre a empresa</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Dados públicos</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nome</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Montare Móveis</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Principal atividade</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fabricação e montagem de móveis planejados</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href="mailto:montaremoveisfm@gmail.com" className="hover:underline hover:decoration-indigo-400 hover:text-indigo-600">montaremoveisfm@gmail.com</a></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Data da abertura</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01/09/2022</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Cnpj</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              47.801.921/0001-17
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Situação</dt>
            <dd className="w-12 leading-5 text-gray-700 sm:col-span-2 sm:mt-0 rounded-md bg-green-50 text-center py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Ativa
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Atividades</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content-atvMainly"
                    id="panel1-header-atvMainly"
                  >
                    CNAE/Atividade Principal
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>31.03-9-00 - Fabricação de móveis de outros materiais, exceto madeira e metal</span>
                    <ul className="mt-5 divide-y divide-gray-100 rounded-md border border-gray-200">
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="text-justify text-gray-400">
                            Sobre esta atividade:
                            - a fabricação de móveis de material plástico moldados ou extrudados, com predominância de material plástico, estofados ou não, inclusive reforçados com fibra de vidro, para uso residencial e não-residencial
                            - a fabricação de móveis de vime e junco ou com predominância de vime ou junco
                            Descritores da atividade:
                            Fabricação de caixas e gabinetes de plástico para rádios, televisores, máquinas de costura, etc, Fabricação de partes e peças de vime, bambu e semelhantes para móveis, Fabricação de moveis de vime, bambu, junco e semelhantes, Fabricação de mesinha lateral (exceto de metal ou madeira), Fabricação de rack (exceto de metal ou madeira), Fabricação de bicama (exceto de metal ou madeira), Fabricação de móveis de material plástico, Fabricação de banheiros planejados (exceto em metal ou madeira), Fabricação de assentos e cadeiras de materiais não especificados, exceto para escritório, Fabricação de conjunto copa (exceto de metal ou madeira), Fabricação de partes e peças para assentos e cadeiras de materiais não especificados, exceto para veículos, Fabricação de armários de plástico de uso residencial, Fabricação de cadeiras de plástico para praia, Fabricação de bancos de plástico, Fabricação de partes de plástico para móveis, Fabricação de gôndolas e outras instalações comerciais semelhantes de plástico, Fabricação de cadeiras de material plástico, Fabricação de assentos e cadeiras de materiais não especificados, para escritório, Serviço de montagem e acabamento de moveis de material plástico, vime, junco e outros materiais, associados a fabricação de moveis, Fabricação de mesas de material plástico, Fabricação de estante rack (exceto de metal ou madeira), Fabricação de conjunto estofado (exceto em metal ou madeira), Fabricação de cozinhas planejadas (exceto em metal ou madeira), Fabricação de cadeira longarina (exceto de madeira ou metal), Fabricação de salas (exceto em metal ou madeira), Fabricação de sofás e poltronas de espuma sintética.
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content-atvSecondary"
                    id="panel2-header-atvSecondary"
                  >
                    CNAEs/Atividades Secundárias
                  </AccordionSummary>
                  <AccordionDetails>
                    <span>33.29-5-01 - Serviços de montagem de móveis de qualquer material</span>
                    <ul className="mt-5 divide-y divide-gray-100 rounded-md border border-gray-200">
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="text-justify text-gray-400">
                            Sobre esta atividade:
                            - o serviço de montagem de móveis de qualquer material para consumidor final quando executado por empresa especializada
                            Descritores da atividade:
                            Montagem de moveis de madeira para consumidor final, não associada ao comércio, quando executada por unidade especializada, Serviço de montagem de moveis de madeira para consumidor final quando executada por unidade especializada, Montagem de moveis de qualquer material para consumidor final, não associada ao comércio, quando executada por unidade especializada.
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
          </dd>
      </div>
    </dl>
      </div >
    </div >
  )
}
