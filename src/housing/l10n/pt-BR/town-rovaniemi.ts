/**
 * Brasilianportugali (pt-BR) · town-rovaniemi. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/rovaniemi.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'rovaniemi', 'das', 'yle2025das', 'yle2026rovaniemi', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Rovaniemi: preços, locadores e como se candidatar',
  metaDescription:
    'Alugar em Rovaniemi: aluguel por m² (Statistics Finland 2026), locadores listados pela cidade, DAS para estudantes, auxílio-moradia da Kela e prazos.',
  breadcrumb: 'Rovaniemi',
  hero: {
    eyebrow: 'Rovaniemi, 66.191 habitantes',
    title: 'Aluguel em Rovaniemi.',
    subtitle:
      'A maior cidade da Lapônia, com 66.191 habitantes. Quanto custa o aluguel, a quem se candidatar e quando.',
  },
  authorNote:
    'Aluguéis por m² da Statistics Finland (julho a setembro de 2026), locadores da página de moradia da própria Cidade de Rovaniemi, números sobre a falta de moradia da Yle. Verificado em 15 de novembro de 2026.',
  intro: [
    'Rovaniemi tem 66.191 habitantes (Statistics Finland, 31 de dezembro de 2025) e uma concorrência acirrada por quitinetes: a fundação de moradia estudantil DAS recebeu cerca de 550 candidaturas urgentes no verão de 2026, 15 por cento mais do que um ano antes, e quase 90 por cento dos candidatos queriam uma quitinete. Além disso, as quitinetes da cidade são alugadas por temporada a turistas durante o inverno (Yle, 27 de julho de 2026). Segundo o diretor-geral da DAS, a fundação não consegue oferecer um apartamento a todos os candidatos em agosto e setembro.',
    'Uma empresa de recrutamento que levou cerca de 250 trabalhadores para a Lapônia os alojou em umas dez localidades diferentes de Rovaniemi (Yle, 9 de março de 2026). Trabalhadores sazonais, estudantes e turistas disputam os mesmos apartamentos pequenos.',
    'A boa notícia é o preço: o aluguel médio de Rovaniemi, de 14,63 € por m², fica abaixo da média nacional de 15,99 € (Statistics Finland, 3º trimestre de 2026). Abaixo, os valores por tamanho de apartamento e os canais para se candidatar.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'Aluguéis de Rovaniemi por m², de julho a setembro de 2026.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, Rovaniemi, 3º trimestre de 2026',
        head: ['', 'Todos os aluguéis', 'Aluguéis novos', 'País inteiro'],
        rows: [
          ['Quitinetes', '18,63', '20,14', '20,49'],
          ['Apartamentos de dois cômodos', '14,40', '16,40', '15,07'],
          ['Apartamentos de três cômodos ou mais', '12,29', '13,66', '13,98'],
          ['Todos os apartamentos', '14,63', '15,93', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. Novos contratos = contratos iniciados durante o trimestre, ou seja, o que está sendo pedido agora pelos apartamentos livres.',
      },
      paras: [
        '<strong>Exemplos:</strong> uma quitinete de 30 m², cerca de 560 € por mês (18,63 × 30), em um novo contrato cerca de 600 € (20,14 × 30); um apartamento de dois cômodos de 50 m², cerca de 720 € (14,40 × 50); um apartamento de três cômodos de 75 m², cerca de 920 € (12,29 × 75). Água e eletricidade geralmente são cobradas à parte.',
        'O preço de 20,14 € por m² de uma quitinete em novo contrato é 1,51 € (8 %) acima da média de todas as quitinetes de Rovaniemi, 18,63 €: uma quitinete que fica livre agora custa mais do que uma já alugada. Em relação à média nacional, Rovaniemi é mais barata em todos os tamanhos de apartamento.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Rovaniemi tem um teto mais alto.',
      lead:
        'O auxílio-moradia geral é de no máximo 70 % dos custos de moradia aceitos. Em Rovaniemi, o teto dos custos aceitos é mais alto do que nos outros municípios da Lapônia, porque a cidade está no grupo dos 24 municípios maiores da Kela (Kela 2026).',
      table: {
        caption: 'Custos máximos de moradia em 2026, €/mês, grupo dos 24 municípios maiores da Kela',
        head: ['Tamanho da família', 'Custos máximos de moradia'],
        rows: [
          ['1 pessoa', '447'],
          ['2 pessoas', '652'],
          ['3 pessoas', '828'],
          ['4 pessoas', '981'],
          ['Cada pessoa adicional', '+134'],
        ],
        foot: 'Kela, auxílio-moradia geral 2026. Um auxílio abaixo de 15 € não é pago. A renda reduz o auxílio por meio da franquia básica.',
      },
    },
    {
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'A lista da cidade, a fundação estudantil e os portais.',
      lead: 'A página de moradia da Cidade de Rovaniemi lista os locadores e os serviços de busca; ela não cita uma empresa municipal de habitação própria.',
      band: true,
      cards: [
        {
          title: 'Cidade de Rovaniemi: locadores',
          body: 'A página da cidade indica os locadores corporativos KAS asunnot, M2-Kodit, Tarveasunnot, Avara e Lumo, e os serviços de busca Oikotie, Vuokraovi e Qasa. Cada locador tem a sua própria candidatura on-line; candidate-se a vários ao mesmo tempo.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: moradia',
          event: 'rovaniemi_city',
        },
        {
          title: 'DAS: para estudantes',
          body: 'A Fundação Domus Arctica tem cerca de 1.700 apartamentos, 700 deles quitinetes e 460 de dois cômodos, com aluguel médio de 12,50 € por m² (Yle, 27 de julho de 2026). As candidaturas são contínuas, valem por três meses, e os novos estudantes têm prioridade em agosto e setembro. Você pode se candidatar se estuda em Rovaniemi em uma instituição de nível pós-fundamental.',
          href: 'https://www.das.fi/en/apply/applying-info',
          linkLabel: 'das.fi: informações sobre candidatura',
          event: 'das',
        },
        {
          title: 'KAS asunnot',
          body: 'Imóveis para alugar em vários bairros de Rovaniemi (lista da cidade). Candidatura on-line.',
          href: 'https://kas.fi/rovaniemen-vuokrattavat-kas-kodit/',
          linkLabel: 'kas.fi: Rovaniemi',
          event: 'kas',
        },
        {
          title: 'Lumo',
          body: 'Um locador corporativo com prédios em Rovaniemi. Contrato padrão, candidatura on-line, mudança rápida.',
          href: 'https://lumo.fi/en/rental-apartments',
          linkLabel: 'lumo.fi: apartamentos para alugar',
          event: 'lumo',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Os portais nacionais reúnem a maior parte dos anúncios particulares e de imobiliárias. Filtre pelo município de Rovaniemi, e não por bairro, para que Ounasvaara, Saarenkylä e as casas fora do centro também apareçam.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/rovaniemi',
          linkLabel: 'Oikotie: aluguel em Rovaniemi',
          event: 'oikotie',
        },
        {
          title: 'NAL Rovaniemi: menores de 30 anos',
          body: 'A filial de Rovaniemi da Associação Finlandesa de Moradia para Jovens oferece moradia para jovens menores de 30 anos (lista da cidade). Uma opção quando a DAS não é possível e você não é estudante.',
          href: 'https://www.rovaniemi.fi/Asuminen-ja-ymparisto/Asuminen',
          linkLabel: 'rovaniemi.fi: moradia para jovens',
          event: 'nal',
        },
      ],
    },
    {
      id: 'when',
      kicker: 'Quando se candidatar',
      h2: 'Dois picos de procura por ano.',
      bullets: [
        '<strong>Agosto–setembro</strong> é o período mais apertado: a DAS não consegue abrigar todos os candidatos, e as quitinetes no mercado livre são escassas (Yle, 27 de julho de 2026).',
        '<strong>Novembro–dezembro:</strong> algumas quitinetes são alugadas por temporada a turistas durante o inverno. Os contratos por prazo determinado costumam terminar no fim de outubro (Yle, 27 de julho de 2026).',
        '<strong>Na primavera</strong>, as quitinetes alugadas durante a temporada de inverno voltam ao mercado.',
        '<strong>A caução</strong> é de no máximo três meses de aluguel (Lei de Locação Residencial, artigo 8) e, a partir de 1º de outubro de 2026, deve ser devolvida em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Quanto custa uma quitinete em Rovaniemi?',
      a: 'Segundo a Statistics Finland, 18,63 € por m² em todos os contratos e 20,14 € por m² nos novos (3º trimestre de 2026). Uma quitinete de 30 m² custa, portanto, cerca de 560–600 € por mês, sem a eletricidade.',
    },
    {
      q: 'É difícil encontrar um aluguel em Rovaniemi?',
      a: 'As quitinetes são difíceis de conseguir em agosto–setembro: a DAS não consegue abrigar todos os candidatos (Yle, 27 de julho de 2026), e as quitinetes no mercado livre são escassas. Os apartamentos de dois e três cômodos são mais fáceis.',
    },
    {
      q: 'Posso me candidatar sem visitar Rovaniemi?',
      a: 'Você pode se candidatar on-line a todos os locadores que a cidade lista e à DAS. Ainda assim, veja o apartamento pessoalmente ou peça uma visita em vídeo, e pague a caução somente depois de o contrato estar assinado.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras semanas',
    h2: 'Um hotel ou apart-hotel enquanto você visita apartamentos.',
    lead: 'Veja os apartamentos pessoalmente antes de assinar. A busca do nosso parceiro mostra os quartos livres de Rovaniemi com os preços de hoje.',
    chips: [
      { label: 'Rovaniemi', destination: 'Rovaniemi', sid: 'rentals_rovaniemi_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
