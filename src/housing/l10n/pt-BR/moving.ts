/**
 * Brasilianportugali (pt-BR) · moving. Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/moving.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingPageCopy } from '../../types';
import { pickSources } from '../../sources';
import common from './common';

const SOURCES = [
  'dvv', 'traficom', 'tkSahko', 'tkPolttoaine', 'kuntaliitto', 'perusopetuslaki', 'fmi', 'foreca',
  'lvDrive', 'lapha', 'laplandwork', 'ahvl', 'rakli',
] as const;

const copy: HousingPageCopy = {
  metaTitle: 'Mudar para a Lapônia: guia prático do primeiro mês',
  metaDescription:
    'Mudança de endereço, pneus de inverno, creche, eletricidade e noite polar: o que resolver no primeiro mês ao morar na Lapônia finlandesa.',
  breadcrumb: 'Mudar para a Lapônia',
  hero: {
    eyebrow: 'Mudar para a Lapônia: os primeiros 30 dias',
    title: 'Mudar para a Lapônia.',
    subtitle:
      'Mudança de endereço, pneus de inverno, creche, contrato de eletricidade e noite polar: o que resolver no primeiro mês e em que ordem.',
  },
  authorNote:
    'Prazos da DVV, da Traficom e da Associação de Municípios da Finlândia, duração da noite polar segundo o Instituto Meteorológico da Finlândia, distâncias das rotas de carro do LaplandVibes. Verificado em 15 de novembro de 2026.',
  intro: [
    'A papelada de quem se muda para a Lapônia é a mesma de qualquer lugar da Finlândia, mas três coisas pesam mais aqui do que no sul: o inverno dura metade do ano, as distâncias se medem em centenas de quilômetros e, nos municípios pequenos, os serviços ficam todos num lugar só. Esta página é uma lista de tarefas na ordem em que precisam ser feitas.',
    'Se você está se mudando para a Finlândia vindo do exterior, as autorizações de residência, o código de identificação pessoal, o cartão fiscal e a conta bancária estão no nosso site irmão <a href="https://laplandwork.com/br/moving-to-finland/" target="_blank" rel="noopener">laplandwork.com</a>. Esta página começa quando você já tem as chaves na mão.',
  ],
  sections: [
    {
      id: 'week-one',
      kicker: 'A primeira semana',
      h2: 'Quatro comunicações, um prazo.',
      bullets: [
        '<strong>Comunicação de mudança de endereço à DVV</strong>: a partir de um mês antes do dia da mudança e, no máximo, até uma semana depois dela (DVV). A mesma comunicação vai para os Correios (Posti). Os serviços municipais (creche, escola, posto de saúde) seguem o município onde você está registrado, então faça-a logo.',
        '<strong>Contrato de eletricidade.</strong> O preço total da eletricidade para uma residência que consome de 2.500 a 4.999 kWh por ano foi, em média, de 23,7 centavos por kWh em toda a Finlândia em junho de 2026, e de 14,9 centavos na faixa acima de 15.000 kWh, onde se enquadra uma casa com aquecimento elétrico (Statistics Finland). A temporada de aquecimento na Lapônia é longa, então estime o seu consumo para cima.',
        '<strong>A saúde</strong> é administrada pelo condado de serviços de bem-estar da Lapônia (Lapha). O atendimento não urgente passa pelo posto de saúde da sua região; encontre o mais próximo no site do condado e cadastre-se no Omakanta.',
        '<strong>Internet.</strong> Pergunte ao condomínio ou ao locador sobre fibra ótica antes de assinar. Em áreas pouco povoadas, um roteador móvel costuma ser a única opção, e quem trabalha remotamente deve testar a conexão no apartamento antes.',
      ],
    },
    {
      id: 'car',
      kicker: 'Carro e inverno',
      h2: 'Em Rovaniemi dá para viver sem carro. No resto, não.',
      bullets: [
        '<strong>Pneus de inverno:</strong> na Finlândia, os pneus de inverno devem ser usados de 1º de novembro a 31 de março se o tempo ou as condições da estrada exigirem. Pneus com cravos são permitidos no mesmo período e em outras épocas quando as condições pedem. Os sulcos principais de um pneu de inverno devem ter pelo menos 3,0 mm de profundidade (Traficom).',
        '<strong>Combustível:</strong> a gasolina 95E10 custou, em média, 2,09 € o litro em toda a Finlândia em junho de 2026, e o diesel 2,15 € (Statistics Finland). As longas distâncias tornam esse item maior na Lapônia do que no sul.',
        '<strong>Distâncias</strong> das rotas de carro do LaplandVibes: Oulu–Kemi 105 km, Kemi–Rovaniemi 118 km, Rovaniemi–Ylläs (Äkäslompolo) 175 km, Sodankylä–Saariselkä 130 km, Levi–Kilpisjärvi 258 km. A Lapônia é maior do que parece no mapa.',
        '<strong>Aquecedor do motor e do interior do carro.</strong> No frio intenso, o carro é aquecido antes de você sair; um poste de aquecimento no estacionamento é equipamento padrão na Lapônia. Faça constar no contrato de locação uma vaga com poste.',
      ],
      image: {
        src: '/images/housing-kittila-airport.webp',
        alt: 'O terminal do aeroporto de Kittilä em um dia de verão',
        caption: 'Aeroporto de Kittilä, julho de 2026. Levi e Ylläs são atendidos por Kittilä, Rovaniemi pelo próprio aeroporto e Saariselkä por Ivalo. Foto: LaplandVibes.',
        ratio: '16/9',
      },
    },
    {
      id: 'children',
      kicker: 'Crianças',
      h2: 'A creche é cobrada conforme a renda, a escola não custa nada.',
      bullets: [
        '<strong>As taxas da educação infantil</strong> seguem a renda da família: a partir de 1º de agosto de 2026, a taxa máxima é de 335 € por mês por criança e a mínima cobrada é de 32 €. O segundo filho paga no máximo 40 % da taxa do filho mais novo, ou seja, no máximo 134 € (Associação de Municípios da Finlândia).',
        '<strong>A pré-escola e o ensino fundamental</strong> são gratuitos, incluindo material didático e merenda escolar (Lei do Ensino Fundamental, artigo 31). O transporte escolar é organizado quando o trajeto passa de cinco quilômetros (artigo 32) e, nos municípios pequenos, faz parte do dia a dia.',
        'A vaga na creche é pedida ao município, e o município é definido pelo endereço registrado na DVV. Por isso a comunicação de endereço vem primeiro, não por último.',
      ],
    },
    {
      id: 'light',
      kicker: 'Luz e escuridão',
      h2: 'A noite polar é mais curta do que você pensa. Exceto em Utsjoki.',
      paras: [
        'Kaamos, a noite polar, significa que o sol não sobe acima do horizonte. Segundo o Instituto Meteorológico da Finlândia, ela dura quase dois meses em Nuorgam, Utsjoki, de 25 de novembro a 17 de janeiro, e apenas quatro dias pouco antes do Natal em Sodankylä. A linha da noite polar passa um pouco ao norte do Círculo Polar Ártico, então Rovaniemi não tem uma noite polar de verdade (Foreca): no inverno o sol fica baixo, mas ele nasce.',
        'No verão, a situação se inverte. A linha do sol da meia-noite é alcançada no Círculo Polar Ártico, em Rovaniemi, e em Nuorgam o sol não se põe de 16 de maio a 29 de julho (Instituto Meteorológico da Finlândia). Cortinas blackout são a compra essencial do verão, e uma lâmpada de luz do dia, a do inverno.',
      ],
    },
    {
      id: 'before-signing',
      kicker: 'Antes de assinar',
      h2: 'Pergunte isto ao locador.',
      bullets: [
        'O tipo de aquecimento e quem paga por ele: o aquecimento central do bairro costuma estar incluído no aluguel, e o aquecimento elétrico vai para a sua própria conta.',
        'Uma vaga de estacionamento com poste de aquecimento e um espaço para guardar o equipamento de inverno: esquis, trenó, pneus de inverno.',
        'A distância até o comércio, o posto de saúde e a escola mais próximos, e se há ônibus até lá no inverno.',
        'A caução e a sua devolução: no máximo três meses de aluguel (Lei de Locação Residencial, artigo 8) e, a partir de 1º de outubro de 2026, devolução em até 14 dias após o fim da locação (Rakli).',
      ],
    },
  ],
  faqs: [
    {
      q: 'Até quando tenho de comunicar a mudança de endereço?',
      a: 'A partir de um mês antes do dia da mudança e, no máximo, até uma semana depois dela (DVV). Uma única comunicação vale tanto para a Agência de Serviços de Dados Digitais e Populacionais quanto para os Correios (Posti).',
    },
    {
      q: 'Quando os pneus de inverno são obrigatórios na Lapônia?',
      a: 'A lei diz de 1º de novembro a 31 de março, se o tempo ou as condições da estrada exigirem, e os cravos são permitidos no mesmo período e em outras épocas quando as condições pedem (Traficom). Ou seja, os pneus são trocados conforme as condições, não conforme o calendário.',
    },
    {
      q: 'Rovaniemi tem noite polar?',
      a: 'Não uma de verdade: a linha da noite polar passa um pouco ao norte do Círculo Polar Ártico (Foreca). Em Sodankylä o sol fica abaixo do horizonte por quatro dias antes do Natal, e em Nuorgam por quase dois meses (Instituto Meteorológico da Finlândia).',
    },
  ],
  cta: {
    partner: 'cars',
    kicker: 'Um carro para as primeiras semanas',
    h2: 'Visitas, mudança, compras.',
    lead:
      'O seu próprio carro muitas vezes chega depois. Um carro alugado no aeroporto cobre as visitas e as primeiras semanas; a busca do nosso parceiro compara as locadoras de uma só vez.',
    chips: [
      { label: 'Rovaniemi (RVN)', destination: 'RVN', sid: 'moving_car_rvn' },
      { label: 'Kittilä (KTT)', destination: 'KTT', sid: 'moving_car_ktt' },
      { label: 'Kemi-Tornio (KEM)', destination: 'KEM', sid: 'moving_car_kem' },
      { label: 'Ivalo (IVL)', destination: 'IVL', sid: 'moving_car_ivl' },
    ],
  },
  sources: pickSources('pt-BR', SOURCES, common.sourceLabels),
};

export default copy;
