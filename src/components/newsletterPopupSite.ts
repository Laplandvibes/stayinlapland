import type { NewsletterPopupCopy, NewsletterPopupTheme } from '../shared/NewsletterPopup';

/**
 * stayinlapland.com: uutiskirjepopupin oma väri ja teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Väri = tämän sivuston oma pääväri, mitattu elävältä etusivulta 23.9.2026
 * (Suomen sininen #002F6C ja tumma pinkki #BE185D). Kontrasti tarkistettu: napin teksti ≥ 4,5:1,
 * kuvan rengas ≥ 3:1 korttia vasten.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_THEME: NewsletterPopupTheme = {
  surface: '#002F6C',
  accent: '#F9A8D4',
  cta: '#BE185D',
  onCta: '#FFFFFF',
};

export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. Rental flats, staff housing and everyday life in Lapland\'s towns. I tell you where to find a home, what living costs and what it\'s really like to live in the north.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Vuokra-asunnot, työsuhdeasunnot ja arki Lapin kaupungeissa. Kerron, mistä asunnon löytää, mitä asuminen maksaa ja millaista pohjoisessa on oikeasti asua.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Mietwohnungen, Personalunterkünfte und der Alltag in Lapplands Städten. Ich erzähle Ihnen, wo Sie eine Wohnung finden, was das Wohnen kostet und wie es sich im Norden wirklich lebt.',
  },
  ja: {
    description: 'LaplandVibes創業者。賃貸住宅、社宅、そしてラップランドの町の日常。住まいはどこで見つかるか、暮らしにかかる費用、北に住むのは実際どんなものかについて書いています。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Apartamentos en alquiler, viviendas para el personal y el día a día en las ciudades de Laponia. Le cuento dónde encontrar casa, cuánto cuesta y cómo es de verdad vivir en el norte.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Imóveis para alugar, moradia para funcionários e o dia a dia nas cidades da Lapônia. Conto onde achar casa, quanto custa morar e como é, de verdade, viver no norte.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。租房、员工住房，还有拉普兰城镇里的日常生活。我会聊聊去哪里找房子、住下来要花多少钱，以及在芬兰北部生活的真实样子。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 임대 주택과 직원 숙소, 라플란드 도시의 일상. 집은 어디서 구하는지, 생활비는 얼마나 드는지, 북쪽에서 산다는 건 실제로 어떤지 알려드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. Appartements à louer, logements du personnel et vie quotidienne dans les villes de Laponie. Je vous explique où trouver un logement, ce qu\'il vous coûtera et à quoi ressemble vraiment la vie dans le Nord.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Appartamenti in affitto, alloggi per il personale e vita quotidiana nelle città della Lapponia. Le racconto dove trovare casa, quanto costa abitarci e com\'è davvero vivere così a nord.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Huurwoningen, personeelshuisvesting en het dagelijks leven in de Laplandse steden. Van mij hoort u waar u een woning vindt, wat de woonlasten zijn en hoe het echt is om in het noorden te wonen.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Hyreslägenheter, personalbostäder och vardagen i Lapplands städer. Jag reder ut var du hittar en bostad, vad boendet kostar och hur det verkligen är att bo i norr.',
  },
};
