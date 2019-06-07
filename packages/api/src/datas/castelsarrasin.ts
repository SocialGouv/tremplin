const workCondition = `Le Centre de santé compte déjà une équipe de 10 infirmiers dont l’activité est répartie à domicile et au sein du centre de santé. Des programmes de prévention sont aussi portés par l’équipe en place.

Structure d’accueil:
Centre de Santé pluri‐professionnel pouvant accueillir aujourd’hui :  
- 2 à 3 médecins généralistes
- 10 infirmiers
- 1 coordonnateur
- 1 IDE Azalée
- 2 secrétaires

Le bâtiment dans lequel seront situés les cabinets médicaux est en cours de rénovation et annexé aux autres services portés par l’APAS 82. 
Il sera composé de :
- 3 cabinets médicaux
- 1 bureau indépendant
- 1 salle de soins
- 1 salle d’attente
- 1 bureau d’accueil
- 1 salle de réunion
Les locaux sont situés en centre‐ville à proximité des commerces et notamment des pharmacies, ils sont aux normes d’accessibilité avec parking dédié aux professionnels dans un environnement très agréable. Les cabinets seront informatisés et équipés de matériel neuf.  

Activités des médecins généralistes:
- Consultations au centre, à domicile, auprès d’une patientèle variée (patients atteints de pathologies chroniques, enfants, personnes âgées, personnes en situation de handicap, …).  
- Développement de projets de prévention en santé publique et de programmes d’Education Thérapeutique du patient en lien avec l’équipe d’infirmier.  
- Développement d’actions collectives en faveur des patients et en partenariat avec les autres professionnels de santé du premier recours de la communauté de communes « Terres des Confluences».  
- Participation au développement des projets portés par l’APAS 82, de manière transversale avec l’ensemble des services.

Conditions d’exercice/points forts
- Médecin sous contrat salarié avec l’APAS 82, 35h ou 39h hebdomadaire (convention collective BAD)
- Pas de loyer à payer, ni de charges.  
- Un secrétariat à temps plein pour gérer les rendez‐vous et l’ensemble des actes administratifs à effectuer afin d’optimiser le temps médical.  
- Patientèle importante, zone de grande activité médicale.  
- Projet de santé pluri‐professionnel : exercice coordonné autour du patient avec les professionnels salariés de l’APAS 82 (102 salariés aux profils et compétences variés) et les professionnels libéraux du secteur
- Association dynamique aux services variés et complémentaires dans le secteur de l’aide et du soin à domicile (Centre de santé, SSIAD, SAAD, ESA, Accueils de jour, plateforme d’accompagnement et de répit des aidants).`

const medicalStructure = `Offre médicale du secteur:

Proche : Deux laboratoires d’analyses médicales, Centre de Secours Intercommunal, une résidence personnes âgées, EHPAD, un foyer d’hébergement, ESAT, SAVS, CMP, 4 pharmacies, professionnels libéraux médicaux et paramédicaux.  

Plateau technique : Centre hospitalier de Moissac à 10km : Urgences / SMUR / UHCD, Chirurgie viscérale, orthopédique et ORL, Médecine, SSR, HAD, SSIAD.`

const lifestyle = `Castelsarrasin est une commune du département de Tarn‐et‐Garonne, dont elle est l’unique sous‐préfecture. Elle compte 14 000 habitants. Elle est située à 30 minutes de Montauban, préfecture de ce département.

Castelsarrasin possède une gare se situant à 5 minutes à pied des locaux du Centre de Santé Pluri‐professionnel et dispose de tous les services et commerces de proximité nécessaires à la vie courante. Castelsarrasin bénéficie d’un accès direct à l’autoroute A62 et se situe à 40 minutes de Toulouse. La ville est reconnue pour son port de plaisance consacré au tourisme fluvial situé sur le Canal de Garonne. Vie locale animée : offres associatives et culturelles nombreuses. Nombreux services enfance et jeunesse (crèche, école, collège et lycée).  

Le marché remplit les rues de produits du terroir chaque jeudi matin, faisant de Castelsarrasin « la fleurie » un lieu réputé de la gastronomie. Labélisée Villes et Villages fleuris 3 fleurs, animée tout au long de l’année, la ville est traversée par le canal des deux Mers et la Vélo Voie Verte. Le port de plaisance “Jacques-Yves Cousteau” est idéalement situé, à deux pas du centre-ville.`

export const castelsarrasin = {
  reference: "CASTELSARRASIN201906",
  publishedAt: new Date('2019-06-07 08:00:00'),

  address: {
    address: '34-36 Bd du 4 Septembre, 82100 Castelsarrasin',
    zipCode: '82100',
    city: 'Castelsarrasin',
    geoCode: {
      lat: 44.042349,
      lng: 1.106329
    }
  },

  emergencyDistance: 10,
  structureType: 'Centre de santé',
  contractType: 'Salarié',
  secretariatType: ['Secrétariat sur place'],
  workCondition: workCondition,
  medicalStructure: medicalStructure,
  cartosante: 'https://cartosante.atlasante.fr/#c=report&chapter=list_geo&report=r01&selgeo1=tv.82033&selgeo2=fra.99',
  medicalStructureWebSite: 'http://www.apas82.fr',

  lifestyle: lifestyle,

  lifestyleLinks: [
    {
      description: 'Office du tourisme',
      link: 'https://www.tourisme-moissac-terresdesconfluences.fr/fr'
    },
    {
      description: 'Site officiel de la commune de Castelsarrasin',
      link: 'http://www.ville-castelsarrasin.fr/'
    }
  ],

  financialAids: {
    types: ['ZAC'],
    cesp: true,
    aids: ['PTMG', 'PTMA', 'PTMR'],
    description: 'Les aides possibles sont affichées à titre indicatif en tenant compte du zonage de la commune. Pour de plus amples informations, contactez le 0811 910 009 ou rendez vous à l\'adresse <a href="http://www.occitanie.paps.sante.fr">http://www.occitanie.paps.sante.fr</a>'
  },

  contacts: [
    {
      name: 'Marie ALAYRAC',
      phone: '05 63 32 71 80',
      position: 'Directrice APAS 82 / Infirmière',
      email: 'direction@apas82.fr'
    }
  ],

  title: "Installation médecin généraliste à Castelsarrasin (82100)",
  advantage1: "Une équipe de praticiens salariés qui se consacrent entièrement à l'exercice de la médecine.",
  advantage2: "Un projet de santé pluri‐professionnel  d'exercice coordonné autour du patient bâti avec de nombreux professionnels.",
  advantage3: "Sous préfecture disposant de toutes les commodités, de 4 plans d’eau, de sites et bâtiments remarquables et d’infrastructures culturelles et sportives.",

  photos: [
    {
      header: true,
      name: 'CASTELSARRASIN201906_01.jpg',
      description: 'Centre de santé'
    },
    {
      header: false,
      name: 'CASTELSARRASIN201906_02.jpg',
      description: 'Centre de santé'
    },
    {
      header: false,
      name: 'CASTELSARRASIN201906_03.jpg',
      description: 'Centre de santé'
    }
  ]
}
