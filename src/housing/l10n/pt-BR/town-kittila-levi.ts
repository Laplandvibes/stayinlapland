/**
 * Brasilianportugali (pt-BR) · town-kittila-levi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kittila-levi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kittila', 'yle2023', 'yle2017', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Kittilä e Levi: apartamentos municipais e sazonais',
  metaDescription:
    'Alugar em Kittilä e Levi: a empresa municipal Kittilän Vuokratalot Oy, aluguel de temporada, moradia para trabalhadores sazonais e apoio da Kela.',
  breadcrumb: 'Kittilä e Levi',
  hero: {
    eyebrow: 'Kittilä, 6.973 habitantes',
    title: 'Aluguel em Kittilä e Levi.',
    subtitle:
      'Um dos municípios que mais crescem na Lapônia e a sua estação de esqui, onde o mesmo apartamento custa um aluguel mensal no verão e uma diária semanal no inverno. Onde se candidatar e quando.',
  },
  authorNote:
    'População e crescimento da Statistics Finland, Kittilän Vuokratalot Oy nas páginas do município e da própria empresa, preços sazonais de Levi da Yle, 25 de maio de 2023. Verificado em 15 de novembro de 2026.',
  intro: [
    'Kittilä tinha 6.973 habitantes no fim de 2025 e cresceu 2,0 por cento em um ano, o segundo maior crescimento entre os municípios da Lapônia: só Pelkosenniemi cresceu mais, 2,4 por cento (Statistics Finland). O motor é Levi: em 2017, a Levin Matkailu Oy estimou que a área da estação de esqui contrataria pouco mais de 2.000 trabalhadores sazonais para a temporada de inverno (Yle, 25 de outubro de 2017).',
    'O mercado de aluguel de Levi acompanha a temporada: um apartamento de 80 m² em casa de estilo alpino perto do centro custava 750 € por mês de maio a novembro, 2.000 € por semana na alta temporada e 1.650 € por mês o ano todo (Yle, 25 de maio de 2023). Um apartamento de temporada também pode não conseguir um endereço oficial.',
    'Um aluguel permanente é mais provável no vilarejo de Kittilä do que no centro de Levi. Os apartamentos do município são alugados pela Kittilän Vuokratalot Oy, e a candidatura é feita eletronicamente no site da empresa (kittila.fi, Kittilän Vuokratalot).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'A empresa municipal, os portais e o grupo de Levi.',
      band: true,
      cards: [
        {
          title: 'Kittilän Vuokratalot Oy',
          body: 'Aluga os apartamentos do próprio município. O escritório fica no térreo da prefeitura (Valtatie 15, 99100 Kittilä). A empresa processa apenas candidaturas eletrônicas feitas pelo seu site, com os anexos exigidos. As páginas dela não dizem por quanto tempo uma candidatura continua válida, então pergunte à empresa.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'kittila.fi: habitação de aluguel',
          event: 'kittila_city',
        },
        {
          title: 'Oikotie, Vuokraovi e TA-Asunnot',
          body: 'Anúncios particulares e de imobiliárias do município de Kittilä; as casas de Levi aparecem na mesma busca. A TA-Asunnot tem apartamentos de aluguel próprios vagos em Kittilä.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kittil%C3%A4',
          linkLabel: 'Oikotie: aluguel em Kittilä',
          event: 'oikotie',
        },
        {
          title: 'Moradia de funcionários',
          body: 'Os empregadores da estação de esqui alugam casas em fileira e apartamentos de temporada para a equipe durante toda a temporada e descontam o aluguel do seu salário. Pergunte por escrito sobre moradia junto com a oferta de emprego. O quadro completo está na página dos trabalhadores sazonais.',
          href: '/seasonal-worker-housing',
          linkLabel: 'Moradia para trabalhadores sazonais',
          event: 'seasonal_page',
        },
        {
          title: 'O grupo de moradia de Levi no Facebook',
          body: 'O canal mais rápido no vilarejo do monte e onde os trabalhadores sazonais muitas vezes encontram o seu apartamento. Ninguém garante os anúncios: nunca pague uma caução antes de uma visita, e peça o contrato por escrito.',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'O valor regional e a exceção de Levi.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Lapônia (região)', 'País inteiro'],
        rows: [
          ['Quitinetes', '17,25', '20,49'],
          ['Apartamentos de dois cômodos', '12,87', '15,07'],
          ['Apartamentos de três cômodos ou mais', '11,08', '13,98'],
          ['Todos os apartamentos', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. Não há valor separado publicado para Kittilä, e os aluguéis de temporada de Levi não entram nas estatísticas.',
      },
      paras: [
        '<strong>O exemplo de Levi (Yle, 25 de maio de 2023):</strong> um apartamento de 80 m² em casa de estilo alpino a 750 € por mês de maio a novembro = 9,38 € por m², 2.000 € por semana na alta temporada, 1.650 € por mês o ano todo = 20,63 € por m². O mesmo apartamento é mais barato do que a média regional no verão e mais caro do que o preço nacional de um quitinete o ano todo.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Kittilä está nos “outros municípios” da Kela.',
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
        foot: 'Kela, auxílio-moradia geral 2026. O auxílio é de no máximo 70 % dos custos de moradia aceitos. Em um apartamento de temporada sem endereço registrado, as condições não são cumpridas.',
      },
    },
    {
      id: 'when',
      kicker: 'Quando se candidatar',
      h2: 'No verão, antes de começarem as diárias semanais.',
      bullets: [
        'Os aluguéis mensais de apartamentos de temporada só existem de maio a novembro, e na alta temporada o preço é uma diária semanal (Yle, 25 de maio de 2023). Para a temporada de inverno, encontre o apartamento no verão.',
        'Envie a candidatura à empresa municipal antes da temporada e pergunte à empresa por quanto tempo ela continua válida.',
        'A caução é de no máximo três meses de aluguel (Lei de Locação Residencial, seção 8) e, a partir de 1º de outubro de 2026, é devolvida em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Onde encontro um aluguel de inverno em Levi?',
      a: 'Muito provavelmente com o seu empregador: as empresas da estação de esqui alugam casas em fileira e apartamentos de temporada para a equipe durante toda a temporada. No mercado aberto, os apartamentos de Levi são alugados por semana no inverno (Yle, 25 de maio de 2023), então o aluguel mensal é possível principalmente de maio a novembro. A empresa municipal tem apartamentos tanto no vilarejo de Kittilä quanto em Sirkka, em Levi (Kittilän Vuokratalot).',
    },
    {
      q: 'Como me candidato a um apartamento municipal em Kittilä?',
      a: 'Pela candidatura eletrônica da Kittilän Vuokratalot Oy, no site da empresa. Candidaturas incompletas, sem os anexos exigidos, não são processadas. O escritório fica no térreo da prefeitura, Valtatie 15 (kittila.fi, Kittilän Vuokratalot).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras noites',
    h2: 'Antes de o apartamento ficar livre.',
    lead: 'A busca do parceiro mostra quartos e apartamentos livres em Levi e em Kittilä com os preços de hoje.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'rentals_levi_first_weeks' },
      { label: 'Kittilä', destination: 'Kittilä', sid: 'rentals_kittila_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
