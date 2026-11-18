/**
 * Ranska (fr) · yhteiset tekstit (UI, lähteiden nimet, mainosrivi, mökkikaruselli). Käännetty englannista 15.11.2026, natiivilukija tarkistanut.
 * Lähde: labels.ts, home.ts, sources.ts, whentogo.ts, SettlingInAds.tsx, CabinCarousel.tsx (`en`). Luvut, linkit, tunnisteet (id, sid, href, src, destination) ja HTML-merkinnät ovat
 * samat kuin englannissa: käännös ei tuo yhtään lukua, jota lähteessä ei ole.
 */
import type { HousingCommonCopy } from '../types';

const common: HousingCommonCopy = {
  "sourceLabels": {
    "tkVuokrat": "Statistics Finland : loyers des logements, logements locatifs du parc privé, loyer moyen au m² 2026T3 (tableau 15fa, consulté le 15 novembre 2026)",
    "tkVaesto": "Statistics Finland : structure de la population, population au 31 décembre 2025 par commune (tableau 11ra)",
    "tkSahko": "Statistics Finland : prix de l’électricité par type de consommateur, prix total en juin 2026 (tableau 13rb, consulté le 15 novembre 2026)",
    "tkPolttoaine": "Statistics Finland : prix à la consommation des carburants liquides, juin 2026 (tableau 12ge, consulté le 15 novembre 2026)",
    "kela": "Kela (Institution de sécurité sociale) : allocation logement générale, frais de logement maximaux et groupes de communes 2026",
    "ahvl": "Loi sur les baux d’habitation (481/1995), article 8 sur le dépôt de garantie et article 52 sur les délais de préavis",
    "ahvl531": "Loi sur les baux d’habitation (481/1995), texte consolidé avec la modification 531/2026 (en vigueur le 1er octobre 2026) : champ d’application, baux à durée déterminée, dépôt de garantie ; consulté le 15 novembre 2026",
    "kuluttajaliittoVuokra": "Union finlandaise des consommateurs (Kuluttajaliitto) : guide de la location (baux à durée déterminée, préavis et dépôts de garantie ; mis à jour le 7 octobre 2026)",
    "dvvTilapainen": "Agence des services numériques et des données de population (DVV) : questions fréquentes sur le déménagement en Finlande (déménagements temporaires, règle des trois mois)",
    "rakli": "Rakli (association finlandaise des propriétaires immobiliers) : réforme de la loi sur les baux d’habitation du 1er octobre 2026 : restitution du dépôt en 14 jours et préavis",
    "traficom": "Traficom (Agence finlandaise des transports et des communications) : pneus été et hiver",
    "dvv": "Agence des services numériques et des données de population (DVV) : déclaration de changement d’adresse",
    "kuntaliitto": "Association des communes de Finlande : frais d’éducation de la petite enfance à partir du 1er août 2026",
    "perusopetuslaki": "Loi sur l’enseignement de base (628/1998) : gratuité de l’enseignement (article 31) et transport scolaire (article 32)",
    "fmi": "Institut météorologique finlandais : saisons astronomiques (nuit polaire et soleil de minuit)",
    "ounasvaara": "Ounasvaara : pistes de ski alpin et de fond (environ 100 km de pistes de fond, dont 50 km éclairées ; consulté le 23 septembre 2026)",
    "foreca": "Encyclopédie météo de Foreca : la nuit polaire en Finlande",
    "yle2017": "Yle, 25 octobre 2017 : le tourisme en Laponie est en plein essor, mais il n’y a pas assez de logements pour les saisonniers",
    "yle2023": "Yle, 25 mai 2023 : la pénurie de logements pousse les travailleurs des stations dans des appartements de vacances",
    "yle2025das": "Yle, 27 juillet 2026 : à Rovaniemi, la pénurie de logements reste grave : des centaines d’étudiants cherchent un toit pendant que les touristes prennent les studios",
    "lapinKansaDas": "Lapin Kansa, 12 juillet 2017 : la course aux logements est lancée : DAS ne peut loger que 30 % des demandeurs",
    "yle2026yllas": "Yle, 16 juin 2026 : à Ylläs, des commerçants se lancent pour vaincre la pénurie de logements",
    "kesko2026": "Kesko, 17 juin 2026 : les commerçants du K-Market Jounin Kauppa font construire trois maisons mitoyennes pour leurs employés",
    "yle2026rovaniemi": "Yle, 9 mars 2026 : la pénurie de logements à Rovaniemi a produit une solution inventive : des saisonniers ont vécu chez leur patron",
    "rovaniemi": "Ville de Rovaniemi : logement (bailleurs et services de recherche)",
    "das": "Fondation Domus Arctica (DAS) : demander un logement étudiant",
    "kittila": "Commune de Kittilä : logements locatifs (Kittilän Vuokratalot Oy)",
    "kemi": "Ville de Kemi : logements locatifs (Kiinteistö Oy Itätuuli)",
    "itatuuli": "Kiinteistö Oy Itätuuli : demande de logement (valable 4 mois) et logements sans dépôt de garantie, 0 € (consulté le 15 novembre 2026)",
    "keminmaaVuokra": "Keminmaan Vuokra-asunnot Oy : comment faire une demande (demande valable 3 mois, dépôt d’un mois de loyer) et pages des biens (consulté le 15 novembre 2026)",
    "keminmaa": "Commune de Keminmaa : Keminmaan Vuokra-asunnot Oy",
    "tornio": "Ville de Tornio : logements locatifs (Tornion Krunni Oy)",
    "sodankyla": "Commune de Sodankylä : logements locatifs communaux (Asentopuulaaki Oy)",
    "tkVuokratPostinumero": "Statistics Finland : loyers moyens des logements locatifs du parc privé par zone postale 2015T1–2025T4 (tableau 13eb, archive, consulté le 15 novembre 2026)",
    "tkAvainluvut": "Statistics Finland : chiffres clés des communes (part des chômeurs dans la population active, 2024)",
    "kemijarvi": "Ville de Kemijärvi : les logements locatifs de la ville (560 logements)",
    "kemijarviHaku": "Ville de Kemijärvi : demander un logement (demande valable quatre mois)",
    "kemijarviVuostimo": "Ville de Kemijärvi : biens locatifs, Vuostimo (maisons mitoyennes, à 14 km de Pyhätunturi)",
    "kemijarviToihin": "Ville de Kemijärvi : travailler à Kemijärvi",
    "kemijarviTietoa": "Ville de Kemijärvi : à propos de Kemijärvi",
    "kemijarviTalousarvio": "Ville de Kemijärvi : budget 2026 et plan financier 2027–2028 (conseil municipal, 16 décembre 2025) : hausses de loyer, objectifs d’occupation, employeurs",
    "redu": "Centre de formation de Laponie REDU : logement (foyers d’étudiants à Rovaniemi, Kemijärvi, Kittilä et Sodankylä)",
    "osrm": "OpenStreetMap : distances routières avec le calculateur d’itinéraires OSRM (calculées le 15 novembre 2026)",
    "asentopuulaaki": "Asentopuulaaki Oy : les biens, avec le loyer de chaque logement (consulté le 15 novembre 2026)",
    "asentopuulaakiHaku": "Asentopuulaaki Oy : demander un logement",
    "asentopuulaakiVapaat": "Asentopuulaaki Oy : recherche de logements, logements libres et bientôt libres (consulté le 15 novembre 2026)",
    "asentopuulaakiMuutto": "Asentopuulaaki Oy : déménager (préavis et restitution du dépôt de garantie)",
    "sodankyla2025": "Commune de Sodankylä, 2 juillet 2025 : 36 logements neufs achevés à Sodankylä, l’offre de logements augmente",
    "sodankylaAsuntola": "Commune de Sodankylä, 5 mars 2026 : la commune met en place un foyer d’étudiants",
    "sodankylaOpintolaina": "Commune de Sodankylä : programme pilote de compensation régionale des prêts étudiants",
    "sodankylaMuuttajalle": "Commune de Sodankylä : pour les nouveaux arrivants",
    "yle2025sodankyla": "Yle, 11 septembre 2025 : une solution rare à la pénurie de logements : des habitants de Sodankylä reçoivent des maisons neuves sans emprunt",
    "yle2026kevitsa": "Yle, 26 mai 2026 : l’investissement d’un milliard d’euros à Kevitsa est annulé, la mine fermera, et 77 emplois disparaissent dès maintenant",
    "yle2026kasarmi": "Yle, 2 avril 2026 : la construction de la nouvelle immense caserne de Sodankylä démarre cet été",
    "yle2026sakatti": "Yle, 18 juin 2026 : la section de Laponie de l’Association finlandaise pour la protection de la nature fait appel de la décision sur Sakatti",
    "yle2026opintolaina": "Yle, 1er septembre 2026 : la compensation des prêts étudiants peut être demandée dans trois communes de Laponie",
    "maavoimat": "Armée de terre finlandaise : la brigade des chasseurs, présentation",
    "angloSakatti": "Anglo American Finland : à propos de Sakatti",
    "inari": "Commune d’Inari : se loger à Inari (Inarin Vuokra-asunnot Oy et bailleurs privés)",
    "lvDrive": "LaplandVibes : itinéraires routiers vers la Laponie (distances par étape)",
    "laplandwork": "LaplandWork : s’installer en Finlande : titres de séjour, numéro d’identité, carte d’impôt, compte bancaire",
    "lapha": "Comté de services de bien-être de Laponie (Lapha) : services de santé et services sociaux"
  },
  "whenToGoSourceLabels": {
    "fmi1991": "Institut météorologique finlandais : statistiques climatiques de la Finlande 1991–2020 (Rapports 2021:8), stations de Rovaniemi, de Sodankylä et d’Utsjoki Kevo",
    "fmiLumi": "Institut météorologique finlandais : statistiques de la neige (début et fin du manteau neigeux permanent 1991–2020)",
    "fmiVuodenajat": "Institut météorologique finlandais : saisons astronomiques (nuit polaire et soleil de minuit)",
    "fmiRevontulet": "Institut météorologique finlandais : les aurores boréales, questions et réponses",
    "fmiRevontuletMissa": "Institut météorologique finlandais : où et quand voit-on les aurores boréales ?",
    "fmiJoulu": "Institut météorologique finlandais : la période de Noël (neige la veille de Noël, 1991–2020)",
    "fmiPilvi": "Institut météorologique finlandais : la période la plus sombre de l’année approche de nouveau (5 décembre 2014)",
    "timeanddate": "timeanddate.com : lever et coucher du soleil 2027 (Rovaniemi, Sodankylä, Kittilä, Ivalo, Utsjoki ; source secondaire)",
    "utsjoki": "Explore Utsjoki (commune d’Utsjoki) : la nuit polaire",
    "mhMaasto": "Metsähallitus, luontoon.fi : l’année des conditions de terrain dans le nord de la Finlande (couleurs d’automne, moustiques, neige durcie, dégel)",
    "mhMarjat": "Metsähallitus, luontoon.fi : les saisons de cueillette de baies et les baies comestibles",
    "traficom": "Traficom (Agence finlandaise des transports et des communications) : pneus été et hiver",
    "paliskunnat": "Association des éleveurs de rennes : accidents de la route avec des rennes",
    "tkMajoitus": "Statistics Finland : statistiques de l’hébergement, établissements d’hébergement de la Laponie et hôtels de Rovaniemi par mois 2023–2025 (tableaux 11ix, 11iz, 11lm ; établissements d’au moins 20 lits)",
    "oph": "Agence nationale finlandaise de l’éducation : périodes scolaires et vacances 2026–2027 (10 avril 2026)",
    "visitFinland": "Visit Finland : les meilleures périodes pour voir les aurores boréales (mis à jour en avril 2026)",
    "das": "DAS (logement étudiant à Rovaniemi) : questions fréquentes",
    "yleAsunnot": "Yle, 27 juillet 2026 : logements étudiants à Rovaniemi et appartements loués aux touristes pour l’hiver",
    "yleKausi": "Yle, 16 avril 2025 : nombre de saisonniers et fin de la saison",
    "yleRekry": "Yle, 18 juin 2024 : le recrutement pour la saison d’hiver culmine en août",
    "levi": "Levi : la station de ski aujourd’hui (pistes de début de saison dès octobre, Coupe du monde de ski alpin du 13 au 15 novembre 2026)",
    "arcticRally": "Arctic Lapland Rally du 28 au 30 janvier 2027",
    "msff": "Festival du film du soleil de minuit du 16 au 20 juin 2027",
    "jutajaiset": "Jutajaiset : festival de musique et de danse folkloriques à Rovaniemi en octobre",
    "simerock": "Simerock du 13 au 14 août 2027",
    "arcticSnowHotel": "Arctic SnowHotel : ouverture le 15 décembre 2026"
  },
  "adsNote": "Liens d’affiliation : si vous vous inscrivez par leur intermédiaire, nous percevons une petite commission. Votre prix reste le même.",
  "adsWrap": {
    "moving": {
      "kicker": "Publicité · autour du déménagement",
      "title": "Électricité et internet réglés avant le jour du déménagement",
      "lead": "Les deux peuvent être souscrits en ligne avant d’avoir les clés en main, pour que le nouveau logement ait du courant et une connexion dès le premier soir."
    },
    "electricity": {
      "kicker": "Publicité · contrat d’électricité",
      "title": "Vous louez ? Le contrat d’électricité est en général à votre charge",
      "lead": "Le tableau ci-dessus montre ce que coûte un kilowattheure. Le contrat peut être conclu en ligne avant le jour du déménagement."
    },
    "arrival": {
      "kicker": "Publicité · arrivée",
      "title": "Vous arrivez de l’étranger ? Des données mobiles et un numéro finlandais pour les premiers jours",
      "lead": "Cartes, banque et messages de votre employeur fonctionnent dès l’atterrissage quand les données sont déjà sur votre téléphone."
    },
    "renting": {
      "kicker": "Publicité · pour les locataires",
      "title": "En plus du loyer : l’électricité et un forfait mobile",
      "lead": "Le locataire souscrit en général lui-même son contrat d’électricité, et cela peut se faire en ligne avant le jour du déménagement. Un numéro finlandais facilite les démarches bancaires et les services Suomi.fi, et une eSIM dépanne les premiers jours, en attendant d’avoir un numéro finlandais."
    }
  },
  "cabins": {
    "ad": "Publicité",
    "kicker": "Un chalet à la semaine",
    "h2": "Chalets disponibles, avec photos.",
    "lead": "Les chalets se louent à la semaine, aussi pour plusieurs semaines d’affilée. Les détails viennent du flux de produits de Lomarengas et sont actualisés chaque jour.",
    "tabs": {
      "levi": "Levi",
      "yllas": "Ylläs",
      "saariselka": "Saariselkä",
      "lapland": "Reste de la Laponie"
    },
    "weekFrom": "semaine à partir de {price} €",
    "guests": "Personnes",
    "bedrooms": "Chambres",
    "size": "Surface",
    "view": "Voir le chalet",
    "browseAll": "Les {count} chalets : {area}",
    "note": "Liens d’affiliation : si vous réservez par Lomarengas, nous percevons une petite commission. Votre prix reste le même. Ouvrez un chalet pour voir ses semaines libres et le prix de votre semaine. La page de réservation de Lomarengas s’ouvre en anglais (le site existe en finnois et en anglais).",
    "updated": "Flux mis à jour"
  }
};

export default common;
