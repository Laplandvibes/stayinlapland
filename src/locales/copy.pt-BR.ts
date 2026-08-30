import type { SectionCopy } from './copy';
import { copyEN } from './copy.en';

/**
 * PT-BR copy, overlays nav, hero, newsletter, CTAs e seções de alta visibilidade
 * (intro do home, fourWays, authorNote, promo de trabalho, recomendador de viagem,
 * longTermRentals, FAQ do home, hero das páginas categóricas).
 * Demais seções caem em copyEN por herança estrutural.
 */
export const copyPTBR: SectionCopy = {
  ...copyEN,
  nav: {
    longStays: 'Longa duração',
    hotels: 'Hotéis',
    glassIgloos: 'Iglus de vidro',
    wilderness: 'Natureza',
    whenToGo: 'Quando ir',
    bookingGuide: 'Guia de reservas',
    browseStays: 'Ver hospedagens',
    homeAria: 'StayInLapland, início',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    eyebrow: 'Lapônia finlandesa · Guia editorial',
    h1Line1: 'A Lapônia é mais',
    h1Line2: 'que uma semana de férias.',
    lead: 'Cabanas por semana, hotéis boutique em Rovaniemi, iglus de vidro para aquela noite especial, e os refúgios silvestres além da última estrada. Tarifas verificadas a partir de',
    leadPriceRange: '140 € até 1 500 €',
    liveLabel: 'Disponibilidade ao vivo · busca Trip.com',
    browseLongStays: 'Ver longa duração',
    seeHotels: 'Ver hotéis',
  },
  newsletter: {
    eyebrow: 'Aberturas de longa duração · tarifas de baixa temporada',
    h2: 'As hospedagens que você ainda não pode reservar.',
    lead: 'A maioria das hospedagens de longa estadia deste site libera o inventário de inverno no fim de agosto, e ele esgota rápido. Contamos quando as janelas de reserva abrem, além das semanas de baixa temporada (novembro, fim de abril), quando as diárias caem enquanto as auroras seguem visíveis.',
    placeholder: 'Seu endereço de e-mail',
    subscribe: 'Inscrever-se',
    subscribing: 'Inscrevendo…',
    success: 'Quase lá: confirme sua inscrição no e-mail que acabamos de enviar.',
    errorPrefix: 'Não foi possível se inscrever, ',
    pleaseTryAgain: 'tente novamente',
    footnotePart1: 'Nunca enviamos spam. Cancele com um clique. Veja nossa ',
    footnoteLink: 'política de privacidade',
    footnotePart2: '.',
  },
  authorByline: {
    reviewed: 'Revisado pela rede editorial LaplandVibes',
    defaultNote:
      'Escrito e verificado com parceiros no terreno em toda a Lapônia finlandesa. Ganhamos comissão de afiliação nas reservas, mas isso nunca define quais hospedagens recomendamos.',
  },
  affiliateDisclosure:
    'Alguns links nesta página são links de afiliados. Se você reservar por eles, ganhamos comissão sem custo adicional. As propriedades são escolhidas por mérito, não pela comissão.',
  marginNoteDefault: 'Nota lateral',
  comparison: {
    property: 'Propriedade',
    verdict: 'Veredicto',
    nOutOf5: (n) => `${n} de 5`,
  },
  editorsPick: {
    kicker: 'Escolha do editor',
    perNight: '/ noite',
    note: 'Nota',
    cta: 'Ver tarifas e reservar',
  },
  propertyCard: {
    ...copyEN.propertyCard,
    short: '1–3 noites',
    medium: '3–6 noites',
    long: '7+ noites',
    nights: (n) => `${n} ${n === 1 ? 'noite' : 'noites'}`,
    minPrefix: 'a partir de',
    perNight: '/ noite',
    cta: 'Ver tarifas',
  },
  workInLaplandPromo: {
    inlineEyebrow: 'Pensando em trabalhar na Lapônia finlandesa?',
    inlineBodyPrefix:
      'Vagas sazonais, destinos de trabalho remoto e empregos em estações de esqui estão no nosso site irmão ',
    inlineBodyBrand: 'laplandwork.com',
    inlineBodySuffix: '.',
    inlineCta: 'Ver vagas',
    fullEyebrow: 'Site irmão · laplandwork.com',
    fullH2A: 'Pensando em trabalhar',
    fullH2B: 'na Lapônia finlandesa?',
    fullP1:
      'Boa parte das estadias longas listadas aqui é reservada por gente que veio originalmente para uma temporada de esqui, um contrato de engenharia no Ártico ou um mês de trabalho remoto, e ficou apaixonada pelo lugar. Se você está aqui por esse motivo, o lado de empregos tem o site próprio.',
    fullP2A: 'LaplandWork.com',
    fullP2B:
      ' é o hub central de vagas da Lapônia finlandesa, empregos de alta temporada na hospitalidade, vagas em estações de esqui, posições em canis de huskies, postos em hospitais e em engenharia em Rovaniemi, Levi, Saariselkä e Inari. Gratuito para candidatos, três planos para empregadores.',
    fullCta: 'Ver vagas',
    blocks: [
      { label: 'Hospitalidade de alta temporada', tag: 'Levi · Ylläs · Saariselkä' },
      { label: 'Canis de huskies', tag: 'Sazonal de nov a abr' },
      { label: 'Destinos para trabalho remoto', tag: 'O ano todo, fibra ótica' },
      { label: 'Saúde + engenharia', tag: 'Vagas permanentes' },
    ],
  },
  longTermRentals: {
    eyebrow: 'Mudar para a Lapônia · 6 meses ou mais',
    h2A: 'Procurando uma moradia de verdade,',
    h2B: 'não um aluguel de curta duração?',
    lead:
      'As propriedades deste site são aluguéis de curto e médio prazo via nosso parceiro de reservas, a resposta certa para viagens de até quatro semanas. Para mudanças de 6 meses, um ano ou permanentes, você precisa dos portais imobiliários finlandeses. Aqui estão os seis mais ativos na Lapônia.',
    process: {
      title: 'O processo típico',
      body:
        'E-mail ao locador ou corretor → visita ao imóvel → ficha de cadastro (comprovante de renda + consulta de crédito) → caução de 1 a 2 meses + primeiro mês de aluguel → chaves. Conte com 2 a 6 semanas de preparação.',
    },
    cost: {
      title: 'Quanto custa',
      body:
        'Em Rovaniemi, um quitinete: 600–900 €/mês. Em Levi/Saariselkä, um quitinete (temporada de inverno): 900–1 400 €. Fora da alta de inverno nas estações de esqui, os preços caem de 30 a 40 %. Todos os valores incluem água; eletricidade + aquecimento normalmente são à parte.',
    },
    abroad: {
      title: 'Vindo do exterior?',
      body:
        'Cidadãos da UE/EEE alugam livremente. Outros países precisam de autorização de residência (Migri leva de 1 a 4 meses para processar). O hub de empregos no laplandwork.com cobre Migri, registro no Kela, abertura de conta em banco finlandês, cartão de imposto e o checklist completo de mudança para a Lapônia.',
    },
    tags: {
      national: 'NACIONAL',
      rentalOnly: 'SOMENTE ALUGUEL',
      corporate: 'ALUGUEL CORPORATIVO',
      classifieds: 'DIRETO DO LOCADOR',
    },
  },
  tripRecommender: {
    weBook: 'Nós reservaríamos',
    items: [
      {
        forWho: 'Primeira viagem · 4–6 noites · com crianças',
        recommendation: 'Hotel boutique em Rovaniemi',
        rationale:
          'Um hotel de design como o Arctic Light ou o Arctic TreeHouse entrega proximidade do aeroporto, oferta gastronômica de verdade e logística da Vila do Papai Noel, sem expor a família a uma cabana isolada em que o aquecimento vira projeto noturno.',
        ctaLabel: 'Ver hotéis',
      },
      {
        forWho: 'Visitante recorrente · 7–14 noites · uma base só',
        recommendation: 'Estadia longa em cabana em Levi ou Saariselkä',
        rationale:
          'Acomode-se por uma semana. Um quitinete no Levi Spirit ou uma cabana de cumeeira nos arredores de Saariselkä oferece tarifa semanal, sauna privativa e tempo suficiente para mergulhar de fato na Lapônia, em vez de correr entre noites de lista de desejos.',
        ctaLabel: 'Ver longa duração',
      },
      {
        forWho: 'Bodas · aposentadoria · aluguel exclusivo para grupos',
        recommendation: 'Um lodge na natureza',
        rationale:
          'Um lodge na natureza é a forma mais exclusiva de marcar a ocasião. A Eagle View Suite no Iso-Syöte oferece isolamento acima da linha das árvores, e a vila do Wilderness Hotel Nangu acrescenta atividades guiadas pelos sami no lago Inari, ambas privativas o bastante para fazer toda a paisagem parecer sua, sem o preço de uma ocupação exclusiva.',
        ctaLabel: 'Ver lodges na natureza',
      },
    ],
  },
  home: {
    ...copyEN.home,
    metaTitle: 'Onde ficar na Lapônia finlandesa | StayInLapland',
    metaDescription:
      'Acomode-se na Lapônia finlandesa, cabanas por semana, hotéis de design em Rovaniemi, iglus de vidro icônicos e lodges silvestres depois da última estrada.',
    schemaName: 'StayInLapland, Estadias longas e hotéis boutique na Lapônia finlandesa',
    breadcrumbHome: 'Início',
    stats: { stays: 'Hospedagens escolhidas', bases: 'Bases na Lapônia', categories: 'Formas de se hospedar', months: 'Meses avaliados' },
    intro: {
      p1: 'As listas de "melhores hospedagens da Lapônia" quase sempre começam por um iglu de vidro, e seguem nessa fórmula. Este guia foi feito de outro jeito: noites realmente dormidas, indicações de quem mora aqui e só os lugares que ficam na memória depois da viagem.',
      p2: 'Dividimos as hospedagens da Lapônia em quatro categorias claras, estadias longas, hotéis, iglus de vidro e lodges na natureza. 16 propriedades selecionadas, todas visitadas pessoalmente. O roteiro mais comum: uma semana de cabana em Levi, duas noites em hotel de design em Rovaniemi e a última noite num iglu de vidro. Combinados, esses três formatos formam a Lapônia que faz a gente voltar.',
      p3: 'Este guia não agrega preços nem recicla avaliações. Fontes à vista, parcerias declaradas.',
    },
    authorNote:
      'Uma lista curta e selecionada à mão, escrita da Finlândia e checada com parceiros no terreno por toda a Lapônia.',
    fourWays: {
      kicker: 'Quatro jeitos de se hospedar',
      h2A: 'Escolha um.',
      h2B: 'Ou combine dois.',
      lead:
        'Escolha a categoria que combina com a viagem que você de fato quer. Depois escolha um destino. Quem reserva estadia longa costuma combinar duas, uma semana de base em cabana e duas noites em um formato diferente.',
    },
    propertyWord: 'propriedade',
    propertiesWord: 'propriedades',
    explore: 'Explorar',
    pullQuote: {
      text:
        'A Lapônia é maior do que as pessoas imaginam, e a estrada entre Rovaniemi e Saariselkä come meio dia em cada sentido. O maior erro de quem vem pela primeira vez é reservar três bases diferentes em cinco noites.',
      attr: 'Relatório de hospedagem da Lapônia · Lapin Liitto, 2024',
    },
    tripKicker: 'Já tem uma ideia do que quer?',
    tripH2: 'Os atalhos dos locais.',
    destKicker: 'Cinco bases na Lapônia',
    destH2: 'Onde na Lapônia?',
    destLead:
      'Cada destino tem uma lógica diferente para estadia longa. Clique para ver as propriedades recomendadas e por que escolher justamente aquela base em vez das outras.',
    readGuide: 'Ler',
    faqKicker: 'Perguntas reais, respostas reais',
    faqH2: 'Antes de clicar em qualquer botão.',
    faqs: [
      {
        q: 'O que conta como "estadia longa" neste site?',
        a: 'Tudo a partir de quatro noites entra como estadia longa, é o limiar em que a maioria das propriedades da Lapônia oferece tarifa semanal e uma cozinha de verdade começa a importar. As propriedades de longa duração em destaque pedem mínimos de 3 a 7 noites, dependendo da unidade; cada card mostra o mínimo.',
      },
      {
        q: 'Por que a home foca em estadias longas, e não em iglus de vidro?',
        a: 'Os iglus de vidro são o formato icônico da Lapônia e têm página dedicada. Mas as viagens mais lembradas pela Lapônia não são três noites de lista de desejos numa cúpula de vidro, são semanas de base em cabana ou hotel de design, com uma ou duas noites em outro formato. O site reflete como a Lapônia, de fato, recompensa quem volta.',
      },
      {
        q: 'O Kakslauttanen vale o preço de manchete mesmo?',
        a: 'Sim, mas só os iglus Kelo-Glass, não os iglus de vidro clássicos. O Kelo-Glass combina o teto panorâmico de vidro com uma estrutura de toras aquecida, kitchenette e lareira privativa. O mínimo de duas noites tira o melhor proveito. Melhores janelas de aurora: início de fevereiro e fim de março.',
      },
      {
        q: 'Onde se basear se a estadia longa envolve trabalho remoto?',
        a: 'Rovaniemi. É a única cidade da Lapônia com fibra ótica confiável, voos diários para Helsinque e Estocolmo e uma cena gastronômica de inverno que segue aberta nas baixas temporadas. O Arctic TreeHouse Resort e as cabanas de Ounasvaara oferecem tarifa semanal e mesas de trabalho de verdade.',
      },
    ],
    fullGuideCta: 'Ler o guia completo de reservas',
    categoryDescriptions: {
      longStays: 'Aluguéis semanais e mensais, vilas, cabanas de design, apartamentos de esqui.',
      hotels: 'Hotéis boutique, de design e clássicos da Lapônia para estadias curtas.',
      glassIgloos: 'O formato icônico da Lapônia, quatro resorts à altura do nome.',
      wilderness: 'Depois da última estrada, dois refúgios para viajantes sérios.',
    },
    categoryNames: {
      longStays: 'Estadias longas',
      hotels: 'Hotéis',
      glassIgloos: 'Iglus de vidro',
      wilderness: 'Lodges na natureza',
    },
  },
  hotels: {
    metaTitle: 'Hotéis boutique e de design na Lapônia finlandesa',
    metaDescription:
      'Cinco hotéis da Lapônia que valem a reserva, Arctic TreeHouse, Arctic Light, Levi Spirit, Lapland Hotels Saaga e Star Arctic. Para estadias curtas e trabalho.',
    breadcrumb: 'Hotéis',
    pageHero: {
      eyebrow: 'Cinco hotéis escolhidos a dedo',
      title: 'Hotéis na Lapônia.',
      subtitle:
        'Hotéis boutique, de design e clássicos confiáveis da Lapônia, para estadias curtas, viagens a trabalho e aquelas duas noites de cidade em volta de uma base mais longa em cabana.',
    },
    authorNote:
      'Cinco propriedades cruzadas com as informações publicadas pelos operadores e avaliações recentes de hóspedes na temporada 2025/26.',
    introP1:
      'A Lapônia tem vários hotéis de rede de gama média, Scandic, Sokos, que cumprem bem o básico por 90–140 €/noite. Eles não entram nesta lista; a decisão de reservá-los se resume a "o mais perto do aeroporto, o mais barato naquela semana".',
    introP2:
      'Os cinco hotéis abaixo conquistam seu lugar por outro motivo, design, arquitetura, vista ou combinação de serviços. São a resposta certa quando você quer um hotel que faça parte do motivo da viagem, não apenas uma base.',
    picksKicker: 'Cinco escolhas',
    picksH2: 'Selecionado a dedo, não agregado.',
    pullQuote: {
      text:
        'Rovaniemi foi reconstruída três vezes depois de 1944, a terceira por Alvar Aalto, que desenhou o plano da cidade no formato de uma galhada de rena. O Arctic Light Hotel fica dentro dessa galhada, num edifício de 1939 que sobreviveu às três reconstruções.',
      attr: 'Architectural Record · matéria sobre o Arctic Light Hotel',
    },
    glanceKicker: 'As cinco em um olhar',
    glanceH2: 'Comparação com opinião.',
    rubric:
      'Cinco pontos é o melhor. Design = estilo interior e qualidade dos materiais. Arquitetura = o próprio edifício. Atividades = esqui pé na pista, canis de huskies, cultura local a menos de 15 min.',
    axes: ['Design', 'Arquitetura', 'Spa / sauna', 'Atividades', 'Restaurante'],
    rows: [
      { name: 'Arctic TreeHouse', verdict: 'O melhor hotel de design de Rovaniemi.' },
      { name: 'Arctic Light', verdict: 'O edifício mais interessante do ponto de vista arquitetônico.' },
      { name: 'Levi Spirit', verdict: 'Clima só para adultos. Spa + esqui pé na pista.' },
      { name: 'Lapland Hotels Saaga', verdict: 'Clássico esqui pé na pista em Ylläs. Spa incluído.' },
      { name: 'Star Arctic', verdict: 'No alto · céu mais escuro · mistura cabana/hotel.' },
    ],
    marginLabel: 'Dica de quem está por dentro',
    marginBody:
      'Arctic TreeHouse e Levi Spirit têm restaurantes próprios, Rakas (TreeHouse) e Spirit Kitchen (Levi). Os dois trabalham com produto local. Se reservar qualquer um deles, reserve a mesa no mesmo dia em que reservar o quarto: nos fins de semana eles lotam antes do hotel.',
    counterKicker: 'Contraindicação honesta',
    counterH2: 'Quando hotel não é a resposta.',
    counterP1:
      'Para 5 noites ou mais no mesmo ritmo de viagem, esquiar, cozinhar, sauna, repetir, uma cabana ou apartamento de estadia longa ganha de qualquer um desses hotéis em custo por noite e qualidade de vida. O hotel acerta quando os dias são diferentes entre si.',
    counterP2: 'Para uma única noite de aurora na lista dos sonhos, os iglus de vidro vencem. Nenhum dos hotéis acima tem teto de vidro.',
    seeLong: 'Ver estadias longas',
    seeIgloos: 'Ver iglus de vidro',
    browseAll: 'Ver toda a oferta da Trip.com',
  },
  longStays: {
    metaTitle: 'Estadias longas na Lapônia finlandesa | StayInLapland',
    metaDescription:
      'Cinco propriedades de estadia longa na Lapônia para uma semana ou mais, Arctic TreeHouse, penthouses Levi, chalés Ounasvaara, cabanas Pyhä e villas de Inari.',
    breadcrumb: 'Estadias longas',
    pageHero: {
      eyebrow: 'Cinco propriedades de longa duração',
      title: 'Acomode-se por uma semana. Ou por um mês.',
      subtitle:
        'A resposta certa para visitantes recorrentes, profissionais em trabalho remoto, famílias e qualquer viagem à Lapônia com mais de três noites. Tarifas semanais, saunas privativas, cozinhas de verdade, da suíte de design ao apartamento pé na pista.',
    },
    authorNote:
      'Cinco propriedades cruzadas com parceiros no terreno e com os calendários de tarifa semanal da temporada 2025/26.',
    pickWhy: [
      'O Arctic TreeHouse Resort é a resposta quando a pergunta é "como faço uma estadia longa de verdade em Rovaniemi sem alugar uma cabana crua?" Suítes de design integradas à floresta de pinheiros na borda do Santa Park, cada uma com cozinha compacta e uma fachada panorâmica de vidro voltada para as árvores.',
      'A tarifa semanal cai cerca de 25% em relação à diária, e cada suíte dá acesso à vila de saunas do resort, uma semana aqui sai, por noite, mais barata que uma sequência de reservas de uma noite, com muito mais espaço para realmente se instalar.',
      'É também a base mais flexível desta lista: aeroporto, restaurantes e cultura de design de Rovaniemi estão a dez minutos, enquanto a suíte em si só dá para a floresta. O botão "Ver tarifas" abaixo leva direto à oferta semanal.',
    ],
    pickCaveat:
      'O desconto semanal aparece no sistema de reservas assim que você seleciona 7+ noites, ele nem sempre consta na diária exibida. As semanas de pico no Natal esgotam com meses de antecedência; meados de novembro e fim de abril saem bem mais baratos.',
    pullQuote: {
      text:
        'O briefing era desaparecer na crista. Usar a madeira que veio da própria propriedade, vidro voltado apenas para o norte, e nunca erguer a cobertura acima da linha das árvores. O que você vê já estava ali, só tornamos possível morar lá dentro.',
      attr: 'Studio Puisto · declaração do arquiteto',
    },
    runnersKicker: 'As outras quatro',
    runnersH2: 'Do apartamento pé na pista às villas à beira do lago.',
    runnersLead:
      'Cada uma das quatro abaixo tem sua própria lógica de estadia longa, proximidade de um sistema de teleféricos, infraestrutura de trabalho remoto durante a semana, cozinha boa para famílias ou uma base cultural à beira de um lago.',
    weeklyKicker: 'Como funcionam as tarifas semanais',
    weeklyH2: 'O preço cai mais rápido do que se imagina.',
    weeklyP1:
      'Nas propriedades desta página, a tarifa semanal sai em média <strong>23% mais barata por noite</strong> do que a diária de balcão. A Levi Residences cai 30%, o Pyhä Bear’s Lodge cai 18%, a Arctic TreeHouse cai 25%. A maioria não anuncia isso, o desconto vive dentro do sistema de reservas assim que você seleciona 7 noites ou mais.',
    weeklyP2:
      'As semanas de transição, <strong>meados de novembro</strong> (logo antes de a neve firmar) e <strong>fim de abril</strong> (logo depois do degelo), tiram outros 30–50% por cima. A aurora segue ativa nas duas janelas. É o ponto ideal para estadias longas com agenda de trabalho flexível.',
    marginLabel: 'Estratégia de reserva',
    marginBody:
      'Para uma estadia de 4 semanas, dividi-la entre duas propriedades pode ganhar de uma reserva única, você evita o pico de "semana cheia" que bate no Natal e nas férias escolares de esqui de fevereiro e, de quebra, conhece duas partes da Lapônia. O dia de transferência leva meia jornada; a economia costuma pagar duas noites extras em outro lugar.',
    counterKicker: 'Contraindicação honesta',
    counterH2: 'Quando NÃO reservar estadia longa.',
    counterP1:
      'Para uma primeira viagem de 2–3 noites, pule os aluguéis de estadia longa. O check-in, as compras e o imposto de "aprender a usar o fogão" anulam a economia. Reserve um hotel.',
    counterP2:
      'Para uma única noite de aurora na lista dos sonhos, os iglus de vidro são a resposta melhor. O teto de vidro é a experiência por que você veio; uma cabana de estadia longa te dá uma janela.',
    counterP3:
      'Para grupos com mobilidade mista, ligue direto para a propriedade antes de reservar, a maioria das cabanas de estadia longa não é sem degraus, e a sauna em particular costuma ficar no porão, sobre piso de madeira.',
    seeHotels: 'Ver hotéis',
    seeIgloos: 'Ver iglus de vidro',
    browseAll: 'Ver toda a oferta da Trip.com',
  },
  glassIgloos: {
    metaTitle: 'Iglus de vidro na Lapônia finlandesa | StayInLapland',
    metaDescription:
      'Os resorts de iglu de vidro da Lapônia finlandesa à altura do nome, Kakslauttanen, Levin Iglut, Aurora Village e Aurora Pyramids. Ranqueados por céu e acesso.',
    breadcrumb: 'Iglus de vidro',
    pageHero: {
      eyebrow: 'O formato icônico da Lapônia',
      title: 'Iglus de vidro na Lapônia finlandesa.',
      subtitle:
        'A cúpula de teto de vidro finlandesa foi inventada em Saariselkä. Quatro propriedades ficam à altura do nome hoje, e a diferença entre elas é real.',
    },
    authorNote:
      'Quatro resorts cruzados com as informações publicadas pelos operadores e avaliações recentes de hóspedes. Preços verificados pela última vez: fevereiro de 2026.',
    pickWhy: [
      'Kakslauttanen está em toda lista porque merece. O resort começou em Saariselkä em 1973, numa época em que "hospedagem turística em Saariselkä" era um albergue de madeira e a aurora se assistia do estacionamento, e inventou mais tarde o iglu de vidro moderno.',
      'Há uma bifurcação: reserve os iglus Kelo-Glass, não os iglus de vidro clássicos. O Kelo-Glass combina o teto panorâmico de vidro com uma estrutura de toras aquecida, uma cozinha própria e uma lareira. Os clássicos são menores, mais movimentados, e o banheiro fica a 50 metros de caminhada, a −25 °C.',
      'A diferença de preço gira em torno de 200 €/noite. Ao longo de três noites, o Kelo-Glass paga o ágio só por não precisar calçar as botas de neve às 4h da manhã.',
    ],
    pickCaveat:
      'Os iglus de vidro clássicos custam uns 30% menos, mas a experiência é nitidamente pior. Se o seu teto de orçamento é 400 €/noite, veja Aurora Village ou Aurora Pyramids, o mesmo céu, muitas vezes num cenário de lago ou natureza melhor situado.',
    pullQuote: {
      text:
        'O primeiro iglu de vidro foi construído para que os hóspedes vissem a aurora sem ficar do lado de fora a −30 °C. Cinquenta anos depois, esse ainda é todo o argumento, e a parte que todo imitador erra é o que acontece quando a aurora vai embora.',
      attr: 'História de origem do Kakslauttanen · 1973',
    },
    runnersKicker: 'Três alternativas',
    runnersH2: 'Quando o Kakslauttanen não é a resposta.',
    glanceKicker: 'As quatro em um olhar',
    glanceH2: 'Comparação com opinião.',
    rubric:
      'Cinco pontos é o melhor. Acesso = facilidade a partir do aeroporto mais próximo. Céu = escuridão + geometria de observação. Privacidade = isolamento em relação às unidades vizinhas. Conforto = banheiro, cozinha, isolamento acústico. Reputação = o quanto o resort entrega o que promete no folheto.',
    axes: ['Acesso', 'Céu', 'Privacidade', 'Conforto', 'Reputação'],
    rows: [
      { name: 'Kakslauttanen', verdict: 'O original. Caro. Vale a pena só no Kelo-Glass.' },
      { name: 'Levin Iglut', verdict: 'Melhor engenharia. Camas-aurora motorizadas.' },
      { name: 'Aurora Village', verdict: 'A sensação mais remota. A 30 min de Ivalo.' },
      { name: 'Aurora Pyramids', verdict: 'Os reflexos do lago dobram a aurora.' },
    ],
    marginLabel: 'O trade-off',
    marginBody:
      'Nenhum resort ganha nos cinco eixos. O Aurora Pyramids supera todos no reflexo do céu, mas perde no acesso (40 min de Ivalo). O Levin Iglut ganha na engenharia, mas fica dentro de uma vila de esqui movimentada. Escolha a prioridade que mais importa.',
    counterKicker: 'Contraindicação honesta',
    counterH2: 'Quando ignorar iglus de vidro de vez.',
    counterP1:
      'Para estadias de quatro noites ou mais, duas noites de iglu de vidro mais um bloco em cabana de estadia longa fazem uma viagem melhor do que quatro noites de iglu. A novidade se esgota depois da segunda noite; um hirsimökki com sauna privativa entrega a parte da Lapônia que uma cúpula de vidro não consegue dar.',
    counterP2:
      'No Natal (22 dez. → 2 jan.) os preços triplicam e 90% da oferta vai para os pacotes turísticos britânicos antes da primavera. Mude as datas para a segunda metade de janeiro, se puder, mais frio, mais escuro, metade do preço, aurora melhor.',
    seeLong: 'Ver estadias longas',
    bookingGuideBtn: 'Guia de reservas',
    browseAll: 'Ver toda a oferta da Trip.com',
  },
  wilderness: {
    metaTitle: 'Lodges na natureza da Lapônia | StayInLapland',
    metaDescription:
      'Lodges na natureza depois da última estrada, suítes Iso-Syöte Eagle View e Wilderness Hotel Muotka. Aurora acima das árvores e serviço de despertar-aurora.',
    breadcrumb: 'Natureza',
    pageHero: {
      eyebrow: 'Depois da última estrada',
      title: 'Lodges na natureza.',
      subtitle:
        'A nova tradição da Lapônia, propriedades arquitetônicas dos anos 2010 em lugares onde a estrada turística acaba. Dois lodges, duas definições diferentes de natureza.',
    },
    authorNote:
      'Os dados das duas propriedades foram verificados com as informações publicadas pelos operadores e avaliações recentes de hóspedes.',
    pickWhy: [
      'As suítes Iso-Syöte Eagle View ficam a 432 m no fjell de verdade mais ao sul da Finlândia, suítes de pinho com observação de aurora acima da linha das árvores e sem o longo voo até o norte.',
      'As fachadas de vidro dão para o céu aberto, então, em uma noite limpa, o arco auroral se lê da própria cama. Você observa a aurora da sua suíte no alto da crista, e não de um abrigo compartilhado, privacidade sem o compromisso de uma ocupação exclusiva.',
      'E é o lodge na natureza sério mais fácil de alcançar: a 90 minutos do aeroporto de Oulu, o que o torna o raro refúgio que funciona até para uma viagem curta.',
    ],
    pickCaveat:
      'O botão "ver tarifas" deste site leva a uma busca na Trip.com pela oferta reservável mais próxima. As Eagle View Suites esgotam primeiro nos fins de semana de céu limpo, reserve as datas, não a previsão.',
    pullQuote: {
      text:
        'A palavra "remoto" costuma ser linguagem de marketing. Aqui em cima é verdade. A estrada acaba, a linha das árvores fica abaixo de você, e a única luz que resta é a que o céu decide criar. Num lugar assim não se aparece sem aviso, você se compromete com ele.',
      attr: 'Na estrada do fjell de Iso-Syöte, olhando para cima',
    },
    runnersKicker: 'A outra opção',
    runnersH2: 'Quando uma suíte inteira no alto da crista é exagero.',
    glanceKicker: 'Duas definições de natureza',
    glanceH2: 'Em um olhar.',
    rubric:
      'Isolamento = o quanto você se sente realmente sozinho. Serviço = proporção de equipe por hóspede. Atividades = experiências guiadas incluídas ou disponíveis.',
    axes: ['Acesso', 'Isolamento', 'Serviço', 'Atividades', 'Fator irrepetível'],
    rows: [
      { name: 'Iso-Syöte Eagle View', verdict: 'Acima da linha das árvores. O mais fácil a partir do sul da Finlândia.' },
      { name: 'Hotel Muotka', verdict: 'Serviço de despertar-aurora na propriedade. Conforto de hotel.' },
    ],
    marginLabel: 'Despertar-aurora no Muotka',
    marginBody:
      'O Wilderness Hotel Muotka mantém um caçador de auroras de plantão que acompanha o índice Kp e bate fisicamente nas portas quando as auroras se abrem. É o melhor recurso de qualquer propriedade deste guia e compensa a diferença de preço para viagens de uma única noite.',
    counterKicker: 'Contraindicação honesta',
    counterH2: 'Quando lodge na natureza não é a resposta.',
    counterP1:
      'Os dois lodges ficam a 1–3 horas de transfer do aeroporto mais próximo. Para viagens de menos de três noites, o tempo em trânsito é desproporcional.',
    counterP2:
      'Para quem viaja ao Ártico pela primeira vez: faça antes uma viagem a Rovaniemi ou Saariselkä. Um lodge na natureza de ocupação exclusiva é desperdício em alguém que ainda está descobrindo o que é −25 °C.',
    seeLong: 'Ver estadias longas',
    browseAll: 'Ver toda a oferta da Trip.com',
  },
  bookingGuide: {
    metaTitle: 'Guia de reservas da Lapônia, quando, como, o que levar',
    metaDescription:
      'Guia prático de reservas da Lapônia, quando vir para a melhor aurora, como chegar, o que levar, quanto custa de verdade e dicas de quem é de lá.',
    breadcrumb: 'Guia de reservas',
    pageHero: {
      eyebrow: 'Planeje uma viagem de verdade',
      title: 'O guia de reservas da Lapônia.',
      subtitle:
        'Conselhos práticos e com opinião. Quando vir, como chegar, o que levar, quanto custa de verdade.',
    },
    sections: [
      {
        title: 'Quando vir',
        body: [
          'A temporada de aurora vai do fim de agosto ao começo de abril. As janelas mais fortes são setembro-outubro e fevereiro-março, quando as longas noites escuras coincidem com o clima solar ativo.',
          'Evite do fim de novembro a meados de dezembro: escuro, mas a neve costuma ficar irregular e muitas atividades ainda não começaram.',
          'Natal e Ano-Novo esgotam com 9 meses de antecedência e os preços triplicam. A escolha de quem é de lá é a segunda metade de janeiro, mais calma, mais fria, aurora melhor.',
        ],
      },
      {
        title: 'Como chegar',
        body: [
          'Três aeroportos da Lapônia cobrem quase tudo o que você vai reservar. Rovaniemi (RVN) para a Vila do Papai Noel e o sul, Kittilä (KTT) para Levi e Ylläs, Ivalo (IVL) para Saariselkä, Inari e o norte.',
          'Helsinque (HEL) → Lapônia é um voo doméstico de 90 minutos. Voos diretos de Londres, Berlim e Paris também existem de dezembro a março.',
          'Trens: o noturno Helsinque–Rovaniemi é lento, mas o trecho pela costa do golfo de Bótnia passando por Kemi é genuinamente bonito e o vagão fica cheio de gente local fazendo a mesma viagem.',
        ],
      },
      {
        title: 'O que levar',
        body: [
          'A maioria das propriedades fornece o agasalho ártico (macacões para −30 °C, botas, luvas, gorros) incluso ou por uma pequena taxa diária. Confirme antes de despachar uma mala cheia de equipamento de esqui.',
          'As camadas importam mais do que a espessura, base de merino + fleece no meio + casaco corta-vento. Algodão é fatal.',
          'Câmeras: leve baterias reservas junto ao corpo, dentro do casaco. O frio as esvazia rápido.',
        ],
      },
      {
        title: 'A real do orçamento',
        body: [
          'Cabana de estadia longa (por semana): 140–280 €/noite, acomoda 4–6.',
          'Hotel boutique: 140–420 €/noite, café da manhã geralmente incluso.',
          'Iglu de vidro, alta temporada: 400–1 500 €/noite para dois.',
          'Suíte em lodge na natureza: 220–950 €/noite conforme a propriedade.',
          'Atividades (safári de huskies, snowmobile, caça à aurora): em geral 120–200 € por pessoa por passeio, à parte.',
        ],
      },
      {
        title: 'Políticas de cancelamento',
        body: [
          'A maioria das propriedades da Lapônia migrou para tarifas não reembolsáveis nas semanas de pico. Leia as letras miúdas antes de clicar em "reservar".',
          'Seguro de viagem com cancelamento por qualquer motivo vale muito a pena em viagens acima de 2 000 €. Caçadores de aurora cancelam por causa do tempo o tempo todo.',
          'Nossos parceiros de reservas honram as condições de cancelamento exibidas na hora de reservar, reserve pelo redirecionamento deste site para manter a tarifa visível e consistente.',
        ],
      },
      {
        title: 'Dicas de quem é de lá',
        body: [
          'Saariselkä e Inari são mais frias, mais escuras e têm aurora mais forte que Rovaniemi, mas Rovaniemi tem o aeroporto, as atividades, a Vila do Papai Noel. Combine bases.',
          'Se você só tem 3 noites, faça-as num só lugar. A Lapônia é maior do que se imagina e os transfers comem dias.',
          'As previsões de aurora (NOAA, Aurora Service Europe) acertam a 30–90 minutos, não a dias. Fique flexível.',
        ],
      },
    ],
    readyTitle: 'Pronto para reservar?',
    readyLead:
      'Explore propriedades escolhidas a dedo por categoria ou vá direto à disponibilidade ao vivo na Trip.com.',
    browseAll: 'Ver todas as hospedagens da Lapônia',
  },
  whenToGo: {
    metaTitle: 'Quando visitar a Lapônia, guia mês a mês | StayInLapland',
    metaDescription:
      'Guia mês a mês para visitar a Lapônia finlandesa, quando a aurora é mais forte, quando a neve firma e quais semanas os locais reservam para si.',
    breadcrumb: 'Quando ir',
    pageHero: {
      eyebrow: 'Mês a mês',
      title: 'Quando visitar a Lapônia.',
      subtitle:
        'O mês certo depende da viagem. Aurora em primeiro lugar, esqui em primeiro lugar, custo-benefício de estadia longa, pico de Natal, cada um tem seu ponto ideal. Aqui está o mês a mês editorial.',
    },
    authorNote:
      'Compilado a partir de relatos de parceiros no terreno por toda a Lapônia finlandesa.',
    pullQuote: {
      text:
        'A maioria das auroras sobre a Lapônia finlandesa aparece entre o anoitecer e a madrugada, e os longos meses escuros do outono ao início da primavera oferecem as melhores chances. Céu limpo e um pouco de paciência importam mais do que a data exata.',
      attr: 'LaplandVibes, a partir dos registros de auroras dos nossos parceiros por toda a Lapônia finlandesa',
    },
    months: [
      {
        name: 'Setembro',
        pitch: 'Abre a temporada de aurora',
        body:
          'Começam as longas noites escuras. A neve ainda não caiu, é o período da "ruska", quando a bétula vira vermelha e dourada. A aurora se destaca contra o chão nu, e as cores são as mais fotografadas de todos os meses.',
        bestFor: ['Fotógrafos', 'Estadias curtas focadas em aurora', 'Combo trilha + aurora'],
        avoidIf: ['Você veio especificamente pela neve'],
      },
      {
        name: 'Outubro',
        pitch: 'Média temporada tranquila',
        body:
          'Primeiras nevascas, mas o chão raramente fica branco antes do fim do mês. Os hotéis aplicam tarifa de média temporada (−30% do pico), a aurora está ativa, pouquíssimos turistas. A janela de aurora mais barata com toda a infraestrutura de atividades funcionando.',
        bestFor: ['Caçadores de aurora com orçamento curto', 'Chegada de estadia longa antes do pico'],
        avoidIf: ['Você quer garantia de esqui ou snowmobile'],
      },
      {
        name: 'Novembro',
        pitch: 'Começa a noite polar, a neve firma',
        body:
          'O começo de inverno mais frio da Lapônia. No extremo norte (Utsjoki), a noite polar começa nos últimos dias do mês. A neve passa a firmar no fim de novembro, até o fim do mês a maioria dos resorts e hotéis de neve abre. O fim de novembro é o melhor custo-benefício absoluto para estadias longas.',
        bestFor: ['Estadias longas a −50% da tarifa', 'Visitantes recorrentes que conhecem o frio'],
        avoidIf: ['Viajantes de primeira vez (neve inconsistente)'],
      },
      {
        name: 'Dezembro',
        pitch: 'Pico de Natal',
        body:
          'Do Natal ao Ano-Novo tudo está no pico, preços de pico, demanda de pico, turismo do Papai Noel no pico em Rovaniemi. Os iglus de vidro triplicam de preço, os hotéis de neve abrem por completo. A aurora segue ativa, mas o tempo costuma ficar mais nublado.',
        bestFor: ['Viagens de família com tema de Natal', 'Iniciantes que querem neve garantida'],
        avoidIf: ['Viagem sensível ao orçamento', 'Estadias focadas em aurora'],
      },
      {
        name: 'Janeiro',
        pitch: 'A escolha de quem é de lá',
        body:
          'A segunda metade de janeiro é o ponto ideal tranquilo, os preços de pico recuaram, os dias se alongam de forma perceptível, a neve está estável, a aurora no auge da atividade. As multidões de Natal foram embora e as das férias de fevereiro ainda não chegaram.',
        bestFor: ['Estadias longas', 'Lua de mel', 'Fotografia de aurora'],
        avoidIf: ['Você precisa de calor de qualquer tipo'],
      },
      {
        name: 'Fevereiro',
        pitch: 'O mês de aurora mais forte',
        body:
          'De meados de fevereiro a meados de março é, estatisticamente, a janela de aurora mais forte do ano, sobreposição de céu escuro com clima solar ativo. As estadias longas voltam à tarifa de pico por causa das férias escolares europeias; reserve com 6 meses de antecedência.',
        bestFor: ['Iglus de vidro', 'Viagens de aurora na lista dos sonhos'],
        avoidIf: ['Quem planeja em cima da hora'],
      },
      {
        name: 'Março',
        pitch: 'A luz volta',
        body:
          'Os dias se alongam rápido, até o fim do mês você tem 13 horas de luz. A aurora segue forte nas madrugadas escuras e no fim da tarde. Esqui de primavera nos fjells voltados ao sul. O mês de esqui mais fotogênico.',
        bestFor: ['Estadias longas com esqui pé na pista', 'Quem quer luz + aurora'],
        avoidIf: ['Fotógrafos que vieram pelo clima de noite polar'],
      },
      {
        name: 'Abril',
        pitch: 'Neve de primavera + luz',
        body:
          'A neve ainda é profunda e o esqui nos fjells, excelente. A temporada de aurora termina no início de abril, quando as noites ficam claras demais. O fim de abril é média temporada de novo, as tarifas caem 30%, as propriedades seguem abertas, o sol fica acima do horizonte por mais de 16 horas.',
        bestFor: ['Estadias longas de esqui no fim da temporada', 'Esqui cross-country'],
        avoidIf: ['Viagens focadas em aurora'],
      },
    ],
    bestForLabel: 'Ideal para',
    skipIfLabel: 'Pule se',
    cheatKicker: 'A cola dos locais',
    cheatH2: 'Três semanas que os locais reservam para si.',
    cheatP1:
      '<strong class="text-charcoal">Fim de novembro (semanas 47–48).</strong> A neve acabou de firmar, começam as semanas mais escuras do ano, a temporada de aurora a pleno vapor. Tarifas de estadia longa 40–50% abaixo do pico. Algumas propriedades ainda não estão totalmente abertas, confirme antes de reservar.',
    cheatP2:
      '<strong class="text-charcoal">Segunda metade de janeiro (semanas 3–4).</strong> A melhor semana da temporada na relação aurora vs. custo. Multidões de Natal foram embora, férias de fevereiro ainda não começaram, dias se alongando, neve bem assentada. É quando o nosso editor tira férias.',
    cheatP3:
      '<strong class="text-charcoal">Fim de abril (semanas 16–17).</strong> Pico do esqui de primavera, sol 16h/dia acima do horizonte, neve ainda profunda nas encostas voltadas ao norte. A janela de aurora fechou, mas só a luz já vale a viagem. As tarifas caem 30% depois da Páscoa.',
    marginLabel: 'Momento de reservar',
    marginBody:
      'Para o pico de fevereiro: reserve com 6 meses. Fim de janeiro: 3 meses. Média temporada (novembro, fim de abril): 6–8 semanas bastam. Natal / Réveillon: 9 meses no mínimo, e tenha datas alternativas porque a oferta de pico some na primavera.',
    readGuide: 'Ler o guia de reservas',
    seeLong: 'Ver estadias longas',
  },
  destinationPage: {
    metaTitleSuffix: 'Onde ficar | StayInLapland',
    pageHeroEyebrow: 'Destino na Lapônia',
    notFoundKicker: 'Página não encontrada',
    notFoundTitle: 'Destino fora da lista.',
    notFoundBody: 'No momento cobrimos Rovaniemi, Levi, Saariselkä, Inari e Ylläs.',
    backHome: 'Voltar ao início',
    authorNoteFor: (n) => `A leitura de estadia longa para ${n}, escrita e checada com parceiros no terreno.`,
    recommendedIn: (n) => `Recomendado em ${n}`,
    whereToStay: 'Onde ficar de verdade.',
    minStayLabel: 'Estadia mín.:',
    perNight: '/ noite',
    checkRates: 'Ver tarifas',
    seeAll: 'Ver tudo',
    liveAvailabilityIn: (n) => `Buscar disponibilidade ao vivo em ${n}?`,
    networkLeadA: 'Nossa rede ranqueia apenas 16 propriedades. A Trip.com lista todo o resto que opera em ',
    networkLeadB: ' neste inverno, datas flexíveis, filtro por comodidade, a oferta completa.',
    browseInDest: (n) => `Buscar na Trip.com, ${n}`,
    imageNote:
      'As imagens são ilustrativas: mostram o tipo de hospedagem e a paisagem da região, não os quartos do próprio estabelecimento.',
    landscapeAlt: (n) => `Paisagem de inverno em ${n}, Lapônia finlandesa`,
    bucketLabels: {
      'long-stays': 'estadias longas',
      'hotels': 'hotéis',
      'glass-igloos': 'iglus de vidro',
      'wilderness': 'natureza',
    },
  },
  hotelsData: [
    {
      name: 'Arctic TreeHouse Resort',
      location: 'Rovaniemi',
      highlight: 'Hotel de design · suítes na borda da floresta',
      description:
        'Um hotel de design de 70 suítes encaixado no pinheiral atrás do Santa Park, em Rovaniemi. Cada suíte tem uma fachada panorâmica de vidro voltada para as árvores e um interior de minimalismo nórdico. Restaurante próprio forte, Rakas, com produto local, e a vila de saunas do resort é aberta a todos os hóspedes.',
    },
    {
      name: 'Arctic Light Hotel',
      location: 'Centro de Rovaniemi',
      highlight: 'Boutique de 57 quartos · edifício funcionalista de 1939',
      description:
        'Um hotel boutique de 57 quartos num edifício funcionalista de 1939, antiga sede do jornal local, reconstruído após a destruição de Rovaniemi na Guerra da Lapônia de 1944. Cada andar tem um tema interior diferente; a suíte de cobertura tem sauna própria. O hotel mais sério da cidade no quesito arquitetura.',
    },
    {
      name: 'Levi Spirit',
      location: 'Levi',
      highlight: 'Villas de design · spa · esqui pé na pista',
      description:
        'Hotel-villas de alto padrão na base do fjell de Levi. Banheiras externas privativas, sauna em cada villa, acesso pé na pista aos teleféricos e spa completo. Feito para adultos, sem programa infantil, só quartos silenciosos e boa comida.',
    },
    {
      name: 'Lapland Hotels Saaga',
      location: 'Ylläsjärvi (Ylläs)',
      highlight: 'Clássico de Ylläs · esqui pé na pista · spa e piscina',
      description:
        'O hotel clássico do lado mais tranquilo de Ylläs, no vilarejo de Ylläsjärvi, a cerca de cem metros do teleférico Iso-Ylläs, com esqui pé na pista no inverno. Piscina, spa e academia estão incluídos para os quartos standard e superior; os apartamentos somam sauna privativa. O bufê do restaurante Biegga tem vista para o monte e para o lago Ylläsjärvi.',
    },
    {
      name: 'Star Arctic Hotel',
      location: 'Saariselkä',
      highlight: 'No alto · céu mais escuro · mistura de suítes e cabanas de vidro',
      description:
        'Uma propriedade híbrida, quartos de hotel clássicos mais cabanas de teto de vidro no ponto mais alto acima de Saariselkä. Poluição luminosa praticamente nula. Os quartos de hotel têm a mesma vista do alto por uma janela enorme e custam cerca de 40% menos que as cabanas.',
    },
  ],
  longStaysData: [
    {
      name: 'Arctic TreeHouse Resort, estadia longa',
      location: 'Rovaniemi',
      highlight: 'Suítes de design · tarifas semanais · vila de saunas',
      description:
        'Suítes de design com vista para o pinheiral, na borda do Santa Park. A tarifa semanal cai 25% em relação à diária. Cada suíte tem kitchenette, fachada panorâmica de vidro e acesso à vila de saunas do resort, uma das poucas formas de fazer uma estadia longa decente em Rovaniemi sem alugar cabana crua.',
    },
    {
      name: 'Levi Residences, suítes penthouse',
      location: 'Vila de Levi',
      highlight: '2 quartos · pé na pista · sauna privativa · tarifas semanais',
      description:
        'Apartamentos de dois quartos na base do fjell de Levi, a poucos passos dos teleféricos e da vila. Cada unidade tem sauna privativa a lenha, cozinha de verdade e mínimo de quatro noites de dezembro a março. A escolha para famílias que passam uma semana esquiando sem abrir mão das comodidades urbanas.',
    },
    {
      name: 'Lapland Hotels Ounasvaara Chalets',
      location: 'Rovaniemi · fjell de Ounasvaara',
      highlight: 'Pé na pista · a pé do centro de Rovaniemi',
      description:
        'Chalés totalmente equipados no fjell de Ounasvaara. Pé na pista no inverno, dez minutos a pé do centro de Rovaniemi. A opção de estadia longa mais flexível se você quer misturar comodidade urbana e manhãs árticas.',
    },
    {
      name: "Lapland Hotels Bear's Lodge",
      location: 'Parque Nacional de Pyhä-Luosto',
      highlight: 'Parque nacional na porta · sauna privativa · famílias',
      description:
        'Cabanas tradicionais de tora ao lado do Parque Nacional de Pyhä-Luosto. Cozinhas completas, saunas privativas a lenha, acesso ao lago. A resposta certa para uma estadia em família de várias semanas em que os dias giram em torno de raquetes de neve e trilhas de cross-country, não de passeios turísticos.',
    },
    {
      name: 'Wilderness Hotel Nangu, villas à beira do lago',
      location: 'Margem sul do lago Inari',
      highlight: 'Atividades guiadas por samis · vista do lago · tarifas de estadia longa',
      description:
        'Villas à beira do lago Inari com quartos voltados para a água. Pesca no gelo guiada por samis, esqui na natureza com guarda-florestal, o Museu Sami de Inari a vinte minutos. Tarifas de estadia longa a partir de quatro noites, a mais cultural das estadias longas à beira de lago.',
    },
  ],
  glassIgloosData: [
    {
      name: 'Kakslauttanen Arctic Resort',
      location: 'Saariselkä',
      highlight: 'O iglu de vidro original · Kelo-Glass disponível',
      description:
        'O resort que inventou o iglu de vidro moderno. Escolha o Kelo-Glass em vez dos iglus de vidro clássicos, o Kelo combina o teto panorâmico de vidro com uma estrutura de toras aquecida, kitchenette e lareira. Duas noites no mínimo para aproveitar ao máximo.',
    },
    {
      name: 'Levin Iglut',
      location: 'Fjell de Levi',
      highlight: 'Camas-aurora motorizadas · posição no alto do fjell',
      description:
        'Iglus de vidro premium no fjell de Levi, bem acima do halo de luz da vila. As camas motorizadas se ajustam em direção ao arco auroral, cada unidade tem kitchenette própria, a engenharia mais bem resolvida dos cinco resorts finlandeses.',
    },
    {
      name: 'Aurora Village',
      location: 'Ivalo',
      highlight: 'Cenário natural perto de Ivalo · cabanas bem espaçadas',
      description:
        'Cabanas de teto de vidro em floresta intocada perto de Ivalo. As cabanas ficam bem espaçadas para preservar a privacidade e o entorno é escuro o bastante para a aurora se ler através de uma nuvem fina. A propriedade de iglu de vidro com sensação mais remota do site.',
    },
    {
      name: 'Aurora Pyramids',
      location: 'Lago Inari',
      highlight: 'Cabanas-pirâmide · reflexos do lago',
      description:
        'Cabanas em forma de pirâmide com fachada de vidro na margem do lago Inari. O lago congelado reflete o arco auroral assim que o vento cai abaixo de 3 m/s, uma geometria de observação que nenhuma outra propriedade finlandesa oferece.',
    },
  ],
  wildernessData: [
    {
      name: 'Iso-Syöte Eagle View Suites',
      location: 'Iso-Syöte (Pudasjärvi, logo ao sul da Lapônia)',
      highlight: 'Acima da linha das árvores · acessível a partir de Oulu',
      description:
        'Suítes de pinho a 432 m no fjell de Iso-Syöte, o fjell de verdade mais ao sul da Finlândia. Observação de aurora acima da linha das árvores sem o longo voo até Saariselkä, e a 90 minutos do aeroporto de Oulu.',
    },
    {
      name: 'Wilderness Hotel Muotka',
      location: 'Região de Saariselkä',
      highlight: 'Serviço de despertar-aurora · conforto de hotel',
      description:
        'Cabanas-aurora com vidro de parede inteira voltado para os fjells ao redor. Os caçadores de aurora da própria casa acordam os hóspedes quando a atividade sobe, útil, já que a maioria das janelas de aurora acontece bem depois da meia-noite. Conforto de hotel em local na natureza.',
    },
  ],
  destinationsData: [
    {
      slug: 'rovaniemi',
      pitch:
        'A capital da Lapônia finlandesa, a única cidade da Lapônia com uma cena gastronômica de inverno de verdade, um hub aeroportuário funcionando e cultura de design o ano todo.',
      longStayAngle:
        'A base certa se a sua estadia longa envolve trabalho remoto durante a semana e escapadas ao norte no fim de semana, wifi rápido, voos diretos para Estocolmo, restaurantes abertos na média temporada.',
    },
    {
      slug: 'levi',
      pitch:
        'A maior estação de esqui da Finlândia em venda de passes de teleférico, com 25 000 leitos, apartamentos pé na pista e uma rua de vila de verdade.',
      longStayAngle:
        'Lógica da estadia longa: os apartamentos pé na pista são alugados por semana de dezembro a abril. Os teleféricos funcionam todos os dias, os restaurantes da vila abrem toda noite, dá para fazer uma temporada de verdade aqui.',
    },
    {
      slug: 'saariselka',
      pitch:
        'Latitude mais alta que Rovaniemi, neve mais dura, céu mais escuro. A vila da Lapônia que leva o inverno mais a sério.',
      longStayAngle:
        'Lógica da estadia longa: alugue uma cabana no alto e escreva um livro. Poucas distrações. Excelente rede de cross-country, canis de huskies por perto, nenhuma distração urbana.',
    },
    {
      slug: 'inari',
      pitch: 'Capital cultural sami, lago Inari (o terceiro maior lago da Finlândia), nossa base de estadia longa mais ao norte.',
      longStayAngle:
        'Lógica da estadia longa: o próprio lago é a atividade. Pesca no gelo toda manhã, cross-country atravessando o lago congelado, o Museu Sami de Inari e o centro cultural SIIDA na porta.',
    },
    {
      slug: 'yllas',
      pitch:
        'Mais tranquila que Levi, temporada de esqui mais longa, cerca de 300 km de trilhas de esqui nórdico mantidas atravessando um parque nacional.',
      longStayAngle:
        'Lógica da estadia longa: a rede de cross-country é o atrativo. Os aluguéis de cabana aqui são por semana de fim de novembro a início de maio. A melhor escolha de estadia longa para esquiadores que não precisam de descida com teleférico todo dia.',
    },
  ],
  allCategoriesSummary: [
    { slug: 'long-stays', description: 'Aluguéis por semana e por mês, villas, cabanas de design, apartamentos de esqui.' },
    { slug: 'hotels', description: 'Hotéis boutique, de design e clássicos da Lapônia para estadias curtas.' },
    { slug: 'glass-igloos', description: 'O formato icônico da Lapônia, quatro resorts que ficam à altura do nome.' },
    { slug: 'wilderness', description: 'Depois da última estrada, dois refúgios para viajantes sérios.' },
  ],
};
