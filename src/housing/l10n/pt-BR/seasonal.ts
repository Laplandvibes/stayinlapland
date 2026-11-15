/**
 * Brasilianportugali (pt-BR) · seasonal. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/seasonal.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'yle2017', 'yle2023', 'yle2026yllas', 'kesko2026', 'yle2026rovaniemi', 'yle2025das',
  'tkVaesto', 'kittila', 'inari', 'sodankyla', 'rakli', 'dvv',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Moradia para trabalhador sazonal na Lapônia: Levi, Ylläs',
  metaDescription:
    'Onde moram os trabalhadores sazonais em Levi, Ylläs, Saariselkä e Rovaniemi: alojamento da empresa, aluguel de temporada ou apartamento municipal.',
  breadcrumb: 'Trabalhadores sazonais',
  hero: {
    eyebrow: 'Trabalho sazonal, inverno e verão',
    title: 'Onde moram os trabalhadores sazonais?',
    subtitle:
      'Um apartamento de funcionários compartilhado, um apartamento de temporada com contrato sazonal ou um aluguel municipal. A falta de moradia nas estações de esqui é real, e é assim que as pessoas lidam com ela.',
  },
  authorNote:
    'Números sobre a falta de moradia das notícias da Yle e da Kesko de 2017–2026, canais de busca das páginas dos próprios municípios. O nosso site irmão laplandwork.com cuida das vagas de trabalho em si.',
  intro: [
    'A área turística de Levi contrata pouco mais de 2.000 trabalhadores sazonais para a temporada de inverno, estimou já em 2017 Kristiina Kukkohovi, diretora-geral da Levin Matkailu Oy, e ela disse que a falta de moradia estava se tornando um grande problema em todas as estações de esqui da Lapônia (Yle, 25 de outubro de 2017). O problema não diminuiu: na primavera de 2023, a Yle noticiou trabalhadores de Levi e Ylläs morando em apartamentos de temporada onde não podiam registrar um endereço.',
    'Em junho de 2026, os donos do K-Market Jounin Kauppa, em Äkäslompolo, decidiram construir três casas em fileira para os próprios funcionários, porque há poucos apartamentos e os aluguéis subiram muito (Yle, 16 de junho de 2026). A loja emprega cerca de 20 trabalhadores sazonais por ano, e mais ou menos metade deles precisa de uma casa alugada (Kesko, 17 de junho de 2026).',
    'Em Rovaniemi, a empresa de recrutamento Career.fi levou cerca de 250 trabalhadores para a Lapônia e os alojou em umas dez localidades diferentes; dois trabalhadores estonianos passaram dois invernos morando com a família do diretor de crescimento depois que o apartamento alugado entrou em reforma das tubulações. Encontrar moradia é “um verdadeiro circo todos os anos” (Yle, 9 de março de 2026).',
  ],
  sections: [
    {
      id: 'three-ways',
      kicker: 'Três jeitos de viver uma temporada',
      h2: 'Moradia para funcionários, aluguel sazonal ou apartamento municipal.',
      cards: [
        {
          title: '1. Moradia para funcionários',
          body:
            'A resposta mais comum nas estações de esqui: o empregador aluga casas em fileira, cabanas e apartamentos de temporada para a equipe durante toda a temporada e desconta o aluguel do seu salário. Em Ruka, um grupo de restaurantes já alugava quatro imóveis de temporada de novembro a maio para os seus funcionários em 2017 (Yle, 25 de outubro de 2017). A vantagem: já há um teto esperando quando você chega. O risco: o apartamento acaba quando o emprego acaba.',
        },
        {
          title: '2. Apartamento de temporada com contrato sazonal',
          body:
            'Um apartamento de 80 m² em estilo alpino em Levi: 750 € por mês de maio a novembro, 2.000 € por semana na alta temporada, 1.650 € por mês o ano todo (Yle, 25 de maio de 2023). Barato no verão, impossível no inverno. Além disso, não é possível obter um endereço oficial em um apartamento de temporada (Yle, 25 de maio de 2023).',
        },
        {
          title: '3. Um aluguel municipal',
          body:
            'Kittilän Vuokratalot Oy, Inarin Vuokra-asunnot Oy (mais de 500 apartamentos em Ivalo, Inari e Saariselkä) e Asentopuulaaki em Sodankylä (cerca de 720 apartamentos). Candidate-se no verão, antes de a temporada começar; pergunte à empresa por quanto tempo uma candidatura continua válida.',
        },
      ],
    },
    {
      id: 'places',
      kicker: 'Lugares',
      h2: 'A mesma falta de moradia, soluções diferentes.',
      band: true,
      cards: [
        {
          title: 'Levi e Kittilä',
          image: { src: '/images/housing-levi-keskusta-card.webp', alt: 'Construções de madeira no centro de Levi em um dia de verão' },
          body:
            'A população de Kittilä cresceu 2,0 por cento em 2025, o segundo maior crescimento entre os municípios da Lapônia, depois dos 2,4 por cento de Pelkosenniemi (Statistics Finland). Os empregadores alugam casas em fileira para a equipe durante toda a temporada, e todos os demais procuram no grupo de moradia de Levi no Facebook. A Kittilän Vuokratalot Oy lista apartamentos tanto no vilarejo de Kittilä quanto em Sirkka, em Levi.',
          href: 'https://kittila.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot',
          linkLabel: 'Kittilän Vuokratalot Oy',
          event: 'kittila',
        },
        {
          title: 'Ylläs: Äkäslompolo e Ylläsjärvi',
          image: { src: '/images/housing-seasonal-card-yllas-tunturi.webp', alt: 'Ylläs vista do outro lado do lago em Äkäslompolo em uma manhã de setembro' },
          body:
            'Os comerciantes estão construindo para si mesmos: as três casas em fileira do Jounin Kauppa devem ficar prontas em novembro–dezembro de 2026, conforme o andamento atual, com quitinetes, apartamentos de dois quartos pensados para dividir e apartamentos familiares de três quartos, todos com sauna (Kesko, 17 de junho de 2026). O primeiro prédio modular do vilarejo estava quase pronto em outubro de 2025 (Yle, 16 de junho de 2026).',
          href: 'https://www.kesko.fi/media/uutiset-ja-tiedotteet/uutiset/2026/lapin-asuntopulaa-ratkomassa-k-market-jounin-kaupan-kauppiaat-rakennuttavat-kolme-rivitaloa-tyontekijoilleen/',
          linkLabel: 'Kesko, 17 de junho de 2026',
          event: 'yllas',
        },
        {
          title: 'Saariselkä e Ivalo',
          image: { src: '/images/housing-saariselka-hirsitalot.webp', alt: 'Casas de toras em Saariselkä em novembro' },
          body:
            'A empresa municipal Inarin Vuokra-asunnot Oy tem apartamentos tanto em Saariselkä quanto em Ivalo, e a página do município lista locadores particulares e o grupo de Sodankylä–Inari–Utsjoki no Facebook. Pergunte na entrevista se o empregador oferece moradia.',
          href: 'https://www.inari.fi/fi/palvelut/asuminen.html',
          linkLabel: 'inari.fi: moradia',
          event: 'inari',
        },
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-lappia-card.webp', alt: 'A Lappia House no centro de Rovaniemi' },
          body:
            'Estudantes, turistas e trabalhadores sazonais disputam as mesmas quitinetes ao mesmo tempo: no verão de 2026, a fundação de moradia estudantil DAS recebeu cerca de 550 candidaturas urgentes, 15 por cento mais que um ano antes, e quase 90 por cento dos candidatos queriam uma quitinete (Yle, 27 de julho de 2026).',
          href: 'https://yle.fi/a/74-20213937',
          linkLabel: 'Yle, 9 de março de 2026: falta de moradia em Rovaniemi',
          event: 'rovaniemi',
        },
        {
          title: 'Ruka e Kuusamo',
          image: { src: '/images/housing-ruka-kyla-card.webp', alt: 'A praça e a torre de observação vermelha no vilarejo de pedestres de Ruka, no verão' },
          body:
            'Ruka fica na Ostrobótnia do Norte, não na Lapônia, mas a temporada e a falta de moradia são as mesmas. Em 2017, o grupo de restaurantes de Ruka passou de pouco mais de 20 funcionários fixos para mais de 80 no inverno e alugou quatro imóveis de temporada para a equipe de novembro a maio (Yle, 25 de outubro de 2017).',
          href: 'https://yle.fi/a/3-9895965',
          linkLabel: 'Yle, 25 de outubro de 2017',
          event: 'ruka',
        },
      ],
    },
    {
      id: 'summer',
      kicker: 'A temporada de verão',
      h2: 'O verão não é tranquilo.',
      paras: [
        'O trabalho de verão na Lapônia é uma temporada à parte: o turismo de Rovaniemi o ano inteiro, as áreas de trilhas, os canteiros de obras e o pico de verão do comércio. No verão, os apartamentos de temporada são alugados por mês (750 € por mês de maio a novembro no exemplo de Levi, Yle, 25 de maio de 2023).',
        'Em Rovaniemi, o diretor de crescimento de uma empresa de recrutamento espera acomodar trabalhadores sazonais sob o mesmo teto no inverno e operários da construção e equipes esportivas no verão (Yle, 9 de março de 2026). Para quem chega no verão, é uma boa notícia: a moradia para funcionários construída para o inverno fica vazia no verão.',
      ],
      image: {
        src: '/images/housing-jouninkauppa.webp',
        alt: 'A fachada da loja K-Market Jounin Kauppa em Äkäslompolo, no verão',
        caption:
          'K-Market Jounin Kauppa, Äkäslompolo, julho de 2026. Os donos estão construindo três casas em fileira para os funcionários (Kesko, 17 de junho de 2026). Foto: LaplandVibes.',
        ratio: '4/3',
      },
    },
    {
      id: 'ask',
      kicker: 'Antes de assinar',
      h2: 'Pergunte isto ao seu empregador.',
      bullets: [
        'O apartamento faz parte do contrato de trabalho ou é um contrato de locação separado? Quanto é descontado do seu salário, e isso aparece no holerite?',
        'Quarto só seu ou compartilhado? Quantas pessoas moram no apartamento, e a sua porta tem tranca?',
        'O que acontece com o contrato de locação se o emprego terminar antes da temporada, ou continuar depois dela?',
        'Você pode registrar o seu endereço ali? A comunicação de mudança de endereço à DVV deve ser feita em até uma semana após a mudança, e um apartamento de temporada muitas vezes não se qualifica.',
        'Quem paga a eletricidade, a água e a internet?',
        'Como chegar ao trabalho sem carro: distância, ônibus, ônibus de esqui?',
        'Há caução, e quando ela é devolvida? Segundo a lei: a partir de 1º de outubro de 2026, em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'O empregador oferece moradia para trabalhadores sazonais em Levi?',
      a: 'Com frequência, mas nem sempre e não de graça. Os empregadores alugam casas em fileira e apartamentos de temporada para a equipe durante toda a temporada e descontam o aluguel do seu salário. Peça a oferta por escrito e confira o que acontece com o apartamento se o emprego terminar.',
    },
    {
      q: 'Quando devo começar a procurar moradia para a temporada de inverno?',
      a: 'No verão. Candidate-se às empresas municipais de habitação (Kittilä, Inari, Sodankylä) antes da temporada; no exemplo de Levi, um apartamento de temporada só podia ser alugado por mês de maio a novembro (Yle, 25 de maio de 2023).',
    },
    {
      q: 'Posso morar em um apartamento de temporada durante toda a temporada?',
      a: 'Sim, se o proprietário oferecer um contrato sazonal, mas não é possível obter um endereço oficial em um apartamento de temporada (Yle, 25 de maio de 2023).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras noites',
    h2: 'Antes de receber as chaves.',
    lead:
      'A temporada muitas vezes começa antes de o apartamento ficar livre. A busca do nosso parceiro mostra quartos e apartamentos disponíveis com os preços de hoje.',
    chips: [
      { label: 'Levi', destination: 'Levi', sid: 'seasonal_first_nights_levi' },
      { label: 'Ylläs', destination: 'Äkäslompolo', sid: 'seasonal_first_nights_yllas' },
      { label: 'Saariselkä', destination: 'Saariselkä', sid: 'seasonal_first_nights_saariselka' },
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'seasonal_first_nights_rovaniemi' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
