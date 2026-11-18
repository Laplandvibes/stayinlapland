import { Mountain } from 'lucide-react'
import type { AdSpec } from '../AdUnit'

// Halti — Finnish outdoor brand since 1976, named after Finland's highest fell.
// Perfect fit for skiresorts / nature / what-to-pack / gifts. Adtraction
// deep-link. Logo: _affiliate/logos/adtraction-halti.png
// → public/images/partners/halti.png.
const halti: AdSpec = {
  key: 'halti',
  brand: 'Halti',
  logo: '/images/partners/halti.png',
  // dest= on pakollinen: ilman sitä Adtraction-tracking pudottaa kävijän
  // halti.fi-etusivulle. Worker (handleAdtraction) kääri dest:in tracking-
  // linkin &url=-parametriin, joten dest = kohdesivun täysi URL kauppiaan
  // omalla domainilla. halti.fi on yksikielinen (lang="fi", ei hreflang-
  // vaihtoehtoja), joten yksi fi-dest kaikille kielille — dest EI saa osoittaa
  // halti.com:iin, koska /go/halti käyttää kotimaan kaupan ohjelmaa
  // (a=1622199573) ja halti.com on eri ohjelma (worker: halticom).
  // Polku verifioitu livenä 2026-08-14: HTTP 200, <title> "Talvitakit
  // naisille ja miehille – Halti verkkokauppa", 150+ talvitakkituotetta
  // leipätekstissä.
  linkFor: (sid) =>
    `https://go.laplandvibes.com/go/halti?sid=${encodeURIComponent(sid)}&dest=${encodeURIComponent('https://www.halti.fi/collections/talvitakit')}`,
  accent: '#1E40AF',
  accentDark: '#1E3A8A',
  icon: Mountain,
  copy: {
    fi: {
      eyebrow: 'Varusteet pohjoiseen',
      headline: 'Halti, suomalaiset ulkoiluvarusteet, nimetty Suomen korkeimman tunturin mukaan',
      sub: 'Suomalainen ulkoilumerkki vuodesta 1976, suunniteltu juuri tällaisiin talviin. Lasketteluvaatteet, kerrastot, kuoritakit ja kengät, joilla pakkaspäivä ei lopu kesken.',
      trust: ['Suomalainen merkki v. 1976', 'Tehty pohjoisen talveen', 'Vaatteet ja varusteet samasta paikasta'],
      cta: 'Katso talvivarusteet',
      poweredBy: 'Varusteet Haltilta',
    },
    en: {
      eyebrow: 'Gear for the north',
      headline: 'Halti, Finnish outdoor gear named after Finland’s highest fell',
      sub: 'A Finnish outdoor brand since 1976, designed for exactly this kind of winter. Ski wear, base layers, shell jackets and boots that keep a −20° day going.',
      trust: ['Finnish brand since 1976', 'Built for northern winters', 'Clothing and gear in one shop'],
      cta: 'See winter gear',
      poweredBy: 'Gear from Halti',
    },
    de: {
      eyebrow: 'Ausrüstung für den Norden',
      headline: 'Halti, finnische Outdoor-Ausrüstung, benannt nach Finnlands höchstem Fjell',
      sub: 'Eine finnische Outdoor-Marke seit 1976, entworfen für genau solche Winter. Skibekleidung, Funktionswäsche, Shell-Jacken und Schuhe, mit denen der Frosttag nicht vorzeitig endet.',
      trust: ['Finnische Marke seit 1976', 'Für nordische Winter gebaut', 'Kleidung und Ausrüstung in einem'],
      cta: 'Winterausrüstung ansehen',
      poweredBy: 'Ausrüstung von Halti',
    },
    ja: {
      eyebrow: '北のための装備',
      headline: 'Halti：フィンランド最高峰の名を持つ、フィンランドのアウトドアブランド',
      sub: '1976年から続くフィンランドのアウトドアブランド。まさにこの土地の冬のために設計されています。スキーウェア、ベースレイヤー、シェルジャケット、ブーツ。氷点下20度の一日を最後まで楽しむために。',
      trust: ['1976年からのフィンランドブランド', '北国の冬のための設計', 'ウェアも装備もひとつの店で'],
      cta: '冬の装備を見る',
      poweredBy: '装備はHaltiから',
    },
    es: {
      eyebrow: 'Equipo para el norte',
      headline: 'Halti, equipo outdoor finlandés con el nombre del monte más alto de Finlandia',
      sub: 'Marca finlandesa de outdoor desde 1976, diseñada exactamente para inviernos como este. Ropa de esquí, capas térmicas, chaquetas técnicas y botas para que el día a −20° no se corte a la mitad.',
      trust: ['Marca finlandesa desde 1976', 'Hecha para inviernos nórdicos', 'Ropa y equipo en una tienda'],
      cta: 'Ver equipo de invierno',
      poweredBy: 'Equipo de Halti',
    },
    'pt-BR': {
      eyebrow: 'Equipamento para o norte',
      headline: 'Halti, equipamento outdoor finlandês com o nome do monte mais alto da Finlândia',
      sub: 'Marca finlandesa de outdoor desde 1976, projetada exatamente para invernos assim. Roupas de esqui, segunda pele, jaquetas técnicas e botas para o dia a −20° render até o fim.',
      trust: ['Marca finlandesa desde 1976', 'Feita para o inverno nórdico', 'Roupas e equipamento juntos'],
      cta: 'Ver equipamento de inverno',
      poweredBy: 'Equipamento da Halti',
    },
    'zh-CN': {
      eyebrow: '北方装备',
      headline: 'Halti：以芬兰最高峰命名的芬兰户外品牌',
      sub: '始于1976年的芬兰户外品牌，正是为这样的冬天设计。滑雪服、保暖内层、冲锋衣和雪地靴，零下20度的一天也能玩到尽兴。',
      trust: ['1976年创立的芬兰品牌', '为北欧寒冬设计', '服装装备一站购齐'],
      cta: '查看冬季装备',
      poweredBy: '装备来自 Halti',
    },
    ko: {
      eyebrow: '북쪽을 위한 장비',
      headline: 'Halti: 핀란드 최고봉의 이름을 딴 핀란드 아웃도어 브랜드',
      sub: '1976년부터 이어져 온 핀란드 아웃도어 브랜드. 바로 이런 겨울을 위해 설계됐습니다. 스키복, 베이스레이어, 쉘 재킷, 부츠까지. 영하 20도의 하루도 끝까지 즐길 수 있게.',
      trust: ['1976년부터 핀란드 브랜드', '북유럽 겨울에 맞춘 설계', '의류와 장비를 한곳에서'],
      cta: '겨울 장비 보기',
      poweredBy: 'Halti의 장비',
    },
    fr: {
      eyebrow: 'Équipement pour le nord',
      headline: 'Halti, l’équipement outdoor finlandais qui porte le nom du plus haut fjäll de Finlande',
      sub: 'Marque outdoor finlandaise depuis 1976, conçue exactement pour ce genre d’hiver. Tenues de ski, sous-couches, vestes techniques et bottes pour que la journée à −20° aille jusqu’au bout.',
      trust: ['Marque finlandaise depuis 1976', 'Conçue pour l’hiver nordique', 'Vêtements et équipement réunis'],
      cta: 'Voir l’équipement d’hiver',
      poweredBy: 'Équipement Halti',
    },
    it: {
      eyebrow: 'Attrezzatura per il nord',
      headline: 'Halti, attrezzatura outdoor finlandese col nome del fjäll più alto della Finlandia',
      sub: 'Marchio outdoor finlandese dal 1976, progettato esattamente per inverni così. Completi da sci, strati base, gusci e scarponi perché la giornata a −20° non finisca a metà.',
      trust: ['Marchio finlandese dal 1976', 'Fatto per l’inverno nordico', 'Abbigliamento e attrezzatura insieme'],
      cta: 'Vedi l’attrezzatura invernale',
      poweredBy: 'Attrezzatura Halti',
    },
    nl: {
      eyebrow: 'Uitrusting voor het noorden',
      headline: 'Halti, Finse outdooruitrusting vernoemd naar de hoogste fjäll van Finland',
      sub: 'Een Fins outdoormerk sinds 1976, ontworpen voor precies dit soort winters. Skikleding, baselayers, shell-jassen en schoenen waarmee de dag van −20° niet halverwege eindigt.',
      trust: ['Fins merk sinds 1976', 'Gemaakt voor noordse winters', 'Kleding en uitrusting in één'],
      cta: 'Bekijk winteruitrusting',
      poweredBy: 'Uitrusting van Halti',
    },
    sv: {
      eyebrow: 'Utrustning för Norden',
      headline: 'Halti, finsk friluftsutrustning uppkallad efter Finlands högsta fjäll',
      sub: 'Ett finskt friluftsmärke sedan 1976, designat för precis den här sortens vinter. Skidkläder, underställ, skaljackor och kängor som håller en −20-gradig dag igång.',
      trust: ['Finskt märke sedan 1976', 'Byggt för nordiska vintrar', 'Kläder och utrustning i en butik'],
      cta: 'Se vinterutrustningen',
      poweredBy: 'Utrustning från Halti',
    },
  },
}

export default halti
