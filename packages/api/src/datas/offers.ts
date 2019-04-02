const berat = {
  reference: "BERAT201904",
  publishedAt: new Date('2019-04-02 10:00:00'),

  // title: "La maison médicale de Bérat recherche un second médecin généraliste libéral (exercice semi-rural)",
  title: "Installation médecin généraliste à Bérat (31700)",
  advantage1: "De nombreux professionnels installlés dans la maison de santé",
  advantage2: "Possibilité de secrétariat",
  advantage3: "Un bassin de vie dynamique offrant tous les services",

  address: {
    address: '85 Route de Rieumes, 31370 Bérat',
    street: '85 Route de Rieumes',
    zipCode: '31370',
    city: 'Berat',
    geoCode: {
      lat: 43.379848,
      lng: 1.176476
    }
  },

  emergencyDistance: 16,
  structureType: 'Maison de santé',
  contractType: 'Libéral',
  secretariatType: ['Pas de secretariat', 'Rendez vous en ligne']
,
  workCondition: 'La maison de santé de Berat cherche un second médecin généraliste pour compléter son équipe.\
  </br></br>\
  La maison de santé est composée d\'un médecin généraliste (Dr Yveline DESIREL) et de plusieurs paramédicaux (4 infirmières, une kinésithérapeute, un osthéopathe, 1 orthophoniste).\
  Deux psychologues, un chirurgien dentiste et une pharmacie sont à proximité immédiate.\
  </br></br>\
  L\'exercice est varié (semi-rural) et la maison de santé sert un territoire estimé à 4500 habitants (plus de 3000 sur la commune).\
  </br></br>\
  Il est possible d\'effectuer des gardes dans deux maisons d\'urgence de proximité (Peyssies et Frouzins)\
  </br></br>\
  Il n\'y a pas de secrétariat sur place mais cela peut être envisagé avec l\'arrivée d\'un second médecin.\
  </br></br>\
  Le cabinet disponible est un local de 27 m². Le bâtiment est récent (2014), aux normes PMR et BBC, et se compose d\'une entrée (conçu pour intégrer un secrétariat), de plusieurs espaces d\'attente et de sanitaires communs.',
  medicalStructure: 'La maison de santé bénéficie d\'un emplacement de premier choix, en centre-ville, à proximité des commerces (pharmacie, boulangeries, boucherie, pizzéria, bureau de presse), des services publics (mairie, écoles, poste), d\'un grand parking public et d\'une résidence intergénérationnelle.\
  </br></br>\
  Les patients ont accès à un laboratoire d\'analyses médicales à 12km (Carbonne), un centre de radio-échographie à 17km (Rieux Volvestre), aux plateaux techniques de Muret (CH et clinique) à 20km, de Toulouse (CHU) et Saint-Gaudens à 40km.\
  </br></br>\
  La commune est classée en zone d\'action complémentaire. L\'installation est possible pour les titulaires d\'un contrat d\'engagement de service public. Des aides à l\'installation sont également possibles (notamment le contrat de praticien territorial de médecine générale).',
  medicalStructureWebSite: '',

  lifestyleFamily: 'La commune de Bérat propose un cadre de vie agréable avec des services publics ( crèche, assistantes maternelle, école primaire, poste, médiathèque, mairie), des commerces de proximité (pharmacie, boulangeries, boucherie, pizzéria, bureau de presse,banque, marché, supérette), des grandes surfaces à proximité et un fort tissu associatif (théatre, danse, photo, sport, écriture, ...)',
  lifestyleTerritory: '- Autoroute A64 à 7 km\
  <br/>\
  - Gare à 7km\
  <br/>\
  - Toulouse à 40 mn\
  <br/>\
  - Stations de ski à 1h - Mer à 1h30',

  contacts: [{
    name: 'Evelyne TEYSSEDRE',
    phone: '05.34.47.85.60',
    position: 'Pharmacienne',
    email: 'maisonmedicale31@orange.fr'
  }
  ]
}

export const datas = [berat];
