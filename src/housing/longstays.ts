import type { HousingCopyMap } from './types';
import { pickSources } from './sources';

/**
 * Pitkä oleskelu: kuukaudesta talveen (asumisen rooli §23).
 *
 * 🔴 Rakennettu uudelleen 23.9.2026. Vesa: *"miksi kerrotaan luxushuviloista täällä? eikö se ole huono
 * hakukoneen takia?"* ja *"täältä viedään ihan johonkin yleiseen hakuun semboon, ei mitään
 * syvälinkitystä"*. Vanha sivu oli lomasivu: 16 nimettyä hotellia ja huvilaa yleisillä kuvituskuvilla,
 * Sembon hakulinkit (hotellin nimeä ei tunnisteta, joten linkki putosi Sembon etusivulle) ja
 * lähteettömiä lukuja ("viikkohinta keskimäärin 23 % halvempi", "välikausi 30–50 % päälle").
 * Lomamajoitus kuuluu laplandstays.comille ja huvilat laplandluxuryvillas.comille; tämä sivu kertoo,
 * miten Lapissa asutaan kuukaudesta talveen ja mitä kukin sopimus vaatii.
 *
 * Kysyntä (OpenSEO 23.9.2026, fi 2246): kalustettu asunto rovaniemi 50, kalustettu vuokra-asunto
 * rovaniemi 40, lyhytaikainen vuokra-asunto rovaniemi 30 /kk. Englanniksi (UK 2826) "long stay
 * lapland", "monthly rental rovaniemi" ja "furnished apartment rovaniemi" = ei mitattavaa kysyntää.
 *
 * Lakiväitteet: laki asuinhuoneiston vuokrauksesta 481/1995 Finlexistä (ajantasainen teksti, muutos
 * 531/2026 voimaan 1.10.2026, luettu 23.9.2026), Kuluttajaliitto, Rakli 14.9.2026, DVV.
 */
const SOURCES = ['ahvl531', 'kuluttajaliittoVuokra', 'rakli', 'dvvTilapainen', 'dvv'] as const;

export const LONG_STAYS: HousingCopyMap = {
  fi: {
    metaTitle: 'Kuukaudeksi Lappiin: kalustettu asunto vai mökki',
    metaDescription:
      'Kuukaudesta talveen Lapissa: kalustettu vuokra-asunto, mökki viikkovuokralla tai työnantajan asunto. Mitä vuokralaki kattaa ja milloin tehdään muuttoilmoitus.',
    breadcrumb: 'Pitkät jaksot',
    hero: {
      eyebrow: 'Kuukaudesta talveen',
      title: 'Kuukaudeksi Lappiin.',
      subtitle:
        'Kalustettu vuokra-asunto, mökki viikkovuokralla vai työnantajan asunto: kolme tapaa asua Lapissa kuukaudesta koko talveen, ja mitä kukin sopimus sinulta vaatii.',
    },
    authorNote:
      'Lainsäädäntö Finlexistä (laki asuinhuoneiston vuokrauksesta 481/1995, muutos 531/2026), muuttoilmoitus Digi- ja väestötietovirastolta, mökkien tiedot Lomarenkaan tuotesyötteestä. Tarkistettu 23.9.2026.',
    intro: [
      'Kuukausi etätöitä Levillä, talvi Rovaniemellä tai kausi hiihtokeskuksessa: pidempi oleskelu Lapissa ratkeaa yleensä yhdellä kolmesta tavasta. Ne eroavat hinnaltaan, mutta vielä enemmän siinä, millainen sopimus niistä syntyy ja mitä laki silloin turvaa.',
      'Jos tulet lomalle etkä asumaan, hotellit ja mökit löytyvät sisarsivustoltamme <a href="https://laplandstays.com/fi/" target="_blank" rel="noopener">laplandstays.com</a> ja huvilat sivustolta <a href="https://laplandluxuryvillas.com/fi/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
    ],
    sections: [
      {
        id: 'kolme-tapaa',
        kicker: 'Kolme tapaa',
        h2: 'Asunto, mökki vai työnantajan asunto.',
        cards: [
          {
            title: 'Kalustettu vuokra-asunto',
            body: '<strong>Asuinhuoneiston vuokrasopimus</strong>, pidemmälle oleskelulle yleensä määräaikainen. Vuokralaki suojaa: vakuus on enintään kolmen kuukauden vuokra, ja 1.10.2026 alkaen se palautetaan viimeistään 14 päivässä.',
            href: '/rentals',
            linkLabel: 'Vuokra-asunnot paikkakunnittain',
          },
          {
            title: 'Mökki viikkovuokralla',
            body: 'Lomamökki vuokrataan viikoittain välittäjän kautta. Vuokralakia ei sovelleta lyhytaikaiseen ja tilapäiseen asumiseen, joten ehdot ovat välittäjän varaus- ja peruutusehdot. Vapaat mökit kuvineen alla.',
          },
          {
            title: 'Työnantajan asunto',
            body: 'Kausityössä asunto tulee usein työn mukana. Kysy ennen allekirjoitusta, sisältyykö asunto työsuhteeseen ja mitä sille tapahtuu, jos työ päättyy kesken kauden.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Kausityöntekijän asuminen',
          },
        ],
      },
      {
        id: 'sopimus',
        kicker: 'Sopimus',
        h2: 'Määräaikaista sopimusta ei irtisanota kesken.',
        bullets: [
          '<strong>Määräaikainen sopimus on voimassa siihen päivään asti, joka siinä lukee.</strong> Vuokralainen ei voi irtisanoa sitä kesken kauden. Sen voi päättää aiemmin sopimalla vuokranantajan kanssa tai laissa erikseen mainituissa tilanteissa (Kuluttajaliitto, vuokralaki).',
          '<strong>Jos et tiedä, kauanko jäät,</strong> kysy toistaiseksi voimassa olevaa sopimusta. Sen vuokralainen voi irtisanoa, ja vuokralaisen irtisanomisaika ei muutu 1.10.2026 lakiuudistuksessa (Rakli).',
          '<strong>Lyhyet sopimukset peräkkäin:</strong> jos samalle vuokralaiselle tehdään useammin kuin kahdesti peräkkäin enintään kolmen kuukauden määräaikainen sopimus, sopimus on toistaiseksi voimassa oleva, vaikka siihen olisi kirjattu määräaika.',
          '<strong>Vuokralaki ei koske kaikkea.</strong> Sitä ei sovelleta lyhytaikaiseen ja tilapäiseen asumiseen eikä majoitusliikkeisiin. Kysy siksi ennen allekirjoitusta, tehdäänkö asuinhuoneiston vuokrasopimus vai majoitussopimus.',
          '<strong>Vakuus</strong> on enintään kolmen kuukauden vuokra. 1.10.2026 alkaen se on palautettava tai sen pidättämisestä ilmoitettava viimeistään 14 päivän kuluessa vuokrasuhteen päättymisestä.',
        ],
      },
      {
        id: 'osoite',
        kicker: 'Muuttoilmoitus',
        h2: 'Kolme kuukautta tai enemmän: ilmoita osoite.',
        paras: [
          'Digi- ja väestötietoviraston mukaan muuttoilmoitus tehdään aina, kun asuinosoite muuttuu ja asuminen kestää vähintään kolme kuukautta. Jos palaat alle vuoden kuluttua samaan vakinaiseen osoitteeseen, muutto on tilapäinen, ja vakinainen osoitteesi jää voimaan.',
          'Ilmoitus tehdään aikaisintaan kuukautta ennen muuttopäivää ja viimeistään viikon kuluttua muutosta. Pysyvässä muutossa loput asiat, kuten talvirenkaat, sähkösopimus ja terveysasema, käydään läpi <a href="/fi/moving-to-lapland/">muuttajan tarkistuslistalla</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Voiko Lapista vuokrata asunnon kuukaudeksi?',
        a: 'Voi. Määräaikaisen vuokrasopimuksen voi tehdä myös lyhyeksi ajaksi, ja lomamökin voi vuokrata viikoittain. Kalustettuja asuntoja kannattaa hakea vuokraportaaleista hakusanalla ”kalustettu”. Kysy ennen sopimusta, onko kyse asuinhuoneiston vuokrasopimuksesta vai majoituksesta, koska vuokralain suoja koskee vain edellistä.',
      },
      {
        q: 'Pitääkö minun tehdä muuttoilmoitus, jos asun Lapissa talven?',
        a: 'Kyllä, jos asuminen kestää vähintään kolme kuukautta. Jos palaat alle vuoden kuluttua samaan vakinaiseen osoitteeseen, muutto on tilapäinen, ja vakinainen osoitteesi jää voimaan (Digi- ja väestötietovirasto).',
      },
      {
        q: 'Voiko määräaikaisen vuokrasopimuksen irtisanoa, jos työ loppuu?',
        a: 'Ei yleensä. Määräaikainen sopimus on voimassa siihen päivään asti, joka siinä lukee. Sopikaa päättymisestä vuokranantajan kanssa, tai valitse jo alussa toistaiseksi voimassa oleva sopimus, jonka vuokralainen voi irtisanoa.',
      },
    ],
    sources: pickSources('fi', SOURCES),
  },
  en: {
    metaTitle: 'A Month or a Winter in Lapland: Flat, Cabin or Staff Housing',
    metaDescription:
      'Staying a month or a winter in Finnish Lapland: a furnished rental flat, a cabin by the week or staff housing. What the tenancy law covers and when to notify your address.',
    breadcrumb: 'Long stays',
    hero: {
      eyebrow: 'From a month to a winter',
      title: 'A month in Lapland.',
      subtitle:
        'A furnished rental flat, a cabin by the week or housing from your employer: three ways to live in Lapland from a month to a whole winter, and what each contract asks of you.',
    },
    authorNote:
      'Legislation from Finlex (Act on Residential Leases 481/1995, amendment 531/2026), address notification from the Digital and Population Data Services Agency, cabin details from the Lomarengas product feed. Checked 23 Sep 2026.',
    intro: [
      'A month of remote work in Levi, a winter in Rovaniemi or a season at a ski resort: a longer stay in Lapland usually comes down to one of three options. They differ in price, but even more in what kind of contract you end up with and what the law then protects.',
      'If you are coming on holiday rather than to live, hotels and cabins are on our sister site <a href="https://laplandstays.com/" target="_blank" rel="noopener">laplandstays.com</a> and villas on <a href="https://laplandluxuryvillas.com/" target="_blank" rel="noopener">laplandluxuryvillas.com</a>.',
    ],
    sections: [
      {
        id: 'three-ways',
        kicker: 'Three ways',
        h2: 'A flat, a cabin or staff housing.',
        cards: [
          {
            title: 'Furnished rental flat',
            body: 'A <strong>residential lease</strong>, for a longer stay usually fixed-term. The tenancy law protects you: the deposit is at most three months’ rent, and from 1 October 2026 it must be returned within 14 days.',
            href: '/rentals',
            linkLabel: 'Rentals town by town',
          },
          {
            title: 'Cabin by the week',
            body: 'Holiday cabins are let by the week through an agency. The tenancy law does not apply to short-term and temporary accommodation, so the agency’s booking and cancellation terms apply instead. Available cabins with photos below.',
          },
          {
            title: 'Staff housing',
            body: 'In seasonal work, housing often comes with the job. Before you sign, ask whether the flat is part of the employment and what happens to it if the job ends mid-season.',
            href: '/seasonal-worker-housing',
            linkLabel: 'Seasonal worker housing',
          },
        ],
      },
      {
        id: 'contract',
        kicker: 'The contract',
        h2: 'A fixed-term lease cannot be ended early.',
        bullets: [
          '<strong>A fixed-term lease runs until the date written in it.</strong> The tenant cannot give notice mid-term. It can end earlier only by agreement with the landlord or in the specific situations set out in the law (Finnish Consumers’ Union, tenancy law).',
          '<strong>If you do not know how long you will stay,</strong> ask for an open-ended lease instead. The tenant can give notice on it, and the tenant’s notice period does not change in the reform of 1 October 2026 (Rakli).',
          '<strong>Short leases back to back:</strong> if the same tenant is given a fixed-term lease of three months or less more than twice in a row, the lease counts as open-ended, whatever end date it carries.',
          '<strong>The tenancy law does not cover everything.</strong> It does not apply to short-term and temporary accommodation or to accommodation businesses. Before you sign, ask whether you are getting a residential lease or an accommodation contract.',
          '<strong>The deposit</strong> is at most three months’ rent. From 1 October 2026 it must be returned, or its retention notified, within 14 days of the end of the tenancy.',
        ],
      },
      {
        id: 'address',
        kicker: 'Address notification',
        h2: 'Three months or more: notify your address.',
        paras: [
          'According to the Digital and Population Data Services Agency, you notify a move whenever your residential address changes and the stay lasts at least three months. If you return to the same permanent address within a year, the move is temporary and your permanent address stays in force.',
          'The notification is made at the earliest one month before moving day and at the latest one week after the move. For a permanent move, the rest, such as winter tyres, the electricity contract and your health centre, is on the <a href="/moving-to-lapland/">moving checklist</a>.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I rent a flat in Lapland for a month?',
        a: 'Yes. A fixed-term lease can also be short, and holiday cabins are let by the week. Search the rental portals for the word “kalustettu” (furnished). Before you sign, ask whether it is a residential lease or accommodation, because the tenancy law protects only the former.',
      },
      {
        q: 'Do I need to notify my address if I spend the winter in Lapland?',
        a: 'Yes, if the stay lasts at least three months. If you return to the same permanent address within a year, the move is temporary and your permanent address stays in force (Digital and Population Data Services Agency).',
      },
      {
        q: 'Can I end a fixed-term lease if my job ends?',
        a: 'Usually not. A fixed-term lease runs until the date written in it. Agree on an earlier end with the landlord, or choose an open-ended lease from the start, which the tenant can give notice on.',
      },
    ],
    sources: pickSources('en', SOURCES),
  },
};
