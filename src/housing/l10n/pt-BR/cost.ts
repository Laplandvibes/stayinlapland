/**
 * Brasilianportugali (pt-BR) · cost. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/cost.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'tkVuokrat', 'tkSahko', 'tkPolttoaine', 'kela', 'kuntaliitto', 'perusopetuslaki', 'lvDrive', 'yle2023',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Custo de vida na Lapônia 2026: aluguel, luz e combustível',
  metaDescription:
    'Quanto custa morar na Lapônia finlandesa: aluguel por m² (Statistics Finland 2026), eletricidade, combustível, auxílio-moradia da Kela e creche.',
  breadcrumb: 'Custo de vida',
  hero: {
    eyebrow: 'Custo de vida na Lapônia',
    title: 'Quanto custa morar na Lapônia?',
    subtitle:
      'O aluguel é mais barato na Lapônia do que no resto da Finlândia; o carro e o aquecimento são mais caros. É assim que se monta um orçamento mensal.',
  },
  authorNote:
    'Cada número vem da Statistics Finland, da Kela ou da Associação de Municípios da Finlândia; os exemplos são calculados a partir desses números e mostram a fórmula. Nada de estimativas.',
  intro: [
    'Quando o assunto é custo, há duas Lapônias. Rovaniemi é uma cidade universitária onde estudantes e turistas disputam as quitinetes; nas estações de esqui, o preço acompanha a temporada. No litoral e nos municípios pequenos, a moradia é mais ampla e mais barata, mas o carro é obrigatório.',
    'Abaixo estão os quatro itens que realmente compõem um orçamento mensal: aluguel, eletricidade, deslocamento e crianças. Não existe uma estatística específica da Lapônia sobre preços de alimentos, então não inventamos uma.',
  ],
  sections: [
    {
      id: 'rent',
      kicker: 'Aluguel',
      h2: 'Mais barato do que a média nacional, exceto quando não é.',
      table: {
        caption: 'Aluguel médio em €/m²/mês, imóveis de aluguel no mercado livre, 3º trimestre de 2026',
        head: ['', 'Rovaniemi', 'Lapônia (região)', 'País inteiro'],
        rows: [
          ['Quitinetes', '18,63', '17,25', '20,49'],
          ['Apartamentos de dois cômodos', '14,40', '12,87', '15,07'],
          ['Apartamentos de três cômodos ou mais', '12,29', '11,08', '13,98'],
          ['Todos os apartamentos', '14,63', '13,14', '15,99'],
        ],
        foot: 'Statistics Finland, aluguéis do 3º trimestre de 2026, tabela 15fa.',
      },
      paras: [
        '<strong>Exemplos:</strong> uma quitinete de 30 m² em Rovaniemi, cerca de 560 € por mês (18,63 × 30); um apartamento de dois cômodos de 50 m² em Rovaniemi, cerca de 720 € (14,40 × 50); um apartamento de três cômodos de 75 m² na média regional da Lapônia, cerca de 830 € (11,08 × 75).',
        'A exceção é o inverno nas estações de esqui: perto do centro de Levi, um apartamento de 80 m² em estilo alpino custava 750 € por mês de maio a novembro, mas 2.000 € por semana na alta temporada (Yle, 25 de maio de 2023). Um contrato anual do mesmo apartamento custava 1.650 € por mês. O preço da estação de esqui não é o preço da Lapônia.',
      ],
    },
    {
      id: 'electricity',
      kicker: 'Eletricidade e aquecimento',
      h2: 'O quilowatt-hora custa o mesmo; você só usa mais.',
      table: {
        caption: 'Preço total da eletricidade para residências, centavos/kWh, junho de 2026, país inteiro',
        head: ['Consumo anual', 'Preço total'],
        rows: [
          ['1.000–2.499 kWh (apartamento pequeno)', '28,2'],
          ['2.500–4.999 kWh (apartamento ou casa em fileira)', '23,7'],
          ['5.000–15.000 kWh (casa isolada, sem aquecimento elétrico)', '17,9'],
          ['mais de 15.000 kWh (casa com aquecimento elétrico)', '14,9'],
        ],
        foot: 'Statistics Finland, preço da eletricidade por tipo de consumidor, tabela 13rb. O preço inclui energia, transmissão e impostos.',
      },
      paras: [
        '<strong>Exemplos:</strong> um apartamento de dois cômodos que consome 3.500 kWh por ano: 3.500 × 0,237 = cerca de 830 € por ano, ou 69 € por mês; uma casa isolada com aquecimento elétrico que consome 18.000 kWh: 18.000 × 0,149 = cerca de 2.680 € por ano, ou 223 € por mês.',
        'O preço é uma média nacional. A temporada de aquecimento na Lapônia é mais longa do que a do sul, então a mesma casa queima mais quilowatts-hora aqui; pergunte ao inquilino anterior ou ao locador qual foi o consumo do ano passado, que é a melhor estimativa que você vai conseguir.',
      ],
    },
    {
      id: 'getting-around',
      kicker: 'Deslocamento',
      h2: 'Este é o item que pesa mais na Lapônia.',
      paras: [
        'A gasolina 95E10 custou, em média, 2,09 € o litro em toda a Finlândia em junho de 2026 e o diesel 2,15 € (Statistics Finland). Distâncias das rotas de carro do LaplandVibes: Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs 175 km, Sodankylä–Saariselkä 130 km.',
        '<strong>Exemplo:</strong> um trajeto diário de 40 km, 22 dias úteis, 7 l/100 km: 880 km × 0,07 l/km × 2,09 € = cerca de 129 € por mês em gasolina. No centro de Rovaniemi dá para viver sem carro; em um vilarejo de monte, o carro faz parte do aluguel, mesmo que o contrato não diga isso.',
      ],
    },
    {
      id: 'housing-allowance',
      kicker: 'Auxílio-moradia da Kela',
      h2: 'Quanto do aluguel conta.',
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
        foot: 'Kela, auxílio-moradia geral 2026. O auxílio é de no máximo 70 % dos custos de moradia aceitos, e um auxílio abaixo de 15 € não é pago.',
      },
      paras: [
        '<strong>Exemplo:</strong> morando sozinho em Rovaniemi com aluguel de 600 €. No máximo 447 € contam, e o auxílio é de no máximo 70 % disso, ou seja, 313 € por mês (447 × 0,70), antes de a renda reduzi-lo por meio da franquia básica. A calculadora da Kela aplica a sua própria renda.',
      ],
    },
    {
      id: 'children',
      kicker: 'Crianças',
      h2: 'Creche conforme a renda, escola gratuita.',
      bullets: [
        'A partir de 1º de agosto de 2026, a taxa máxima da educação infantil é de 335 € por mês por criança, a mínima cobrada é de 32 €, e o segundo filho paga no máximo 134 € (Associação de Municípios da Finlândia). A taxa segue a renda da família, então, com renda baixa, pode ser zero.',
        'A pré-escola e o ensino fundamental são gratuitos, incluindo material didático e merenda escolar (Lei do Ensino Fundamental, artigo 31). Para um trajeto escolar de mais de cinco quilômetros, o município organiza o transporte (artigo 32).',
      ],
    },
    {
      id: 'summary',
      kicker: 'Resumo',
      h2: 'O que é mais barato, o que é mais caro.',
      band: true,
      cards: [
        {
          title: 'Mais barato: o aluguel',
          body: 'O aluguel médio da Lapônia é de 13,14 € por m², contra 15,99 € no país (Statistics Finland, 3º trimestre de 2026). Rovaniemi, com 14,63 €, fica entre os dois.',
        },
        {
          title: 'Mais caro: deslocamento e aquecimento',
          body: 'Distâncias de cem quilômetros e uma longa temporada de aquecimento. O preço de um quilowatt-hora e de um litro é o mesmo que no sul; a quantidade não é.',
        },
        {
          title: 'Igual: creche e escola',
          body: 'As taxas da educação infantil e o ensino gratuito são nacionais. Para uma família com crianças, a maior economia na Lapônia é o aluguel.',
        },
      ],
    },
  ],
  faqs: [
    {
      q: 'Rovaniemi é uma cidade cara para morar?',
      a: 'Não pelos aluguéis: a média de 14,63 € por m² fica abaixo dos 15,99 € nacionais (Statistics Finland, 3º trimestre de 2026), e Rovaniemi é mais barata do que o país como um todo em todos os tamanhos de apartamento, quitinetes inclusive (18,63 contra 20,49). Nos novos contratos, uma quitinete em Rovaniemi custa 20,14 € por m²: uma quitinete que fica livre agora custa cerca de 8 % mais do que uma já alugada, mas ainda assim menos do que uma quitinete em novo contrato no país, 21,11 € por m².',
    },
    {
      q: 'Quanto uma pessoa que mora sozinha precisa por mês em Rovaniemi?',
      a: 'Só calculamos o que tem fonte: uma quitinete de 30 m² custa cerca de 560 € por mês (18,63 × 30) e a eletricidade, a 1.800 kWh por ano, cerca de 42 € por mês (1.800 × 0,282 / 12). Alimentação, internet, seguros e transporte entram à parte, conforme os seus hábitos.',
    },
    {
      q: 'Posso receber auxílio-moradia na Lapônia?',
      a: 'Nas mesmas condições de qualquer lugar da Finlândia. Em Rovaniemi, os custos de moradia de uma pessoa que mora sozinha contam até 447 € por mês, nos outros municípios da Lapônia até 394 €, e o auxílio é de no máximo 70 % disso (Kela 2026).',
    },
  ],
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
