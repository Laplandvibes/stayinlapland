/**
 * Asettumismainokset stayinlaplandin asumissivuille: Fortum (sähkösopimus), Telia (liittymä,
 * kotinetti), Airalo (eSIM ensimmäisiksi päiviksi).
 *
 * Portattu laplandworkin `SettlingInAds.tsx`:stä 23.9.2026 (12 kieltä valmiina, livenä
 * hyväksytty). Vesa 23.9.2026: *"muuten en näe sivulla juurikaan mainoksia"* ja verkoston sääntö
 * (CLAUDE.md, "Mainos rakennetaan sivun aiheesta käsin"): mainos on sivun oman tekstin kohdalla.
 * Muuttosivun "Ensimmäinen viikko" -osio nimeää sähkösopimuksen ja netin, elinkustannussivun
 * sähköosio sähkön hinnan, kausityösivu ulkomailta tulevan työntekijän ensimmäiset päivät.
 *
 * Muutokset lähteeseen: GA-seuranta pois (affiliate-klikit mitataan Worker-D1:stä, ei kahdesti),
 * oletus-sidit `stay_*`, ja Fortumin väite "Lapissa lämmitys toimii talvella sähköllä" korjattu
 * fi/en vuokralaisen tilanteeksi (kaupunkien vuokra-asunnoissa lämmitys on yleensä kaukolämpöä).
 * Linkit Workerin kautta, rel ilman noreferreriä.
 */
import { ArrowRight, Zap, Wifi, BadgeCheck, FileSignature, Globe2, Languages, Smartphone, PlaneLanding, QrCode } from "lucide-react";
import { useLang, type Lang } from "../i18n/useLang";
import airaloSpec from "../shared/ads/advertisers/airalo";
import { housingLang } from "../housing/labels";
import type { HousingLang } from "../housing/types";


/**
 * Affiliate cards for the "settling in" context (ported from laplandwork's
 * Moving-to-Finland page), each skinned in the ADVERTISER's OWN brand (premium_design_standard §6:
 * "mainos pitää olla heidän brändin mukainen, ei meidän"). Each card is a clean
 * WHITE, clearly-labelled "Mainos / Ad" unit carrying the partner's real brand
 * colour + logo + a brand-coloured CTA, so it reads as an authentic partner
 * placement rather than another LaplandVibes/LaplandWork card.
 *
 * Three things a new mover sorts on arrival, each in the partner's own brand:
 *   - Fortum — electricity contract (sähkösopimus). Brand green.
 *   - Telia  — mobile / broadband subscription (liittymä). Brand purple.
 *   - Airalo — eSIM for day-one data before the Finnish SIM. Brand coral.
 *
 * Links route through the go.laplandvibes.com Worker (affiliate hard rule:
 * never raw partner URLs in source). The Worker resolves the partner's
 * Adtraction/TP tracking URL and logs the click to D1 under the `sid`, so
 * each ad takes a per-placement sid prop (stay_<page>_<surface>) and the
 * same card can be measured separately on every page that renders it.
 *
 * Required affiliate attributes per LV spec:
 *   target="_blank" rel="sponsored nofollow noopener"  — NO `noreferrer`
 * (the Worker / network reads Referer for per-site attribution).
 *
 * Copy is deliberately generic + accurate to each product — no invented
 * stats, no "world-class". Localised to all 11 site languages.
 */

/** Tiny inline locale picker — order matches the flagship's pick(). */
function pick(
  lang: Lang,
  en: string,
  fi: string,
  de: string,
  ja: string,
  es: string,
  ptBR: string,
  zhCN: string,
  ko: string,
  fr: string,
  it: string,
  nl: string,
  sv: string,
): string {
  switch (lang) {
    case "fi": return fi;
    case "de": return de;
    case "ja": return ja;
    case "es": return es;
    case "pt-BR": return ptBR;
    case "zh-CN": return zhCN;
    case "ko": return ko;
    case "fr": return fr;
    case "it": return it;
    case "nl": return nl;
    case "sv": return sv;
    default: return en;
  }
}

interface TrustPoint {
  icon: typeof Zap;
  label: string;
}

interface PartnerAdProps {
  /** GA + tracking partner key, e.g. "fortum". */
  partner: string;
  /** Adtraction tracking URL (verbatim from affiliate-links.json). */
  href: string;
  /** Placement tag for the analytics event, snake_case. */
  sid: string;
  /** Brand accent hex used for the top rule, icon badge + trust icons. */
  accent: string;
  /** Deeper brand shade for the CTA pill + eyebrow text (AA on white). */
  ctaColor: string;
  /** Real logo in /public/images/partners. */
  logoSrc: string;
  logoAlt: string;
  IconBadge: typeof Zap;
  /** Localised "Ad" label for the partner badge. */
  adLabel: string;
  eyebrow: string;
  headline: string;
  sub: string;
  trust: TrustPoint[];
  cta: string;
  poweredBy: string;
}


/**
 * Shared card, skinned in the advertiser's OWN brand: a clean WHITE,
 * clearly-labelled partner unit. One advertiser per card.
 */
function PartnerAd({
  href,
  accent,
  ctaColor,
  logoSrc,
  logoAlt,
  IconBadge,
  adLabel,
  eyebrow,
  headline,
  sub,
  trust,
  cta,
  poweredBy,
}: PartnerAdProps) {
  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] ring-1 ring-black/5"
      style={{ borderTop: `3px solid ${accent}` }}
      aria-label={headline}
    >
      {/* Soft brand-tinted wash, top-right — keeps the white card warm. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${accent}1f, transparent)` }}
      />

      <div className="relative flex h-full flex-col p-6 sm:p-7">
        {/* Header row: icon badge + "Ad" label + eyebrow + real partner logo */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1"
              style={{ backgroundColor: `${accent}1a`, borderColor: `${accent}40` }}
            >
              <IconBadge className="h-5 w-5" style={{ color: ctaColor }} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              {/* 🔴 Mainosmerkinnän VÄRIÄ ei saa sitoa kumppanin brändiväriin.
                  Mitattu 2026-08-17: ctaColor omalla 10 %:n sävyllään (accent1a)
                  antaa 3,62:1, kun 10 px normaaliteksti vaatii 4,5:1 — ja tämä
                  on lakisääteinen tunniste, jonka on oltava selvästi erottuva,
                  ei pelkästään kaunis. Sävyn vahvistaminen EI auta: teksti on
                  sama väri kuin tausta, joten tummempi sävy laskisi kontrastia
                  entisestään. Ainoa toimiva korjaus on irrottaa teksti
                  aksentista. Tausta jää brändisävyyn, joten lätkä näyttää yhä
                  kumppanin väriseltä. */}
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-800"
                style={{ backgroundColor: `${accent}1a` }}
              >
                {adLabel}
              </span>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: ctaColor }}
              >
                {eyebrow}
              </p>
            </div>
          </div>
          {/* Real advertiser logo (official Adtraction media). */}
          <img
            src={logoSrc}
            alt={logoAlt}
            width={120}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-8 w-auto shrink-0"
          />
        </div>

        <h3 className="mb-3 max-w-xl font-heading text-2xl leading-tight tracking-wide text-slate-900 sm:text-[1.7rem]">
          {headline}
        </h3>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">{sub}</p>

        {/* Trust points */}
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
          {trust.map((t) => (
            <li key={t.label} className="flex items-center gap-2 text-sm text-slate-700">
              <t.icon className="h-4 w-4 shrink-0" style={{ color: ctaColor }} aria-hidden="true" />
              <span>{t.label}</span>
            </li>
          ))}
        </ul>

        {/* 🔴 mt-AUTO, ei mt-6. Kommentti lupasi jo ennestään "pinned to the
            bottom so stacked cards line up", mutta mt-6 on kiinteä väli edeltävään
            elementtiin — se ei työnnä mitään pohjaan. Kolmen mainoskortin CTA:t
            päätyivät siksi eri korkeuksille sen mukaan montako riviä tekstiä
            kortissa sattui olemaan (Vesa 2026-08-17: "nämä mainokset ei ole
            tasaisesti"). Emo on `flex h-full flex-col`, joten mt-auto syö vapaan
            tilan ja tasaa napit. pt-6 säilyttää entisen välin. */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6">
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white no-underline shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: ctaColor, boxShadow: `0 14px 30px -12px ${ctaColor}99` }}
          >
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          {/* 🔴 slate-400 valkoisella = 2,49:1 (mitattu 2026-08-17), kun 11 px
              vaatii 4,5:1. "Kumppani: Airalo" kertoo kenen mainos tämä on, eli
              se on osa merkintää eikä koriste. slate-600 = 7,0:1. */}
          <span className="text-[11px] uppercase tracking-[0.12em] text-slate-600">{poweredBy}</span>
        </div>
      </div>
    </article>
  );
}

/* ── Fortum — electricity ─────────────────────────────────────────────── */

function FortumAd({ sid = "stay_moving_electricity", lang: langProp }: { sid?: string; lang?: Lang }) {
  const ctxLang = useLang();
  // Asumissivujen sisältö on fi/en; kortin kieli seuraa sisällön kieltä, ei osoitteen kieltä.
  const lang = langProp ?? ctxLang;
  const href = `https://go.laplandvibes.com/go/fortum?sid=${encodeURIComponent(sid)}`;

  const trust: TrustPoint[] = [
    {
      icon: Zap,
      label: pick(
        lang,
        "Electricity to your new home",
        "Sähkö uuteen kotiin",
        "Strom für Ihr neues Zuhause",
        "新居への電気契約",
        "Electricidad para su nuevo hogar",
        "Energia para o seu novo lar",
        "把电送到新家",
        "새 집으로 전기 공급",
        "L'électricité dans votre nouveau logement",
        "Elettricità nella Sua nuova casa",
        "Stroom voor uw nieuwe woning",
        "El till ditt nya hem",
      ),
    },
    {
      icon: BadgeCheck,
      label: pick(
        lang,
        "Nationwide Finnish supplier",
        "Valtakunnallinen suomalainen toimittaja",
        "Landesweiter finnischer Anbieter",
        "全国対応のフィンランド企業",
        "Proveedor finlandés a nivel nacional",
        "Fornecedor finlandês de abrangência nacional",
        "覆盖全国的芬兰供应商",
        "전국 단위 핀란드 공급사",
        "Fournisseur finlandais national",
        "Fornitore finlandese su scala nazionale",
        "Landelijke Finse leverancier",
        "Rikstäckande finsk leverantör",
      ),
    },
    {
      icon: FileSignature,
      label: pick(
        lang,
        "Sign online before you arrive",
        "Tee sopimus verkossa ennen muuttoa",
        "Vor der Ankunft online abschließen",
        "到着前にオンラインで契約",
        "Contrata en línea antes de llegar",
        "Contrate on-line antes de chegar",
        "抵达前在线签约",
        "도착 전 온라인 계약",
        "Souscrivez en ligne avant d'arriver",
        "Attivi online prima di arrivare",
        "Sluit online af voordat u aankomt",
        "Teckna online innan du kommer",
      ),
    },
  ];

  return (
    <PartnerAd
      partner="fortum"
      href={href}
      sid={sid}
      accent="#3CB54A"
      ctaColor="#2E9C3F"
      logoSrc="/images/partners/fortum.png"
      logoAlt="Fortum"
      IconBadge={Zap}
      adLabel={pick(
        lang,
        "Ad",
        "Mainos",
        "Anzeige",
        "広告",
        "Anuncio",
        "Anúncio",
        "广告",
        "광고",
        "Annonce",
        "Annuncio",
        "Advertentie",
        "Annons",
      )}
      eyebrow={pick(
        lang,
        "Electricity contract",
        "Sähkösopimus",
        "Stromvertrag",
        "電気契約",
        "Contrato de electricidad",
        "Contrato de energia",
        "电力合同",
        "전기 계약",
        "Contrat d'électricité",
        "Contratto luce",
        "Stroomcontract",
        "Elavtal",
      )}
      headline={pick(
        lang,
        "Set up your electricity with Fortum before the first cold snap",
        "Hanki sähkösopimus Fortumilta ennen ensimmäisiä pakkasia",
        "Schließen Sie Ihren Stromvertrag mit Fortum ab, bevor die Kälte kommt",
        "最初の寒波が来る前に、Fortum で電気契約を",
        "Contrate su electricidad con Fortum antes de la primera ola de frío",
        "Garanta sua energia com a Fortum antes da primeira onda de frio",
        "在第一波寒潮来临前，用 Fortum 办好你的电力",
        "첫 한파가 오기 전에 Fortum으로 전기를 준비하세요",
        "Mettez en place votre électricité avec Fortum avant la première vague de froid",
        "Attivi la luce con Fortum prima della prima ondata di freddo",
        "Regel uw stroom met Fortum vóór de eerste kou",
        "Fixa din el med Fortum före första kylan",
      )}
      sub={pick(
        lang,
        "In most rental flats the electricity contract is the tenant's own, so it is one of the first things to arrange before moving day. Fortum is one of Finland's established energy companies. Start it online and pick a plan that fits your stay.",
        "Useimmissa vuokra-asunnoissa sähkösopimus on vuokralaisen oma, joten se kuuluu ensimmäisiin asioihin ennen muuttopäivää. Fortum on yksi Suomen vakiintuneista energiayhtiöistä. Aloita verkossa ja valitse tilanteeseesi sopiva sopimus.",
        "Im Lappland-Winter läuft die Heizung über Strom, ein Vertrag gehört also zu den ersten Erledigungen. Fortum ist eines der etablierten Energieunternehmen Finnlands. Starten Sie online und wählen Sie einen passenden Tarif.",
        "ラップランドの冬の暖房は電気で動くため、電気契約は最初に手配すべきことのひとつです。Fortum はフィンランドの定評ある電力会社。オンラインで開始し、滞在に合うプランを選べます。",
        "En el invierno de Laponia la calefacción funciona con electricidad, así que el contrato es de lo primero que conviene organizar. Fortum es una de las compañías energéticas consolidadas de Finlandia: empiece en línea y elija un plan acorde a su estancia.",
        "No inverno da Lapônia o aquecimento funciona com eletricidade, então o contrato é uma das primeiras coisas a resolver. A Fortum é uma das empresas de energia consolidadas da Finlândia. Comece on-line e escolha um plano adequado à sua estadia.",
        "拉普兰的冬天靠电力供暖，因此电力合同是最先要办的事情之一。Fortum 是芬兰成熟的能源公司之一，在线办理，挑选适合你停留时间的方案。",
        "라플란드의 겨울 난방은 전기로 작동하므로 전기 계약은 가장 먼저 처리할 일 중 하나입니다. Fortum은 핀란드의 자리 잡은 에너지 기업 중 하나입니다. 온라인으로 시작해 체류에 맞는 요금제를 고르세요.",
        "En hiver, le chauffage en Laponie fonctionne à l'électricité : le contrat fait donc partie des premières démarches. Fortum est l'un des fournisseurs d'énergie établis de Finlande. Souscrivez en ligne et choisissez une offre adaptée à votre séjour.",
        "In inverno il riscaldamento in Lapponia va a elettricità, quindi il contratto è tra le prime cose da sistemare. Fortum è una delle società energetiche affermate in Finlandia: lo attivi online e scelga il piano adatto al Suo soggiorno.",
        "In de Laplandse winter draait de verwarming op elektriciteit, dus een contract is een van de eerste dingen om te regelen. Fortum is een van de gevestigde energiebedrijven van Finland. Sluit online af en kies een plan dat bij uw verblijf past.",
        "Uppvärmningen går på el genom Lapplandsvintern, så ett avtal är en av de första sakerna att ordna. Fortum är ett av Finlands etablerade energibolag. Starta online och välj ett avtal som passar din vistelse.",
      )}
      trust={trust}
      cta={pick(
        lang,
        "See Fortum plans",
        "Katso Fortumin sopimukset",
        "Fortum-Tarife ansehen",
        "Fortum のプランを見る",
        "Ver planes de Fortum",
        "Ver planos da Fortum",
        "查看 Fortum 方案",
        "Fortum 요금제 보기",
        "Voir les offres Fortum",
        "Veda i piani Fortum",
        "Bekijk Fortum-plannen",
        "Se Fortums avtal",
      )}
      poweredBy={pick(
        lang,
        "Partner: Fortum",
        "Kumppani: Fortum",
        "Partner: Fortum",
        "提携先：Fortum",
        "Socio: Fortum",
        "Parceiro: Fortum",
        "合作伙伴：Fortum",
        "파트너: Fortum",
        "Partenaire : Fortum",
        "Partner: Fortum",
        "Partner: Fortum",
        "Partner: Fortum",
      )}
    />
  );
}

/* ── Telia — mobile / broadband ───────────────────────────────────────── */

function TeliaAd({ sid = "stay_moving_telecom", lang: langProp }: { sid?: string; lang?: Lang }) {
  const ctxLang = useLang();
  // Asumissivujen sisältö on fi/en; kortin kieli seuraa sisällön kieltä, ei osoitteen kieltä.
  const lang = langProp ?? ctxLang;
  const href = `https://go.laplandvibes.com/go/telia?sid=${encodeURIComponent(sid)}`;

  const trust: TrustPoint[] = [
    {
      icon: Wifi,
      label: pick(
        lang,
        "Mobile + home broadband",
        "Liittymä + kotinetti",
        "Mobilfunk + Heim-Internet",
        "モバイル + 自宅ブロードバンド",
        "Móvil + internet en casa",
        "Celular + internet em casa",
        "手机 + 家庭宽带",
        "모바일 + 가정용 인터넷",
        "Mobile + internet à domicile",
        "Mobile + internet di casa",
        "Mobiel + thuisinternet",
        "Mobil + hembredband",
      ),
    },
    {
      icon: Globe2,
      label: pick(
        lang,
        "Coverage across Lapland",
        "Kuuluvuus kattaa Lapin",
        "Abdeckung in ganz Lappland",
        "ラップランド全域のカバレッジ",
        "Cobertura por toda Laponia",
        "Cobertura por toda a Lapônia",
        "覆盖整个拉普兰",
        "라플란드 전역 커버리지",
        "Couverture dans toute la Laponie",
        "Copertura in tutta la Lapponia",
        "Dekking in heel Lapland",
        "Täckning i hela Lappland",
      ),
    },
    {
      icon: Languages,
      label: pick(
        lang,
        "Service in English",
        "Palvelua myös englanniksi",
        "Service auf Englisch",
        "英語でのサポート",
        "Atención en inglés",
        "Atendimento em inglês",
        "提供英语服务",
        "영어 고객 지원",
        "Service en anglais",
        "Assistenza in inglese",
        "Service in het Engels",
        "Kundtjänst på engelska",
      ),
    },
  ];

  return (
    <PartnerAd
      partner="telia"
      href={href}
      sid={sid}
      accent="#990AE3"
      ctaColor="#990AE3"
      logoSrc="/images/partners/telia.png"
      logoAlt="Telia"
      IconBadge={Wifi}
      adLabel={pick(
        lang,
        "Ad",
        "Mainos",
        "Anzeige",
        "広告",
        "Anuncio",
        "Anúncio",
        "广告",
        "광고",
        "Annonce",
        "Annuncio",
        "Advertentie",
        "Annons",
      )}
      eyebrow={pick(
        lang,
        "Phone & internet",
        "Liittymä ja netti",
        "Telefon & Internet",
        "電話とインターネット",
        "Teléfono e internet",
        "Telefone e internet",
        "电话与网络",
        "전화 & 인터넷",
        "Téléphone & internet",
        "Telefono e internet",
        "Telefoon & internet",
        "Telefon och internet",
      )}
      headline={pick(
        lang,
        "Get a Finnish number and home internet sorted with Telia",
        "Hanki suomalainen numero ja kotinetti Telialta",
        "Holen Sie sich eine finnische Nummer und Heim-Internet bei Telia",
        "Telia でフィンランドの電話番号と自宅ネットを用意",
        "Consigue un número finlandés e internet en casa con Telia",
        "Resolva um número finlandês e internet em casa com a Telia",
        "用 Telia 办好芬兰号码和家庭网络",
        "Telia로 핀란드 번호와 가정용 인터넷을 마련하세요",
        "Obtenez un numéro finlandais et internet à la maison avec Telia",
        "Ottenga un numero finlandese e internet di casa con Telia",
        "Regel een Fins nummer en thuisinternet met Telia",
        "Fixa ett finskt nummer och hemmanät med Telia",
      )}
      sub={pick(
        lang,
        "A local number makes bank logins, Suomi.fi and your employer's messages far easier. Telia is one of Finland's three main networks, with mobile plans, home broadband and English-speaking customer service for newcomers.",
        "Suomalainen numero helpottaa huomattavasti pankkitunnistautumista, Suomi.fi-asiointia ja työnantajan viestien vastaanottamista. Telia on yksi Suomen kolmesta valtakunnallisesta operaattorista: tarjolla on puhelinliittymiä, kotinettiä ja englanninkielistä asiakaspalvelua uusille tulijoille.",
        "Eine lokale Nummer erleichtert Bank-Logins, Suomi.fi und die Nachrichten Ihres Arbeitgebers erheblich. Telia ist eines der drei großen Netze Finnlands, mit Mobilfunktarifen, Heim-Internet und englischsprachigem Kundenservice für Neuankömmlinge.",
        "現地の番号があると、銀行ログインや Suomi.fi、雇用主からの連絡がぐっと楽になります。Telia はフィンランドの主要3ネットワークのひとつで、モバイルプランと自宅ネットを提供し、新規参入者向けに英語のサポートもあります。",
        "Un número local facilita mucho los accesos al banco, Suomi.fi y los mensajes de su empleador. Telia es una de las tres redes principales de Finlandia, con planes de móvil, internet en casa y atención al cliente en inglés para recién llegados.",
        "Um número local facilita muito os acessos ao banco, o Suomi.fi e as mensagens do seu empregador. A Telia é uma das três principais redes da Finlândia, com planos de celular, internet em casa e atendimento em inglês para recém-chegados.",
        "本地号码会让银行登录、Suomi.fi 以及雇主的通知方便许多。Telia 是芬兰三大网络之一，提供手机套餐和家庭宽带，并为新来者提供英语客服。",
        "현지 번호가 있으면 은행 로그인, Suomi.fi, 고용주 연락이 훨씬 수월해집니다. Telia는 핀란드 3대 통신망 중 하나로 모바일 요금제와 가정용 인터넷을 제공하며, 신규 이주자를 위한 영어 고객 지원도 있습니다.",
        "Un numéro local simplifie nettement les connexions bancaires, Suomi.fi et les messages de votre employeur. Telia est l'un des trois principaux réseaux de Finlande, avec des forfaits mobiles, internet à domicile et un service client en anglais pour les nouveaux arrivants.",
        "Un numero locale rende molto più semplici gli accessi bancari, Suomi.fi e i messaggi del datore di lavoro. Telia è una delle tre reti principali della Finlandia, con piani mobile, internet di casa e assistenza clienti in inglese per chi arriva.",
        "Een lokaal nummer maakt banklogins, Suomi.fi en berichten van uw werkgever een stuk makkelijker. Telia is een van de drie grote netwerken van Finland, met mobiele abonnementen, thuisinternet én Engelstalige klantenservice voor nieuwkomers.",
        "Ett lokalt nummer gör bankinloggningar, Suomi.fi och meddelanden från din arbetsgivare mycket enklare. Telia är ett av Finlands tre stora nät, med mobilabonnemang, hembredband och engelskspråkig kundtjänst för nyanlända.",
      )}
      trust={trust}
      cta={pick(
        lang,
        "See Telia plans",
        "Katso Telian liittymät",
        "Telia-Tarife ansehen",
        "Telia のプランを見る",
        "Ver planes de Telia",
        "Ver planos da Telia",
        "查看 Telia 方案",
        "Telia 요금제 보기",
        "Voir les offres Telia",
        "Veda i piani Telia",
        "Bekijk Telia-plannen",
        "Se Telias abonnemang",
      )}
      poweredBy={pick(
        lang,
        "Partner: Telia",
        "Kumppani: Telia",
        "Partner: Telia",
        "提携先：Telia",
        "Socio: Telia",
        "Parceiro: Telia",
        "合作伙伴：Telia",
        "파트너: Telia",
        "Partenaire : Telia",
        "Partner: Telia",
        "Partner: Telia",
        "Partner: Telia",
      )}
    />
  );
}

/* ── Airalo — eSIM for the arrival gap ────────────────────────────────── */

function AiraloAd({ sid = "stay_moving_esim", lang: langProp }: { sid?: string; lang?: Lang }) {
  const ctxLang = useLang();
  // Asumissivujen sisältö on fi/en; kortin kieli seuraa sisällön kieltä, ei osoitteen kieltä.
  const lang = langProp ?? ctxLang;
  // linkFor rakentaa per-locale dest-syvälinkin Finland-eSIM-sivulle — paljas
  // /go/airalo ilman destiä pudottaisi TP-wrapin kautta Airalon etusivulle
  // (lv_permanent_rules §5).
  const href = airaloSpec.linkFor(sid, lang);

  const trust: TrustPoint[] = [
    {
      icon: PlaneLanding,
      label: pick(
        lang,
        "Data the minute you land",
        "Nettiä heti laskeutuessa",
        "Daten ab der Landung",
        "着陸した瞬間からデータ通信",
        "Datos nada más aterrizar",
        "Internet assim que pousar",
        "落地即可上网",
        "착륙하는 순간부터 데이터",
        "Des données dès l'atterrissage",
        "Dati appena atterri",
        "Data zodra u landt",
        "Data direkt när du landar",
      ),
    },
    {
      icon: QrCode,
      label: pick(
        lang,
        "Install before you fly, no shop",
        "Asenna ennen lentoa, ei kauppaa",
        "Vor dem Flug einrichten, kein Ladenbesuch nötig",
        "出発前に設定、店舗不要",
        "Instálala antes de volar, sin tienda",
        "Instale antes de voar, sem loja",
        "出发前安装，无需门店",
        "출발 전 설치, 매장 방문 불필요",
        "Installez-la avant le vol, sans boutique",
        "Installala prima del volo, niente negozio",
        "Installeer vóór uw vlucht, geen winkel",
        "Installera före flyget, ingen butik",
      ),
    },
    {
      icon: Smartphone,
      label: pick(
        lang,
        "Keep your home number active",
        "Pidä kotinumero käytössä",
        "Heimnummer bleibt aktiv",
        "母国の番号もそのまま使える",
        "Mantenga activo su número de casa",
        "Mantenha seu número de casa ativo",
        "保留你原有的号码",
        "기존 번호도 그대로 유지",
        "Gardez votre numéro d'origine actif",
        "Mantenga attivo il Suo numero d'origine",
        "Houd uw eigen nummer actief",
        "Behåll ditt eget nummer aktivt",
      ),
    },
  ];

  return (
    <PartnerAd
      partner="airalo"
      href={href}
      sid={sid}
      accent="#F76C5E"
      ctaColor="#E2483B"
      logoSrc="/images/partners/airalo.png"
      logoAlt="Airalo"
      IconBadge={Smartphone}
      adLabel={pick(
        lang,
        "Ad",
        "Mainos",
        "Anzeige",
        "広告",
        "Anuncio",
        "Anúncio",
        "广告",
        "광고",
        "Annonce",
        "Annuncio",
        "Advertentie",
        "Annons",
      )}
      eyebrow={pick(
        lang,
        "eSIM for arrival",
        "eSIM saapumiseen",
        "eSIM für die Ankunft",
        "到着用の eSIM",
        "eSIM para la llegada",
        "eSIM para a chegada",
        "落地用 eSIM",
        "도착용 eSIM",
        "eSIM pour l'arrivée",
        "eSIM per l'arrivo",
        "eSIM voor aankomst",
        "eSIM för ankomsten",
      )}
      headline={pick(
        lang,
        "Land in Finland already online with an Airalo eSIM",
        "Laskeudu Suomeen netti valmiina: Airalon eSIM-liittymä",
        "Mit einer Airalo-eSIM schon online in Finnland landen",
        "Airalo の eSIM で、着いた瞬間からフィンランドでネット接続",
        "Aterriza en Finlandia ya conectado con una eSIM de Airalo",
        "Chegue à Finlândia já conectado com um eSIM da Airalo",
        "用 Airalo eSIM，落地芬兰即刻联网",
        "Airalo eSIM으로 핀란드에 도착하자마자 온라인",
        "Arrivez en Finlande déjà connecté avec une eSIM Airalo",
        "Atterra in Finlandia già online con una eSIM Airalo",
        "Land in Finland al online met een Airalo-eSIM",
        "Landa i Finland redan uppkopplad med ett Airalo-eSIM",
      )}
      sub={pick(
        lang,
        "Your Finnish SIM needs an address and an ID number you won't have on day one. An Airalo eSIM covers the gap: buy a Finland or Europe data plan, install it before you fly, and you have maps, banking and email working the moment you step off the plane.",
        "Suomalainen liittymä vaatii osoitteen ja henkilötunnuksen, joita sinulla ei ensimmäisenä päivänä vielä ole. Airalon eSIM paikkaa aukon: osta Suomen tai Euroopan datapaketti ja asenna se jo ennen lentoa, niin kartat, pankki ja sähköposti toimivat heti kun astut koneesta.",
        "Ihre finnische SIM braucht eine Adresse und eine ID-Nummer, die Sie am ersten Tag noch nicht haben. Eine Airalo-eSIM überbrückt das: Kaufen Sie einen Finnland- oder Europa-Datentarif, richten Sie ihn vor dem Flug ein, und Karten, Banking und E-Mail laufen, sobald Sie aus dem Flugzeug steigen.",
        "フィンランドの SIM には住所と個人 ID 番号が必要で、初日にはまだ手元にありません。Airalo の eSIM がその空白を埋めます。フィンランドまたはヨーロッパのデータプランを購入し、出発前に設定しておけば、飛行機を降りた瞬間から地図・銀行・メールが使えます。",
        "Su SIM finlandesa necesita una dirección y un número de identificación que no tendrá el primer día. Una eSIM de Airalo cubre ese hueco: compre un plan de datos de Finlandia o Europa, instálelo antes de volar y tendrá mapas, banca y correo funcionando nada más bajar del avión.",
        "Seu SIM finlandês exige um endereço e um número de identificação que você não terá no primeiro dia. Um eSIM da Airalo cobre essa lacuna: compre um plano de dados da Finlândia ou da Europa, instale antes de voar e tenha mapas, banco e e-mail funcionando assim que desembarcar.",
        "芬兰 SIM 卡需要地址和个人身份号码，而你在第一天还没有。Airalo eSIM 正好补上这段空档：购买芬兰或欧洲数据套餐，出发前装好，一下飞机就能用地图、银行和邮箱。",
        "핀란드 SIM은 첫날에는 없는 주소와 개인 ID 번호가 필요합니다. Airalo eSIM이 그 공백을 메웁니다. 핀란드나 유럽 데이터 요금제를 사서 출발 전에 설치해 두면, 비행기에서 내리는 순간부터 지도, 뱅킹, 이메일이 작동합니다.",
        "Votre SIM finlandaise exige une adresse et un numéro d'identité que vous n'aurez pas le premier jour. Une eSIM Airalo comble ce vide : achetez un forfait data Finlande ou Europe, installez-le avant de partir, et cartes, banque et e-mail fonctionnent dès la descente d'avion.",
        "La Sua SIM finlandese richiede un indirizzo e un codice identificativo che il primo giorno non avrà. Una eSIM Airalo copre il vuoto: acquisti un piano dati Finlandia o Europa, lo installi prima di partire e avrà mappe, banca ed e-mail attive appena scende dall'aereo.",
        "Uw Finse simkaart vereist een adres en een ID-nummer die u op dag één nog niet hebt. Een Airalo-eSIM overbrugt dat: koop een data-abonnement voor Finland of Europa, installeer het vóór uw vlucht, en kaarten, bankzaken en e-mail werken zodra u het vliegtuig uit stapt.",
        "Ditt finska SIM-kort kräver en adress och en personbeteckning som du inte har första dagen. Ett Airalo-eSIM täcker glappet: köp ett dataabonnemang för Finland eller Europa, installera det före flyget, så har du kartor, bank och e-post igång i samma stund du kliver av planet.",
      )}
      trust={trust}
      cta={pick(
        lang,
        "See Airalo plans",
        "Katso Airalon paketit",
        "Airalo-Tarife ansehen",
        "Airalo のプランを見る",
        "Ver planes de Airalo",
        "Ver planos da Airalo",
        "查看 Airalo 套餐",
        "Airalo 요금제 보기",
        "Voir les forfaits Airalo",
        "Veda i piani Airalo",
        "Bekijk Airalo-plannen",
        "Se Airalos abonnemang",
      )}
      poweredBy={pick(
        lang,
        "Partner: Airalo",
        "Kumppani: Airalo",
        "Partner: Airalo",
        "提携先：Airalo",
        "Socio: Airalo",
        "Parceiro: Airalo",
        "合作伙伴：Airalo",
        "파트너: Airalo",
        "Partenaire : Airalo",
        "Partner: Airalo",
        "Partner: Airalo",
        "Partner: Airalo",
      )}
    />
  );
}

type AdKind = "fortum" | "telia" | "airalo";
/** Lukijan tilanne sivulla: otsikko lähtee siitä, ei tuotteesta (CLAUDE.md). */
type AdContext = "moving" | "electricity" | "arrival";

const NOTE: Record<HousingLang, string> = {
  fi: "Kumppanilinkkejä: jos teet sopimuksen niiden kautta, saamme pienen palkkion. Sinulle hinta on sama.",
  en: "Affiliate links: if you sign up through them we earn a small commission. Your price is the same.",
};

const WRAP_TEXT: Record<AdContext, Record<HousingLang, { kicker: string; title: string; lead: string }>> = {
  // Muuttosivu, "Ensimmäinen viikko": osio nimeää sähkösopimuksen ja netin.
  moving: {
    fi: {
      kicker: "Mainos · muuton yhteydessä",
      title: "Sähkö ja netti kuntoon ennen muuttopäivää",
      lead: "Molemmat voi aloittaa verkossa jo ennen kuin avaimet ovat kädessä, jolloin uudessa kodissa on valot ja yhteys ensimmäisestä illasta.",
    },
    en: {
      kicker: "Ad · around the move",
      title: "Electricity and internet sorted before moving day",
      lead: "Both can be started online before the keys are in your hand, so the new home has power and a connection from the first evening.",
    },
  },
  // Elinkustannussivu, sähköosio: taulukko kertoo hinnan, lukija tarvitsee sopimuksen.
  electricity: {
    fi: {
      kicker: "Mainos · sähkösopimus",
      title: "Vuokralla asuva tekee sähkösopimuksen yleensä itse",
      lead: "Yllä oleva taulukko kertoo, mitä kilowattitunti maksaa. Sopimuksen voi tehdä verkossa ennen muuttopäivää.",
    },
    en: {
      kicker: "Ad · electricity contract",
      title: "Renting? The electricity contract is usually yours to arrange",
      lead: "The table above shows what a kilowatt-hour costs. The contract can be made online before moving day.",
    },
  },
  // Kausityösivu (en): ulkomailta tuleva työntekijä, ensimmäiset päivät ennen suomalaista liittymää.
  arrival: {
    fi: {
      kicker: "Mainos · saapuminen",
      title: "Tuletko ulkomailta? Netti ja suomalainen numero ensimmäisiksi päiviksi",
      lead: "Kartat, pankki ja työnantajan viestit toimivat heti, kun data on puhelimessa jo laskeutuessa.",
    },
    en: {
      kicker: "Ad · arriving",
      title: "Arriving from abroad? Data and a Finnish number for the first days",
      lead: "Maps, banking and your employer's messages work from the moment you land when the data is already on your phone.",
    },
  },
};

/**
 * Mainosrivi asumissivun osion perässä. `kinds` valitsee kortit sivun aiheen mukaan ja
 * `context` otsikon lukijan tilanteen mukaan; sarakemäärä seuraa korttien määrää, jotta
 * ruudukkoon ei jää reikää.
 */
export default function SettlingInAds({
  sidPrefix,
  kinds,
  context,
  className = "",
}: {
  /** esim. "stay_moving" ⇒ stay_moving_electricity / _telecom / _esim */
  sidPrefix: string;
  kinds: AdKind[];
  context: AdContext;
  className?: string;
}) {
  const hl = housingLang(useLang());
  const t = WRAP_TEXT[context][hl];
  const cols = kinds.length >= 3 ? "lg:grid-cols-3" : kinds.length === 2 ? "md:grid-cols-2" : "max-w-2xl";
  return (
    <section className={`px-5 sm:px-6 py-12 sm:py-16 bg-cream-2/60 border-y border-charcoal/[0.06] ${className}`} aria-label={t.title}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 inline-flex rounded-full bg-charcoal/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite">
          {t.kicker}
        </p>
        <h2 className="max-w-3xl font-heading text-3xl sm:text-4xl text-charcoal leading-tight tracking-wide">{t.title}</h2>
        <p className="mt-3 mb-8 max-w-2xl text-base leading-relaxed text-graphite">{t.lead}</p>
        <div className={`grid items-stretch gap-5 ${cols}`}>
          {kinds.includes("fortum") && <FortumAd sid={`${sidPrefix}_electricity`} lang={hl} />}
          {kinds.includes("telia") && <TeliaAd sid={`${sidPrefix}_telecom`} lang={hl} />}
          {kinds.includes("airalo") && <AiraloAd sid={`${sidPrefix}_esim`} lang={hl} />}
        </div>
        <p className="mt-5 max-w-3xl text-[13px] leading-relaxed text-graphite">{NOTE[hl]}</p>
      </div>
    </section>
  );
}

export { FortumAd, TeliaAd, AiraloAd };
