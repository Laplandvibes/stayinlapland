/**
 * Brasilianportugali (pt-BR) · town-sodankyla. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/sodankyla.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVaesto', 'sodankyla', 'asentopuulaaki', 'asentopuulaakiHaku', 'asentopuulaakiVapaat', 'asentopuulaakiMuutto',
  'sodankyla2025', 'yle2025sodankyla', 'tkVuokratPostinumero', 'sodankylaOpintolaina', 'yle2026opintolaina', 'kela',
  'maavoimat', 'yle2026kasarmi', 'yle2026kevitsa', 'angloSakatti', 'yle2026sakatti', 'sodankylaMuuttajalle', 'fmi',
  'osrm', 'redu', 'sodankylaAsuntola', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Sodankylä: 720 apartamentos municipais e preços',
  metaDescription:
    'Alugar em Sodankylä: cerca de 720 apartamentos municipais da Asentopuulaaki Oy, aluguel de cerca de 7,40–18 € por m², candidatura on-line e apoio da Kela.',
  breadcrumb: 'Sodankylä',
  hero: {
    eyebrow: 'Sodankylä, 8.095 habitantes',
    title: 'Aluguel em Sodankylä.',
    subtitle:
      'Um quartel, uma mina e uma comunidade científica em um só município, onde a longa falta de moradia do vilarejo principal diminuiu com a construção de prédios novos. Onde se candidatar e quanto custa.',
  },
  authorNote:
    'População da Statistics Finland, número de apartamentos da página do município, aluguéis, condições e apartamentos livres das páginas da própria Asentopuulaaki Oy, empregos do Exército Finlandês, da Yle e das empresas. Verificado em 15 de novembro de 2026.',
  intro: [
    'Sodankylä tinha 8.095 habitantes no fim de 2025 (Statistics Finland). O município possui cerca de 720 apartamentos de aluguel, alugados pela sua subsidiária Asentopuulaaki Oy (sodankyla.fi). Quase todos os apartamentos da lista da empresa ficam no vilarejo principal; os demais ficam em Aska, Orajärvi, Riipi, Torvinen e Vaalajärvi.',
    'Segundo o município, a falta de moradia que castigou Sodankylä por anos diminuiu: no verão de 2025, o Käpyriihi, com 36 apartamentos novos, foi concluído junto ao rio Jeesiöjoki (Município de Sodankylä, 2 de julho de 2025). A busca de apartamentos da empresa lista os apartamentos que estão livres ou ficarão livres a cada momento, com o aluguel e a data em que ficam livres (Asentopuulaaki).',
    'A falta de moradia não acabou por completo. Em setembro de 2025, o diretor técnico do município disse à Yle que ela ainda dificulta trazer trabalhadores para Sodankylä, embora haja empregos (Yle, 11 de setembro de 2025).',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'Cerca de 10 € por m² em um prédio antigo, 18 € em um novo.',
      table: {
        caption: 'Aluguéis da Asentopuulaaki Oy, €/m²/mês, lista de imóveis de 15 de novembro de 2026',
        head: ['Prédios', '€/m²/mês'],
        rows: [
          ['Käpyriihi, concluído em 2025', '18,00'],
          ['Peuranpalas 2013 e Kehtoranta 2015', '12,80–13,00'],
          ['Casas em fileira, prédios com galeria e prédios de apartamentos de 1977–1998', '8,80–12,50'],
          ['Prédios de apartamentos no centro, 1968–1970', '10,20'],
          ['Casas em fileira nos vilarejos afastados', '7,40–10,90'],
        ],
        foot: 'Calculado a partir do aluguel de cada apartamento da lista de imóveis da Asentopuulaaki Oy, 15 de novembro de 2026: 42 prédios, 597 apartamentos. A caução é de um mês de aluguel, a água é cobrada antecipadamente e o inquilino paga a eletricidade doméstica. Nas casas dos vilarejos com aquecimento elétrico, o inquilino também paga o aquecimento, que a empresa estima em cerca de 100 € por mês no verão e 200 € no inverno.',
      },
      paras: [
        '<strong>Exemplos:</strong> um apartamento de dois cômodos de 55 m² em um prédio central, 632 € por mês; um apartamento de dois cômodos de 42 m² no Käpyriihi, 756 €; uma casa em fileira de três cômodos de 80 m² em Kaanaanmaa, 800 €.',
        '<strong>Aluguéis particulares:</strong> os apartamentos de dois cômodos do mercado livre custaram em média 11,73 € por m² na área do código postal do centro de Sodankylä em outubro–dezembro de 2025 (Statistics Finland, tabela 13eb). Não há valor municipal mais recente: Sodankylä não está na tabela de aluguéis atual da Statistics Finland.',
      ],
    },
    {
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'Primeiro a empresa municipal, depois os portais.',
      band: true,
      cards: [
        {
          title: 'Asentopuulaaki Oy',
          body: 'A subsidiária municipal que aluga os cerca de 720 apartamentos do município. Você se candidata on-line e anexa um comprovante de renda. O histórico de crédito é consultado, e inadimplências pesam contra você.',
          href: 'https://www.asentopuulaaki.fi/asunnon-hakeminen/',
          linkLabel: 'asentopuulaaki.fi: como se candidatar a um apartamento',
          event: 'asentopuulaaki',
        },
        {
          title: 'Apartamentos livres',
          body: 'A busca de apartamentos da empresa mostra os apartamentos livres e os que ficarão livres em breve, com o aluguel e a data em que ficam livres. A lista é atualizada no site da própria empresa, então confira-a antes de se candidatar.',
          href: 'https://www.asentopuulaaki.fi/asuntohaku/',
          linkLabel: 'asentopuulaaki.fi: busca de apartamentos',
          event: 'asentopuulaaki_vapaat',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Anúncios particulares do município de Sodankylä. A página de moradia do município não cita nenhum locador além da própria empresa, então os apartamentos particulares são encontrados nos portais.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/sodankyl%C3%A4',
          linkLabel: 'Oikotie: aluguel em Sodankylä',
          event: 'oikotie',
        },
      ],
    },
    {
      id: 'student-loan',
      kicker: 'Para quem está chegando',
      h2: 'Até 5.800 € para recém-formados.',
      paras: [
        'Sodankylä, Inari e Utsjoki compensam os empréstimos estudantis de recém-formados que se mudam para lá e trabalham pelo menos 50 por cento de uma jornada integral ou como empreendedores. A compensação é de no máximo 5.800 €, paga retroativamente ao longo de no máximo três anos em períodos de 12 meses (Município de Sodankylä).',
        'Ela cobre empréstimos estudantis de uma qualificação profissional de ensino médio ou de um curso superior em instituto politécnico ou universidade, e você deve ter se formado nos dois anos anteriores. As candidaturas são processadas pela primeira vez em janeiro de 2027 e, segundo a Yle, o formulário de candidatura abre em 1º de dezembro de 2026 (Yle, 1º de setembro de 2026).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Sodankylä está nos “outros municípios” da Kela.',
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
      kicker: 'Trabalho',
      h2: 'O quartel está crescendo; a mina fecha em 2034.',
      bullets: [
        'A Brigada de Caçadores emprega cerca de 400 pessoas e treina cerca de 2.200 conscritos por ano (Exército Finlandês). Um alojamento para quase 700 conscritos está sendo construído no quartel de Sodankylä e deve ficar pronto no início de 2028 (Yle, 2 de abril de 2026).',
        'A mina Kevitsa, da Boliden, anunciou 77 cortes de empregos em maio de 2026, e a mina deve fechar em 2034 (Yle, 26 de maio de 2026).',
        'A mina Sakatti, planejada pela Anglo American, deve entrar em operação por volta de 2032, mas o projeto ainda está em fase de licenciamento, e o distrito da Lapônia da Associação Finlandesa para a Conservação da Natureza recorreu da decisão sobre Sakatti na Justiça (Anglo American; Yle, 18 de junho de 2026).',
        'O município também cita a comunidade científica de Tähtelä e a estação de esqui de Luosto (sodankyla.fi). Luosto fica a 38 km do vilarejo principal (OpenStreetMap).',
      ],
    },
    {
      id: 'everyday',
      kicker: 'O dia a dia',
      h2: 'Aqui a noite polar dura quatro dias.',
      bullets: [
        'Em Sodankylä, a noite polar dura apenas quatro dias, pouco antes do Natal (Instituto Meteorológico da Finlândia).',
        'O aeroporto mais próximo é o de Kittilä, a 93 km, e o centro de Rovaniemi fica a 130 km (OpenStreetMap).',
        'Para estudantes: a REDU tem um alojamento estudantil em Sodankylä, e em março de 2026 o município anunciou um alojamento para estudantes do ensino médio e da educação de adultos em apartamentos grandes da Asentopuulaaki (redu.fi; Município de Sodankylä, 5 de março de 2026).',
      ],
    },
    {
      id: 'contract',
      kicker: 'O contrato',
      h2: 'Um mês de aviso prévio.',
      bullets: [
        'Na Asentopuulaaki, o prazo de aviso prévio é de um mês corrido, e a caução é devolvida cerca de duas semanas depois de você sair (Asentopuulaaki).',
        'A caução é de no máximo três meses de aluguel (Lei de Locação Residencial, artigo 8).',
        'A partir de 1º de outubro de 2026, a caução deve ser devolvida, ou a sua retenção explicada por escrito, em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Como me candidato a um apartamento municipal em Sodankylä?',
      a: 'Pela candidatura on-line da Asentopuulaaki Oy, anexando um comprovante de renda, como um holerite. O histórico de crédito é consultado na Suomen Asiakastieto, e inadimplências pesam contra você (Asentopuulaaki).',
    },
    {
      q: 'Quanto custa um apartamento de aluguel em Sodankylä?',
      a: 'Nos prédios antigos da empresa municipal, cerca de 10 € por m²; nas casas em fileira e nos prédios com galeria, em geral 10–12,50 €; e no Käpyriihi, concluído em 2025, 18 €, o que dá 756 € por mês por um apartamento de dois cômodos de 42 m² (Asentopuulaaki, 15 de novembro de 2026). Os apartamentos de dois cômodos do mercado livre no centro custaram em média 11,73 € por m² em outubro–dezembro de 2025 (Statistics Finland).',
    },
    {
      q: 'Há falta de moradia em Sodankylä?',
      a: 'Houve por anos. Segundo o município, ela diminuiu com a conclusão de prédios novos (2 de julho de 2025), e a busca de apartamentos da empresa municipal lista os apartamentos livres e os que ficarão livres em breve (Asentopuulaaki).',
    },
    {
      q: 'Quem pode receber a compensação do empréstimo estudantil?',
      a: 'Um recém-formado que se muda para Sodankylä, Inari ou Utsjoki e trabalha pelo menos 50 por cento de uma jornada integral ou como empreendedor. A compensação é de no máximo 5.800 € ao longo de três anos, e as candidaturas são processadas pela primeira vez em janeiro de 2027 (Município de Sodankylä).',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras noites',
    h2: 'Visitas pessoalmente.',
    lead: 'A busca do nosso parceiro mostra quartos e apartamentos livres em Sodankylä e em Luosto com os preços de hoje.',
    chips: [
      { label: 'Sodankylä', destination: 'Sodankylä', sid: 'rentals_sodankyla_first_weeks' },
      { label: 'Luosto', destination: 'Luosto', sid: 'rentals_luosto_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
