/**
 * Brasilianportugali (pt-BR) · town-kemi-tornio. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/towns/kemi-tornio.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = ['tkVuokrat', 'tkVaesto', 'kela', 'kemi', 'itatuuli', 'keminmaa', 'keminmaaVuokra', 'tornio', 'ahvl', 'rakli'] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Aluguel em Kemi, Tornio e Keminmaa: apartamentos municipais',
  metaDescription:
    'Alugar em Kemi, Tornio e Keminmaa, no litoral da Lapônia: empresas municipais como Itätuuli e Tornion Krunni, imobiliárias e apoio da Kela.',
  breadcrumb: 'Kemi e Tornio',
  hero: {
    eyebrow: 'O litoral da Lapônia do Mar',
    title: 'Aluguel em Kemi, Tornio e Keminmaa.',
    subtitle:
      'As cidades gêmeas do litoral, onde as empresas municipais de habitação têm centenas de apartamentos e as candidaturas são feitas on-line. Por onde começar e quanto custa o aluguel.',
  },
  authorNote:
    'Número de apartamentos das empresas de habitação nas páginas dos próprios municípios de Kemi, Tornio e Keminmaa, condições de candidatura nas páginas das próprias empresas, aluguéis por m² da Statistics Finland (região da Lapônia, 3º trimestre de 2026). Verificado em 15 de novembro de 2026.',
  intro: [
    'Kemi tem 19.339 habitantes, Tornio 20.823 e Keminmaa 7.576 (Statistics Finland, 31 de dezembro de 2025). Os três municípios fazem divisa entre si, então o apartamento pode ficar em um município diferente do do emprego.',
    'As empresas municipais de habitação são o primeiro endereço: os apartamentos municipais de Kemi são administrados pela Kiinteistö Oy Itätuuli (kemi.fi), a maior locadora residencial da cidade, com imóveis a até cinco quilômetros do centro (itatuuli.fi). A Keminmaan Vuokra-asunnot Oy tem 18 imóveis com pouco mais de 300 apartamentos (keminmaa.fi). Cada empresa tem a sua própria candidatura on-line. Em Tornio, os apartamentos da cidade são administrados pela Tornion Krunni Oy, que inclui a Tornion Vuokra-asunnot Oy (tornio.fi).',
    'A tabela de aluguéis atual da Statistics Finland não tem uma linha separada para Kemi ou Tornio, então abaixo aparece o valor regional da Lapônia. Os números de Rovaniemi estão na página própria da cidade.',
  ],
  sections: [
    {
      id: 'prices',
      kicker: 'Quanto custa o aluguel',
      h2: 'Aluguéis regionais da Lapônia por m², de julho a setembro de 2026.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Lapônia (região)', 'Rovaniemi', 'País inteiro'],
        rows: [
          ['Quitinetes', '17,25', '18,63', '20,49'],
          ['Apartamentos de dois cômodos', '12,87', '14,40', '15,07'],
          ['Apartamentos de três cômodos ou mais', '11,08', '12,29', '13,98'],
          ['Todos os apartamentos', '13,14', '14,63', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa. O valor regional inclui Rovaniemi, então o nível de Kemi–Tornio provavelmente fica abaixo dele; a tabela atual não o mostra separadamente.',
      },
      paras: [
        '<strong>Exemplos na média regional:</strong> um quitinete de 30 m², cerca de 520 € por mês (17,25 × 30); um apartamento de dois cômodos de 50 m², cerca de 640 € (12,87 × 50); um apartamento de três cômodos de 75 m², cerca de 830 € (11,08 × 75).',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Kemi, Tornio e Keminmaa estão nos “outros municípios” da Kela.',
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
      id: 'channels',
      kicker: 'A quem se candidatar',
      h2: 'Primeiro a empresa municipal, depois as imobiliárias.',
      band: true,
      cards: [
        {
          title: 'Em Kemi: Kiinteistö Oy Itätuuli',
          body: 'Os apartamentos de aluguel da cidade. A Itätuuli é a maior locadora residencial de Kemi, e os seus imóveis ficam a até cinco quilômetros do centro. A candidatura on-line da própria empresa vale por quatro meses e não se cobra caução. A página de informações empresariais do Visit Kemi também lista as imobiliárias particulares: Forenom, Habita Kemi, HVC Group, Kiinteistömaailma, KVP Group, OP Koti Kemi, Pihlajaniemi & Co, Solecco e AJK Asunnot.',
          href: 'https://www.kemi.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'kemi.fi: habitação de aluguel',
          event: 'kemi_city',
        },
        {
          title: 'Em Keminmaa: Keminmaan Vuokra-asunnot Oy',
          body: 'A empresa de habitação pertencente ao município: 18 imóveis com pouco mais de 300 apartamentos, com água e aquecimento incluídos no aluguel. A candidatura on-line da própria empresa vale por três meses, e a caução é de um mês de aluguel.',
          href: 'https://www.keminmaanvuokra-asunnot.fi/asunnonhaku.html',
          linkLabel: 'Keminmaan Vuokra-asunnot: como se candidatar',
          event: 'keminmaa',
        },
        {
          title: 'Em Tornio: Tornion Krunni Oy',
          body: 'Administra a Tornion Vuokra-asunnot Oy, a Tornion Oppilasasuntola Oy e a Tornion Palveluasunnot Oy; a unidade de instalações da cidade também cuida dos apartamentos que a cidade possui diretamente. Consultas sobre moradia por telefone, e a página da cidade indica também locadores e imobiliárias particulares.',
          href: 'https://www.tornio.fi/asuminen-ja-ymparisto/asuminen/vuokra-asunnot/',
          linkLabel: 'tornio.fi: habitação de aluguel',
          event: 'tornio_city',
        },
        {
          title: 'Oikotie e Vuokraovi',
          body: 'Anúncios particulares e de imobiliárias. Pesquise Kemi, Tornio e Keminmaa como municípios separados: são três buscas municipais distintas.',
          href: 'https://asunnot.oikotie.fi/vuokra-asunnot/kemi',
          linkLabel: 'Oikotie: aluguel em Kemi',
          event: 'oikotie',
        },
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
      q: 'Como me candidato a um apartamento municipal em Kemi?',
      a: 'Pela candidatura on-line da própria Kiinteistö Oy Itätuuli, válida por quatro meses. A Itätuuli é a maior locadora residencial de Kemi, com imóveis a até cinco quilômetros do centro, e aluga todos eles sem caução (itatuuli.fi). A Keminmaan Vuokra-asunnot Oy tem a sua própria candidatura.',
    },
    {
      q: 'Quanto custa o aluguel em Kemi e Tornio?',
      a: 'A tabela atual da Statistics Finland não tem uma linha separada para as cidades. A média regional da Lapônia foi de 13,14 € por m² de julho a setembro de 2026 (quitinetes 17,25, apartamentos de dois cômodos 12,87), e esse valor inclui Rovaniemi, que é mais cara.',
    },
  ],
  cta: {
    partner: 'hotels',
    kicker: 'As primeiras semanas',
    h2: 'Visitas pessoalmente.',
    lead: 'Reserve um lugar para ficar durante as visitas e veja o apartamento antes de assinar.',
    chips: [
      { label: 'Kemi', destination: 'Kemi', sid: 'rentals_kemi_first_weeks' },
      { label: 'Tornio', destination: 'Tornio', sid: 'rentals_tornio_first_weeks' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
