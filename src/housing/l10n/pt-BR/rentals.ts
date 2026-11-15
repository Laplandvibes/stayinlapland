/**
 * Brasilianportugali (pt-BR) · rentals. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/rentals.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'kela', 'ahvl', 'rakli', 'kuluttajaliittoVuokra', 'yle2025das', 'yle2023', 'rovaniemi', 'das',
  'kittila', 'kemi', 'keminmaa', 'tornio', 'kemijarvi', 'kemijarviHaku', 'kemijarviVuostimo', 'kemijarviTalousarvio',
  'sodankyla', 'asentopuulaaki', 'asentopuulaakiVapaat', 'inari',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Alugar na Lapônia: Rovaniemi, Levi, Kemi–Tornio',
  metaDescription:
    'Aluguel de longa duração na Lapônia finlandesa, de Rovaniemi e Kemi–Tornio a Levi e Inari: preço por m² (Statistics Finland), caução e auxílio-moradia da Kela.',
  breadcrumb: 'Aluguel',
  hero: {
    eyebrow: 'Alugar na Lapônia',
    title: 'Alugar uma casa na Lapônia.',
    subtitle:
      'Onde encontrar um apartamento para alugar, quanto custa e quanto a Kela cobre. Cidade por cidade.',
  },
  authorNote:
    'Aluguéis por m²: estatísticas de aluguel da Statistics Finland, imóveis de aluguel no mercado livre, de julho a setembro de 2026. Empresas municipais de habitação verificadas nos sites dos próprios municípios e empresas em 15 de novembro de 2026.',
  intro: [
    'Na Lapônia, um apartamento para alugar vem de uma de três fontes: a empresa municipal de habitação, os portais nacionais ou os grupos locais. Comece pelo município. As empresas municipais têm centenas de apartamentos, por exemplo pouco mais de 300 em Keminmaa, cerca de 720 em Sodankylä, 560 em Kemijärvi e mais de 500 em Inari, e você pode se candidatar mesmo quando não há nada livre no momento.',
    'O preço depende de onde você se muda. Em Rovaniemi, um quitinete de 30 m² custa em média cerca de 560 € por mês; no resto da Lapônia, menos. Nos vilarejos dos montes, o aluguel acompanha a temporada, então, para o inverno, pergunte primeiro ao seu empregador sobre moradia para funcionários.',
  ],
  sections: [
    {
      id: 'towns',
      kicker: 'Onde estão os apartamentos',
      h2: 'Cidade por cidade.',
      lead: 'Cada cidade tem a sua página: a empresa municipal de habitação e como se candidatar, o nível de aluguel e o teto da Kela. A moradia para funcionários em Ylläs está na página dos trabalhadores sazonais.',
      band: true,
      cards: [
        {
          title: 'Rovaniemi',
          image: { src: '/images/housing-rovaniemi-card-talvikatu.webp', alt: 'Prédios de apartamentos e pessoas caminhando em uma rua com neve em Rovaniemi, em janeiro' },
          body:
            'A página da própria cidade indica os locadores KAS asunnot, M2-Kodit, Tarveasunnot, Avara e Lumo, e os serviços de busca Oikotie, Vuokraovi e Qasa. Estudantes se candidatam à Fundação Domus Arctica DAS (cerca de 1.700 apartamentos, 700 deles quitinetes); menores de 30 anos, à NAL Rovaniemi. A candidatura à DAS vale por três meses, e os novos estudantes têm prioridade em agosto e setembro.',
          href: '/rentals/rovaniemi',
          linkLabel: 'Aluguel em Rovaniemi',
        },
        {
          title: 'Kemi, Keminmaa e Tornio',
          image: { src: '/images/housing-kemi-card-kaupungintalo.webp', alt: 'A prefeitura de Kemi em uma manhã de janeiro com neve' },
          body:
            'Os apartamentos municipais de Kemi são administrados pela Kiinteistö Oy Itätuuli, a maior locadora residencial da cidade, com imóveis a até cinco quilômetros do centro. A Keminmaan Vuokra-asunnot Oy tem pouco mais de 300 apartamentos, e cada empresa tem a sua própria candidatura on-line. Em Tornio, os apartamentos da cidade são administrados pela Tornion Krunni Oy (Tornion Vuokra-asunnot Oy).',
          href: '/rentals/kemi-tornio',
          linkLabel: 'Aluguel em Kemi, Tornio e Keminmaa',
        },
        {
          title: 'Kemijärvi',
          image: { src: '/images/housing-kemijarvi-card-kerrostalo.webp', alt: 'Um prédio de apartamentos e um velho pinheiro em Kemijärvi em uma noite de julho' },
          body:
            'As duas empresas imobiliárias da cidade têm 560 apartamentos de aluguel, e o orçamento prevê que 80–85 por cento deles estejam alugados, então há apartamentos vazios. A candidatura vale por quatro meses. As casas em fileira de Vuostimo ficam a 14 km de Pyhätunturi.',
          href: '/rentals/kemijarvi',
          linkLabel: 'Aluguel em Kemijärvi',
        },
        {
          title: 'Sodankylä',
          image: { src: '/images/housing-sodankyla-jaamerentie.webp', alt: 'Jäämerentie, a rua principal do vilarejo de Sodankylä, em setembro' },
          body:
            'A Asentopuulaaki Oy aluga os cerca de 720 apartamentos do município, e a busca de apartamentos da empresa mostra os que estão livres ou ficarão livres a cada momento. Os prédios mais antigos são alugados por cerca de 9–12,50 € por m², e o Käpyriihi, concluído em 2025, por 18 €.',
          href: '/rentals/sodankyla',
          linkLabel: 'Aluguel em Sodankylä',
        },
        {
          title: 'Kittilä e Levi',
          image: { src: '/images/housing-kittila-levi-card-kyla.webp', alt: 'O vilarejo de Levi visto do alto do monte Levi em novembro, com um lago e montes ao fundo' },
          body:
            'A Kittilän Vuokratalot Oy aluga os apartamentos do próprio município; o escritório fica no térreo da prefeitura (Valtatie 15). A candidatura é feita on-line, no site da empresa. Os apartamentos de temporada de Levi passam a ter aluguel mensal principalmente de maio a novembro; no inverno, o mesmo apartamento é alugado por semana.',
          href: '/rentals/kittila-levi',
          linkLabel: 'Aluguel em Kittilä e Levi',
        },
        {
          title: 'Inari, Ivalo e Saariselkä',
          image: { src: '/images/housing-ivalo-joki.webp', alt: 'Ivalo vista do outro lado do rio Ivalo em uma noite de verão' },
          body:
            'A Inarin Vuokra-asunnot Oy tem mais de 500 apartamentos em Ivalo, Inari, Saariselkä, Nellim e Sevettijärvi. A página do município também lista os locadores particulares (Bilto, Ivalon vuokra-asunnot, IvaloCenter, Rakennusliike Holmberg, Uni Kodit) e o grupo de aluguel de Sodankylä–Inari–Utsjoki no Facebook.',
          href: '/rentals/ivalo-inari',
          linkLabel: 'Aluguel em Ivalo e Inari',
        },
      ],
    },
    {
      id: 'portals',
      kicker: 'Portais e grupos',
      h2: 'Os mesmos canais do resto da Finlândia.',
      bullets: [
        '<a href="https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Oikotie</a>: nacional. Filtre por município, não apenas por vilarejo.',
        '<a href="https://www.vuokraovi.com/vuokra-asunnot/rovaniemi" target="_blank" rel="noopener">Vuokraovi</a>: só aluguéis.',
        '<a href="https://qasa.fi" target="_blank" rel="noopener">Qasa</a>: listado pela cidade de Rovaniemi; o contrato é assinado eletronicamente na plataforma.',
        '<a href="https://www.tori.fi" target="_blank" rel="noopener">Tori</a>: um site de classificados que também traz apartamentos para alugar. Veja abaixo o que conferir antes de pagar.',
        'Grupos no Facebook: busca de moradia em Levi, Kemi–Keminmaa e Sodankylä–Inari–Utsjoki. É o canal mais rápido nos vilarejos dos montes, mas ninguém garante os anúncios.',
      ],
    },
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'Por metro quadrado, não por impressão.',
      lead:
        'A Statistics Finland publica os aluguéis a cada trimestre. Abaixo, o aluguel médio de imóveis no mercado livre de julho a setembro de 2026, em euros por metro quadrado por mês.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Rovaniemi', 'Lapônia (região)', 'País inteiro'],
        rows: [
          ['Quitinetes', '18,63', '17,25', '20,49'],
          ['Apartamentos de dois cômodos', '14,40', '12,87', '15,07'],
          ['Apartamentos de três cômodos ou mais', '12,29', '11,08', '13,98'],
          ['Todos os apartamentos', '14,63', '13,14', '15,99'],
          ['Novos contratos, todos os apartamentos', '15,93', '13,39', '16,72'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. Novo contrato = contratos iniciados durante o trimestre; mostram o que está sendo pedido agora.',
      },
      paras: [
        '<strong>Como calcular:</strong> multiplique o aluguel por m² pela área. Em Rovaniemi, um quitinete de 30 m² custa em média cerca de 560 € por mês (18,63 × 30) e cerca de 600 € em um novo contrato (20,14 × 30, o valor de quitinetes em novos contratos em Rovaniemi). Um apartamento de dois cômodos de 50 m²: cerca de 720 € por mês (14,40 × 50). Água e eletricidade geralmente são cobradas à parte.',
        'O aluguel por metro quadrado na Lapônia fica abaixo da média nacional em todos os tamanhos de apartamento, e a diferença é menor nos de dois cômodos.',
      ],
      note: {
        label: 'O que as estatísticas não enxergam',
        body:
          'Os aluguéis de temporada nas estações de esqui e os aluguéis mobiliados de curta duração não entram nestes números. Perto do centro de Levi, um apartamento de 80 m² em casa de estilo alpino custava 750 € por mês de maio a novembro, 2.000 € por semana na alta temporada e 1.650 € por mês o ano todo (Yle, 25 de maio de 2023): o mesmo apartamento por três preços.',
      },
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'O teto depende do município.',
      lead:
        'O auxílio-moradia geral cobre no máximo 70 % dos custos de moradia aceitos, e esses custos têm um teto que depende do município e do tamanho da família. A Kela divide os municípios em três grupos: Rovaniemi está no grupo dos 24 municípios maiores, e todos os outros municípios da Lapônia entram em “outros municípios”, que tem um teto mais baixo.',
      table: {
        caption: 'Custos máximos de moradia em 2026, €/mês',
        head: ['Tamanho da família', 'Rovaniemi', 'Outros municípios da Lapônia'],
        rows: [
          ['1 pessoa', '447', '394'],
          ['2 pessoas', '652', '574'],
          ['3 pessoas', '828', '734'],
          ['4 pessoas', '981', '875'],
          ['Cada pessoa adicional', '+134', '+129'],
        ],
        foot: 'Kela, auxílio-moradia geral 2026. Um auxílio abaixo de 15 € não é pago.',
      },
      paras: [
        'O teto significa que, em Rovaniemi, o aluguel de uma pessoa que mora sozinha conta até 447 €, mesmo que o aluguel seja de 600 €. O restante você paga por conta própria. A renda reduz o auxílio por meio da franquia básica; a calculadora da Kela mostra o seu caso.',
      ],
    },
    {
      id: 'contract',
      kicker: 'O contrato de locação',
      h2: 'Cinco coisas antes de assinar.',
      bullets: [
        '<strong>A caução é de no máximo três meses de aluguel</strong> (Lei de Locação Residencial, seção 8). Um ou dois meses é o mais comum.',
        '<strong>A partir de 1º de outubro de 2026, a caução deve ser devolvida</strong>, ou a sua retenção explicada por escrito, em até 14 dias após o fim da locação ou a devolução do apartamento (reforma em vigor desde 1º de outubro de 2026, Rakli).',
        '<strong>O prazo de aviso prévio do locatário é de um mês.</strong> Nos contratos feitos a partir de 1º de outubro de 2026, o aviso prévio do locador é de três meses, e de quatro meses se a locação durou ininterruptamente pelo menos dois anos (Rakli). Os contratos feitos antes de 1º de outubro de 2026 mantêm os prazos antigos (Kuluttajaliitto).',
        '<strong>Um contrato por prazo determinado obriga as duas partes até o fim.</strong> No trabalho sazonal, o apartamento do empregador costuma estar vinculado ao emprego: leia o que acontece se o emprego terminar antes da temporada.',
        '<strong>O histórico de crédito quase sempre é consultado.</strong> Uma anotação de inadimplência não impede alugar, mas uma empresa municipal de habitação ou um locador particular tem mais chance de aceitar do que as grandes redes.',
      ],
    },
    {
      id: 'before-paying',
      kicker: 'Antes de pagar qualquer coisa',
      h2: 'Três regras que protegem a sua caução.',
      bullets: [
        'Nunca pague a caução antes de uma visita ou de uma visita em vídeo em que você veja o apartamento e as chaves no mesmo quadro.',
        'Contrato por escrito, com o nome do locador e o número de empresa ou o código de identificação pessoal. Uma empresa municipal de habitação é o começo mais seguro se você não conhece o mercado.',
        'Um aluguel mobiliado de curta duração não é um contrato de locação: um apartamento de temporada pode não ter endereço oficial, e a falta de endereço dificulta o trato com empresas, por exemplo nas consultas de crédito (Yle, 25 de maio de 2023).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Quanto custa um quitinete em Rovaniemi?',
      a: 'Segundo a Statistics Finland, o aluguel médio de um quitinete no mercado livre em Rovaniemi foi de 18,63 € por m² de julho a setembro de 2026 e de 20,14 € por m² nos novos contratos. Um quitinete de 30 m² custa, portanto, cerca de 560–600 € por mês, sem a eletricidade.',
    },
    {
      q: 'Posso alugar na Lapônia sem histórico de crédito finlandês?',
      a: 'Sim, mas com menos opções. As empresas municipais de habitação e os locadores particulares decidem caso a caso, e uma caução maior (a lei permite até três meses de aluguel) ou um fiador ajuda. As grandes redes de aluguel sempre consultam o crédito.',
    },
    {
      q: 'Qual é a melhor época para procurar apartamento em Rovaniemi?',
      a: 'Qualquer mês que não seja agosto ou setembro. Nessa época, a DAS não consegue abrigar todos os candidatos, e os quitinetes no mercado livre são escassos (Yle, 27 de julho de 2026). Os quitinetes alugados por temporada de inverno voltam ao mercado na primavera.',
    },
    {
      q: 'Por que o aluguel em Levi é várias vezes mais alto no inverno?',
      a: 'Porque na alta temporada o mesmo apartamento é alugado por semana. No exemplo da Yle (25 de maio de 2023), um apartamento de 80 m² em casa de estilo alpino custava 750 € por mês no verão e 2.000 € por semana no inverno. O aluguel mensal é possível de maio a novembro; para o inverno, pergunte ao empregador sobre moradia para funcionários ou consulte a empresa municipal de Kittilä.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras semanas',
    h2: 'Veja o apartamento pessoalmente.',
    lead:
      'Reserve um hotel ou apart-hotel para as primeiras semanas e veja os apartamentos você mesmo antes de assinar. A busca do nosso parceiro mostra quartos livres com os preços de hoje.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_first_weeks_rovaniemi' },
      { label: 'Levi', destination: 'Levi', sid: 'rentals_first_weeks_levi' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_first_weeks_tornio' },
      { label: 'Ivalo', destination: 'Ivalo', sid: 'rentals_first_weeks_ivalo' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
