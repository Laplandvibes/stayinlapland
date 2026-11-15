/**
 * Brasilianportugali (pt-BR) · milloin-sivu (/when-to-go). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: src/housing/whentogo.ts (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import { whenToGoSources, type WhenToGoCopy } from '../../whentogo';
import common from './common';

const copy: WhenToGoCopy = {
  metaTitle: 'Melhor época para ir à Lapônia: guia mês a mês',
  metaDescription:
    'Quando ir à Lapônia finlandesa, mês a mês: temperaturas, luz do dia, neve, aurora boreal, sol da meia-noite, cores do outono e mosquitos, com dados oficiais.',
  breadcrumb: 'Quando ir',
  hero: {
    eyebrow: 'De janeiro a dezembro',
    title: 'A Lapônia, mês a mês.',
    subtitle:
      'Como é cada mês em clima, luz e neve, o que as pessoas fazem em cada um e o que ele significa para quem mora aqui. Números do Instituto Meteorológico da Finlândia e da Statistics Finland.',
  },
  intro: [
    'O ano na Lapônia é feito de dois mundos diferentes. De novembro a abril há neve, geada e dias curtos; de maio a setembro há luz, que no extremo norte não se põe nunca. No meio vêm duas fases curtas que os locais conhecem bem: o degelo da primavera e as cores do outono, a ruska.',
    'Abaixo está o ano inteiro em uma tabela primeiro, e depois mês a mês. Os números são médias de longo prazo: um ano isolado pode ser claramente diferente e, segundo a Metsähallitus, a neve permanente hoje costuma chegar mais tarde do que a média estatística.',
  ],
  tableKicker: 'O ano inteiro',
  tableH2: 'O ano da Lapônia em números.',
  table: {
    caption: 'Duração do dia em Rovaniemi no dia 15, temperatura média em Rovaniemi e Sodankylä, profundidade da neve em Rovaniemi no dia 15',
    head: ['Mês', 'Duração do dia', 'Temperatura média (Rovaniemi / Sodankylä)', 'Neve (Rovaniemi)', 'O que acontece'],
    rows: [
      ['Janeiro', '4 h 15 min', '−10,3 / −12,5 °C', '47 cm', 'Mês mais frio'],
      ['Fevereiro', '8 h 10 min', '−10,3 / −12,1 °C', '66 cm', 'Férias de inverno'],
      ['Março', '11 h 37 min', '−5,6 / −7,1 °C', '77 cm', 'Aurora boreal, neve mais profunda'],
      ['Abril', '15 h 25 min', '0,1 / −0,8 °C', '64 cm', 'Neve com crosta'],
      ['Maio', '19 h 24 min', '6,5 / 5,6 °C', '–', 'A neve derrete, o degelo'],
      ['Junho', '24 h (sem pôr do sol)', '12,5 / 11,9 °C', '–', 'Sol da meia-noite'],
      ['Julho', '21 h 29 min', '15,6 / 15,0 °C', '–', 'Mês mais quente, mosquitos'],
      ['Agosto', '17 h 02 min', '13,1 / 12,4 °C', '–', 'As noites escuras voltam'],
      ['Setembro', '13 h 13 min', '7,7 / 7,0 °C', '–', 'Cores do outono'],
      ['Outubro', '9 h 37 min', '0,8 / 0,0 °C', '–', 'Neve nos montes'],
      ['Novembro', '5 h 45 min', '−4,4 / −5,8 °C', '9 cm', 'Noite polar no extremo norte'],
      ['Dezembro', '2 h 27 min', '−7,7 / −9,6 °C', '28 cm', 'Dia mais curto: 2 h 14 min'],
    ],
    foot: 'Temperaturas e neve: Instituto Meteorológico da Finlândia, período de referência 1991–2020; a profundidade da neve é a mediana. Duração do dia: timeanddate.com para 2027 (fonte secundária; os anos diferem em cerca de um dia). Em junho, o sol não se põe em Rovaniemi de 7 de junho a 6 de julho.',
  },
  months: [
    {
      name: 'Janeiro',
      pitch: 'O mês mais frio, a luz volta',
      body: 'Janeiro é o mês mais frio em Sodankylä e Utsjoki, com médias de −12,5 e −13,3 °C; Rovaniemi tem média de −10,3. Em Rovaniemi, o dia cresce ao longo do mês de 2 h 44 min para mais de seis horas, e em Utsjoki o sol volta a nascer depois da noite polar em 17 de janeiro. A neve tem, em média, cerca de meio metro de profundidade.',
      good: ['Esqui e esportes de neve com a neve já firme', 'Arctic Lapland Rally em Rovaniemi, 28–30 de janeiro de 2027'],
      note: ['Renas nas estradas: de novembro a janeiro é o auge das colisões com renas', 'Os hotéis de Rovaniemi ainda estavam 86 % ocupados em janeiro de 2025'],
    },
    {
      name: 'Fevereiro',
      pitch: 'Neve e férias de inverno',
      body: 'Junto com dezembro, fevereiro é o mês mais cheio do ano: a ocupação da Lapônia foi de 77,6 % em fevereiro de 2025, mas o preço médio do quarto ficou abaixo do de dezembro. A neve em Rovaniemi tem em média 66 cm no dia 15 de fevereiro, e o dia já tem oito horas.',
      good: ['Aurora boreal do fim do inverno: o Instituto Meteorológico da Finlândia considera o fim do inverno e o início do outono as melhores épocas do ponto de vista estatístico', 'Esqui e passeios longos de um dia'],
      note: ['Reserve com antecedência: fevereiro é um dos meses mais cheios', 'As escolas da região de Helsinque e de Turku têm as suas férias de esqui na semana 8 (22–26 de fevereiro de 2027)'],
    },
    {
      name: 'Março',
      pitch: 'Aurora boreal e a neve mais profunda',
      body: 'O Instituto Meteorológico da Finlândia recomenda março para observar a aurora boreal, porque a primavera tem, em média, menos nuvens. A neve está no ponto mais profundo, 77 cm em média em Rovaniemi, e o dia passa de 13 horas. Sodankylä tem 141 horas de sol em março contra 59 em fevereiro.',
      good: ['Aurora boreal', 'Esqui com tempo ensolarado', 'Páscoa, 26–29 de março de 2027'],
      note: ['As escolas de Rovaniemi têm as suas férias de esqui na semana 10 (8–12 de março de 2027), e a Páscoa traz viajantes finlandeses', 'Os pneus de inverno são obrigatórios até 31 de março sempre que as condições exigirem'],
    },
    {
      name: 'Abril',
      pitch: 'Neve com crosta e tardes longas',
      body: 'Ainda há bastante neve, 64 cm em média em Rovaniemi no dia 15 de abril, e, segundo a Metsähallitus, as condições de neve com crosta duram de meados de abril até meados de maio. A aurora boreal ainda pode ser vista no início do mês: em Rovaniemi as noites ainda são escuras até cerca de 21 de abril, em Utsjoki até cerca de 10 de abril. O preço médio do quarto na Lapônia foi de 139–141 € em abril contra 200–225 € em março (2024–2025).',
      good: ['Esqui sobre a crosta e passeios nos montes', 'Sol da primavera: em 20 de abril o dia em Rovaniemi tem mais de 16 horas'],
      note: ['Algumas estações de esqui fecham em abril: a temporada de Ounasvaara termina em 17 de abril de 2027, enquanto Ylläs espera fechar no início de maio', 'Os empregos sazonais terminam: em Saariselkä, os últimos dias de trabalho do inverno são em meados de abril (Yle)'],
    },
    {
      name: 'Maio',
      pitch: 'A neve derrete, o mês mais tranquilo',
      body: 'A neve permanente costuma derreter em torno de Rovaniemi entre 30 de abril e 10 de maio e na Lapônia dos montes entre 10 e 20 de maio. O terreno está em degelo: molhado demais para esquiar e nevado demais para caminhar. Maio é o mês mais tranquilo para o turismo, com cerca de 65.000 pernoites contra 430.000–620.000 nos meses de inverno, e muitas empresas fazem uma pausa. No extremo norte o sol da meia-noite já começa: em Nuorgam, em 16 de maio.',
      good: ['Procurar apartamento em Rovaniemi: segundo a DAS, é na primavera e no início do verão que mais apartamentos ficam livres em relação ao número de candidatos', 'Paisagens tranquilas e a luz da primavera'],
      note: ['Muitos serviços de turismo estão fechados ou com horário reduzido', 'A cheia da primavera varia de meados de maio a meados de junho'],
    },
    {
      name: 'Junho',
      pitch: 'O sol da meia-noite',
      body: 'O sol não se põe em Rovaniemi de 7 de junho a 6 de julho, em Sodankylä de 31 de maio a 13 de julho e em Utsjoki de 18 de maio a 27 de julho. A temperatura média em Rovaniemi é de 12,5 °C. A temporada de trilhas começa quando a neve deixa os montes; em Kilpisjärvi ainda pode haver neve em junho.',
      good: ['Midnight Sun Film Festival em Sodankylä, 16–20 de junho de 2027', 'Juhannus, o solstício de verão, 25–26 de junho de 2027'],
      note: ['A temporada de mosquitos, a räkkä, costuma começar por volta do Juhannus', 'Cortinas blackout para o quarto: uma noite clara é bonita, mas não para dormir'],
    },
    {
      name: 'Julho',
      pitch: 'O mês mais quente, o favorito dos finlandeses',
      body: 'Julho é o mês mais quente do ano: 15,6 °C em média em Rovaniemi, com máximas diárias em torno de 20. É também o mês mais popular da Lapônia entre os viajantes finlandeses, e de junho a agosto são os meses mais baratos: o quarto médio nos estabelecimentos de hospedagem da Lapônia custava cerca de 96–102 € (2024–2025). As amoras-árticas amadurecem de meados de julho ao início de agosto.',
      good: ['Trilhas e passeios na natureza', 'Colheita de frutas silvestres: amoras-árticas desde meados de julho, mirtilos desde o fim de julho'],
      note: ['Os mosquitos estão no pior momento e vão até o início ou meados de agosto', 'Julho é também o mês mais chuvoso, com 81 mm em Rovaniemi'],
    },
    {
      name: 'Agosto',
      pitch: 'As noites escuras voltam',
      body: 'As noites voltam a ficar escuras em Rovaniemi por volta de 24 de agosto e, segundo a Visit Finland, a aurora boreal é visível na Lapônia do fim de agosto até abril. A primeira neve costuma cair no topo dos montes em agosto ou setembro. Em Rovaniemi, as aulas começam em meados de agosto (em 12 de agosto em 2026), e a procura dos estudantes por moradia atinge o pico.',
      good: ['A temporada de mirtilos e de trilhas continua', 'Simerock em Rovaniemi, 13–14 de agosto de 2027'],
      note: ['Em Rovaniemi, a DAS tem o maior número de candidatos em agosto e setembro, e os apartamentos que ficam livres são alugados rapidamente', 'A contratação para a temporada de inverno se acelera a partir de agosto (Yle)'],
    },
    {
      name: 'Setembro',
      pitch: 'Cores do outono e aurora boreal de outono',
      body: 'A ruska, as cores do outono, chega ao norte da Finlândia na primeira metade de setembro: semanas 36–38 em Kilpisjärvi, Pallas-Ylläs e Utsjoki, semanas 37–39 no Parque Nacional Urho Kekkonen. Em torno do equinócio de outono, as tempestades magnéticas são em média mais frequentes, e na latitude de Sodankylä a aurora boreal aparece, em média, a cada duas noites claras e escuras. Setembro é o segundo pico dos viajantes finlandeses.',
      good: ['Trilhas pelas cores do outono', 'Aurora boreal antes do inverno', 'Mirtilos-vermelhos desde o início de setembro'],
      note: ['Já pode nevar nos montes em setembro', 'As semanas da ruska enchem as estações de montanha de viajantes finlandeses'],
    },
    {
      name: 'Outubro',
      pitch: 'A neve chega aos montes',
      body: 'No período de referência 1991–2020 do Instituto Meteorológico da Finlândia, a neve permanente começou na Lapônia dos montes entre 17 e 27 de outubro e em Sodankylä em 29 de outubro. Segundo a Metsähallitus, hoje ela costuma se formar só no fim de novembro, às vezes em dezembro. No outono de 2026, as pistas de Levi abriram já no início de outubro. Outubro é o segundo mês mais tranquilo para a hospedagem, depois de maio.',
      good: ['Aurora boreal de outono antes da neve', 'Festival de folclore Jutajaiset em Rovaniemi, em outubro'],
      note: ['Em Rovaniemi, muitos contratos por prazo determinado terminam no fim de outubro porque os apartamentos são alugados a turistas para o inverno (Yle, 27 de julho de 2026)', 'Em 2026, o recesso escolar de outono foi na semana 42 (12–16 de outubro), por exemplo em Rovaniemi e Helsinque'],
    },
    {
      name: 'Novembro',
      pitch: 'A noite polar começa no extremo norte',
      body: 'Em Utsjoki, a noite polar começa em 26 de novembro e dura, em média, 51 dias. Em Rovaniemi o sol nasce todos os dias, mas no dia 15 de novembro o dia tem pouco menos de seis horas. As estações de esqui abrem: na temporada 2026–2027, Ounasvaara em 11 de novembro, Ylläs em 21 de novembro, enquanto Luosto prevê abrir em 28 de novembro.',
      good: ['Os slaloms da Copa do Mundo de Levi em meados de novembro', 'Inverno com preços de antes do Natal: um quarto nos estabelecimentos de hospedagem da Lapônia custava em média 192–209 € em novembro e 285–313 € em dezembro (2024–2025)'],
      note: ['Rovaniemi não fica tranquila em novembro: ocupação hoteleira de 72–82 % (2023–2025)', 'Pneus de inverno a partir de 1º de novembro sempre que as condições exigirem. O Arctic SnowHotel só abre em dezembro'],
    },
    {
      name: 'Dezembro',
      pitch: 'O Natal, o mês mais movimentado',
      body: 'Dezembro é o mês de turismo mais movimentado e mais caro da Lapônia: 622.449 pernoites e um preço médio de quarto de 313 € em dezembro de 2025. O dia mais curto de Rovaniemi tem 2 h 14 min, mas o sol nasce; a noite polar dura apenas quatro dias em Sodankylä, pouco antes do Natal, e de 14 a 29 de dezembro em Kittilä. Sodankylä teve neve no chão em todas as vésperas de Natal desde o início dos registros.',
      good: ['Natal: a Vila do Papai Noel abre todos os dias', 'Hotéis de neve: o Arctic SnowHotel abre em 15 de dezembro de 2026'],
      note: ['Reserve com bastante antecedência: os hotéis de Rovaniemi estavam 93,5–97 % ocupados em dezembro (2023–2025)', 'O fim do outono e o início do inverno são a época mais nublada do ano, segundo o Instituto Meteorológico da Finlândia, o que dificulta ver a aurora boreal'],
    },
  ],
  goodLabel: 'Ideal para',
  noteLabel: 'Tenha em mente',
  monthsNav: 'Meses',
  living: {
    kicker: 'Se você mora aqui',
    h2: 'O que o ano significa para quem mora aqui.',
    items: [
      '<strong>Um apartamento de aluguel em Rovaniemi:</strong> segundo a DAS, é na primavera e no início do verão que mais apartamentos ficam livres em relação ao número de candidatos, e agosto e setembro têm mais candidatos. Os contratos por prazo determinado terminam no fim de outubro porque os apartamentos são alugados a turistas para o inverno (Yle, 27 de julho de 2026).',
      '<strong>Trabalho sazonal:</strong> a contratação para o inverno se acelera a partir de agosto (Yle), e as estações de esqui abrem em outubro ou novembro e fecham em abril ou maio, conforme a estação.',
      '<strong>Dirigir:</strong> os pneus de inverno são obrigatórios de 1º de novembro a 31 de março sempre que as condições exigirem, e os cravos podem ser usados em outras épocas se as condições pedirem (Traficom). As colisões com renas têm o pico de novembro a janeiro (Associação de Criadores de Renas).',
      '<strong>Luz:</strong> cortinas blackout e um mosquiteiro no verão, uma lâmpada de fototerapia e um refletor no inverno. Em Rovaniemi, a noite polar é só um nome: o sol nasce todos os dias.',
    ],
  },
  links: [
    { label: 'Aluguel cidade por cidade', href: '/rentals' },
    { label: 'Mudar para a Lapônia', href: '/moving-to-lapland' },
    { label: 'Moradia para trabalhadores sazonais', href: '/seasonal-worker-housing' },
    { label: 'Um mês na Lapônia', href: '/long-stays' },
  ],
  faqKicker: 'Mais perguntados',
  faqH2: 'Perguntas sobre o ano da Lapônia.',
  faqs: [
    {
      q: 'Quando dá para ver a aurora boreal na Lapônia?',
      a: 'Sempre que as noites estiverem escuras, do fim de agosto a abril. Segundo o Instituto Meteorológico da Finlândia, as tempestades magnéticas são em média mais frequentes no outono e na primavera do que no verão e no inverno, e ele recomenda março porque a primavera tem, em média, menos nuvens. Na latitude de Sodankylä, a aurora aparece, em média, a cada duas noites claras e escuras.',
    },
    {
      q: 'Rovaniemi tem noite polar?',
      a: 'Não. Em Rovaniemi o sol nasce todos os dias, e o dia mais curto tem 2 h 14 min. A noite polar dura quatro dias em Sodankylä, 16 dias em Kittilä, cerca de cinco semanas em Ivalo e, em média, 51 dias em Utsjoki.',
    },
    {
      q: 'Quando há neve na Lapônia?',
      a: 'No período de referência 1991–2020, a neve permanente começou no fim de outubro na Lapônia dos montes e no início de novembro em torno de Rovaniemi, mas, segundo a Metsähallitus, hoje ela costuma se formar só no fim de novembro. A neve é mais profunda em março e no início de abril e costuma derreter em torno de Rovaniemi entre 30 de abril e 10 de maio.',
    },
    {
      q: 'Quando é a temporada de mosquitos na Lapônia?',
      a: 'Segundo a Metsähallitus, a temporada de mosquitos, a räkkä, costuma começar por volta do Juhannus (solstício de verão) e durar até o início ou meados de agosto.',
    },
  ],
  authorNote:
    'Temperaturas, neve e aurora boreal do Instituto Meteorológico da Finlândia, calendário da natureza da Metsähallitus, números mensais do turismo da Statistics Finland, férias da Agência Nacional de Educação da Finlândia, eventos dos seus organizadores. Verificado em 15 de novembro de 2026.',
  sources: whenToGoSources(common.whenToGoSourceLabels),
};

export default copy;
