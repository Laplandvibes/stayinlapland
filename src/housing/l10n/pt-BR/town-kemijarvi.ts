/**
 * Brasilianportugali (pt-BR) · town-kemijarvi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemijarvi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio', 'kemijarviTietoa',
  'kemijarviToihin', 'tkVuokrat', 'tkVuokratPostinumero', 'kela', 'tkAvainluvut', 'osrm', 'redu', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Kemijärvi: os 560 apartamentos da cidade',
  metaDescription:
    'Alugar em Kemijärvi: os 560 apartamentos da cidade, candidatura on-line, reajustes de 2026, casas de Vuostimo perto de Pyhä e auxílio-moradia da Kela.',
  breadcrumb: 'Kemijärvi',
  hero: {
    eyebrow: 'Kemijärvi, 6.919 habitantes',
    title: 'Aluguel em Kemijärvi.',
    subtitle:
      'A cidade mais ao norte da Finlândia, onde o município possui 560 apartamentos de aluguel e alguns deles estão vazios. Onde se candidatar e o que saber antes de se mudar.',
  },
  authorNote:
    'População da Statistics Finland, número de apartamentos e como se candidatar nas páginas da Cidade de Kemijärvi, reajustes de aluguel e metas de ocupação do orçamento de 2026 da cidade. Verificado em 15 de novembro de 2026.',
  intro: [
    'Kemijärvi tinha 6.919 habitantes no fim de 2025, 35 a menos do que um ano antes (Statistics Finland). A cidade se descreve como a mais ao norte da Finlândia e diz que os serviços do centro ficam a uma distância que se faz a pé (kemijarvi.fi).',
    'As duas empresas imobiliárias da cidade, Kemijärven Vuokratalot e Kemijärven Töveli, possuem 560 apartamentos de aluguel (kemijarvi.fi). O orçamento da cidade trata como meta realista ter de 80 a 85 por cento desses apartamentos alugados, então há apartamentos vazios.',
    'Os aluguéis estão subindo: a Kemijärven Vuokratalot reajustou os seus aluguéis em 4,5 por cento em 1º de fevereiro de 2026 e a Töveli em 5 por cento em 1º de julho de 2026. Os mesmos reajustes estão previstos no plano para 2027 e 2028 (orçamento de 2026).',
  ],
  sections: [
    {
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'Primeiro as empresas da cidade, depois os portais.',
      band: true,
      cards: [
        {
          title: 'A habitação de aluguel da cidade',
          body: 'Os 560 apartamentos da cidade ficam no centro, em Särkikangas, Sipovaara, Isokylä, Halosenranta e Vuostimo. Candidate-se on-line ou em formulário de papel no Sortteeri (Vapaudenkatu 8). A candidatura vale por quatro meses e pode ser renovada.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/asunnon-hakeminen/',
          linkLabel: 'kemijarvi.fi: como se candidatar a um apartamento',
          event: 'kemijarvi_city',
        },
        {
          title: 'Vuostimo, a 14 km de Pyhä',
          body: 'Casas em fileira de 1987 pertencentes à cidade, em Vuostimo, cerca de 35 quilômetros ao norte do centro. A estação de esqui de Pyhätunturi fica a 14 quilômetros, o que faz destes os apartamentos de aluguel da cidade mais próximos de Pyhä.',
          href: 'https://kemijarvi.fi/asuminen-ja-ymparisto/asuminen/kemijarven-kaupungin-vuokratalot/vuokratalokohteet/vuostimo/',
          linkLabel: 'kemijarvi.fi: Vuostimo',
          event: 'kemijarvi_vuostimo',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Anúncios particulares e de imobiliárias do município de Kemijärvi. As páginas de moradia da cidade não listam locadores particulares, então os apartamentos deles são encontrados nos portais.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemij%C3%A4rvi',
          linkLabel: 'Oikotie: aluguel em Kemijärvi',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'As empresas da cidade não publicam os seus aluguéis.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Lapônia (região)', 'País inteiro'],
        rows: [
          ['Quitinetes', '17,25', '20,49'],
          ['Apartamentos de dois cômodos', '12,87', '15,07'],
          ['Apartamentos de três cômodos ou mais', '11,08', '13,98'],
          ['Todos os apartamentos', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. Não há valor separado publicado para Kemijärvi, e o valor regional inclui Rovaniemi, que é mais cara.',
      },
      paras: [
        '<strong>O valor próprio de Kemijärvi é de 2022.</strong> Na área do código postal do centro, 98100, os quitinetes do mercado livre custavam em média 12,15 € por m² e os apartamentos de dois cômodos 9,10 € por m² em janeiro–março de 2022. Todos os trimestres desde então foram suprimidos: a Statistics Finland não publica o valor de uma área de código postal quando há poucas observações (tabela 13eb).',
        'Os aluguéis das empresas da cidade não estão on-line. Pergunte o valor do aluguel à secretária de moradia antes de aceitar uma oferta, e lembre-se de que os aluguéis subiram em 2026: 4,5 por cento na Vuokratalot e 5 por cento na Töveli.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Kemijärvi está nos “outros municípios” da Kela.',
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
      id: 'work',
      kicker: 'Trabalho e conexões',
      h2: 'Combine o emprego antes de se mudar.',
      bullets: [
        'Segundo a cidade, os seus principais empregadores, além da própria cidade, são o Keitele Group, o Festivo Porkka Group e a central de atendimento da Kela, além de empresas do comércio, de serviços e do turismo (orçamento de 2026).',
        'Os desempregados representavam 15,6 por cento da força de trabalho em 2024, contra 11,7 por cento na Finlândia como um todo (Statistics Finland).',
        'Suomutunturi fica a 46 km do centro e Pyhätunturi a 50 km (OpenStreetMap). Suomu fica dentro de Kemijärvi; Pyhä pertence ao município vizinho de Pelkosenniemi.',
        'O aeroporto de Rovaniemi fica a 80 km (OpenStreetMap), e a cidade diz que há uma ligação ferroviária direta até Helsinque (kemijarvi.fi).',
      ],
    },
    {
      id: 'contract',
      kicker: 'O contrato',
      h2: 'Duas seções da lei que vale conhecer.',
      bullets: [
        'A caução é de no máximo três meses de aluguel (Lei de Locação Residencial, seção 8).',
        'A partir de 1º de outubro de 2026, a caução deve ser devolvida, ou a sua retenção explicada por escrito, em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Como me candidato a um apartamento da cidade em Kemijärvi?',
      a: 'Pela candidatura on-line no site da cidade, ou em formulário de papel no Sortteeri (Vapaudenkatu 8). A candidatura vale por quatro meses e pode ser renovada por mais quatro. O crédito é consultado, e a candidatura só é processada quando os anexos chegam. As reuniões de seleção de inquilinos costumam ser realizadas a cada duas quartas-feiras (kemijarvi.fi).',
    },
    {
      q: 'Há apartamentos de aluguel livres em Kemijärvi?',
      a: 'Muito provavelmente. O orçamento da cidade trata como meta realista ter de 80 a 85 por cento dos apartamentos das empresas alugados (orçamento de 2026). Pergunte à secretária de moradia quais apartamentos estão livres.',
    },
    {
      q: 'Quanto custa um apartamento de aluguel em Kemijärvi?',
      a: 'Não há média atual publicada. O valor mais recente da área do código postal do centro é do início de 2022: quitinetes a 12,15 € por m² e apartamentos de dois cômodos a 9,10 € por m². A média da Lapônia foi de 13,14 € por m² em julho–setembro de 2026, e inclui Rovaniemi, que é mais cara (Statistics Finland).',
    },
    {
      q: 'Há moradia estudantil em Kemijärvi?',
      a: 'O Centro de Educação da Lapônia REDU tem um alojamento estudantil em Kemijärvi. A moradia é gratuita para estudantes ainda na educação obrigatória, e as vagas que sobram são alugadas a outros estudantes pelo preço de tabela (redu.fi).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras noites',
    h2: 'Visitas pessoalmente.',
    lead: 'A busca do parceiro mostra quartos e apartamentos livres em Kemijärvi e em Pyhä com os preços de hoje.',
    chips: [
      { label: 'Kemijärvi', destination: 'Kemijärvi', sid: 'rentals_kemijarvi_first_weeks' },
      { label: 'Pyhä', destination: 'Pyhä', sid: 'rentals_pyha_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
