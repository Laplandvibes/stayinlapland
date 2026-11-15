/**
 * Brasilianportugali (pt-BR) · town-ivalo-inari. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/ivalo-inari.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'inari', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Ivalo e Inari: locadores municipais e particulares',
  metaDescription:
    'Alugar em Ivalo, Inari e Saariselkä: mais de 500 apartamentos municipais (Inarin Vuokra-asunnot Oy), locadores particulares e apoio da Kela.',
  breadcrumb: 'Ivalo e Inari',
  hero: {
    eyebrow: 'Município de Inari, 7.244 habitantes',
    title: 'Aluguel em Ivalo e Inari.',
    subtitle:
      'O mercado de aluguel mais ao norte da Finlândia: uma empresa municipal, alguns locadores particulares e a temporada de Saariselkä. Por onde começar.',
  },
  authorNote:
    'Inarin Vuokra-asunnot Oy e os locadores particulares da página de moradia do próprio Município de Inari, população da Statistics Finland, aluguéis por m² da Statistics Finland (região da Lapônia, 3º trimestre de 2026). Verificado em 15 de novembro de 2026.',
  intro: [
    'O município de Inari tem 7.244 habitantes (Statistics Finland, 31 de dezembro de 2025) e, segundo o município, o interesse em morar ali cresceu, por isso ele reuniu em sua página uma lista de locadores (inari.fi).',
    'A empresa municipal Inarin Vuokra-asunnot Oy aluga mais de 500 apartamentos em Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi, de quitinetes a apartamentos familiares. Os locadores particulares da lista do município são Bilto Oy, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg Oy e Uni Kodit (inari.fi).',
    'A Statistics Finland não publica um valor de aluguel separado para Inari, então abaixo aparece o valor regional da Lapônia. A moradia dos trabalhadores sazonais de Saariselkä tem página própria.',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'A empresa municipal e a lista do município.',
      band: true,
      cards: [
        {
          title: 'Inarin Vuokra-asunnot Oy',
          body: 'A empresa municipal de habitação: mais de 500 apartamentos em Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi, perto dos serviços básicos. Vagas e candidaturas no site da própria empresa.',
          href: 'https://inarinvuokra-asunnot.fi/',
          linkLabel: 'inarinvuokra-asunnot.fi',
          event: 'inari_company',
        },
        {
          title: 'Município de Inari: locadores particulares',
          body: 'A página de moradia do município lista a Bilto Oy, a Ivalon vuokra-asunnot, a IvaloCenter, a Rakennusliike Holmberg Oy e a Uni Kodit com os dados de contato, além do grupo de aluguel de Sodankylä–Inari–Utsjoki no Facebook. Mais informações em inari@inari.fi.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: moradia',
          event: 'inari_city',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Anúncios particulares do município de Inari; as casas de Ivalo e Saariselkä aparecem na mesma busca. Há poucos anúncios, então crie um alerta de busca.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/inari',
          linkLabel: 'Oikotie: aluguel em Inari',
          event: 'oikotie',
        },
        {
          title: 'Para os trabalhadores sazonais de Saariselkä',
          body: 'Os empregadores de Saariselkä também alojam a própria equipe, e a empresa municipal tem apartamentos em Saariselkä. Pergunte sobre moradia na entrevista; o quadro completo está na página dos trabalhadores sazonais.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Moradia para trabalhadores sazonais',
          event: 'seasonal_page',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'Aluguéis regionais da Lapônia por m², de julho a setembro de 2026.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Lapônia (região)', 'País inteiro'],
        rows: [
          ['Quitinetes', '17,25', '20,49'],
          ['Apartamentos de dois cômodos', '12,87', '15,07'],
          ['Apartamentos de três cômodos ou mais', '11,08', '13,98'],
          ['Todos os apartamentos', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. Não há valor separado publicado para Inari.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Inari está nos “outros municípios” da Kela.',
      table: {
        caption: 'Custos máximos de moradia em 2026, €/mês, grupo “outros municípios” da Kela',
        head: ['Tamanho da família', 'Custos máximos de moradia'],
        rows: [
          ['1 pessoa', '394'],
          ['2 pessoas', '574'],
          ['3 pessoas', '734'],
          ['4 pessoas', '875'],
          ['Cada pessoa adicional', '+129'],
        ],
        foot: 'Kela, auxílio-moradia geral 2026. O auxílio é de no máximo 70 % dos custos de moradia aceitos; um auxílio abaixo de 15 € não é pago.',
      },
    },
    {
      id: 'contract',
      kicker: 'O contrato',
      h2: 'A caução e a sua devolução.',
      bullets: [
        'A caução é de no máximo três meses de aluguel (Lei de Locação Residencial, seção 8).',
        'A partir de 1º de outubro de 2026, a caução deve ser devolvida, ou a sua retenção explicada por escrito, em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Onde encontro um aluguel em Ivalo?',
      a: 'Na empresa municipal Inarin Vuokra-asunnot Oy, que tem mais de 500 apartamentos em Ivalo, Inari e Saariselkä, ou nos locadores particulares que o município lista (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit). Os portais trazem poucos anúncios.',
    },
    {
      q: 'Há apartamentos para alugar em Saariselkä?',
      a: 'A empresa municipal também tem apartamentos em Saariselkä, e os empregadores alojam os trabalhadores sazonais por conta própria. No mercado aberto, os apartamentos de Saariselkä são na maioria casas de temporada.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras noites',
    h2: 'Antes das chaves.',
    lead: 'A busca do parceiro mostra quartos livres em Ivalo e Saariselkä com os preços de hoje.',
    chips: [
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_ivalo_first_weeks' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'rentals_saariselka_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
