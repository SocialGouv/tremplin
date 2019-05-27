const workCondition = `Le centre de santé du Pays d'Olmes recrute 2 Médecins généralistes salariés, à temps complet ou 80%, pour son ouverturee en septembre 2019.
 
Afin de répondre aux besoins des habitants en matière d’offre de soins, la ville de Lavelanet et les communes environnantes ont fait le choix de créer un Centre de Santé avec une ouverture au public le 1er septembre 2019.

Pour les médecins, l’intérêt se trouve dans une offre d’exercice différente de l’exercice libéral. Les praticiens sont salariés, travaillent en équipe et voient leurs tâches administratives déléguées pour se consacrer entièrement à l’exercice de la médecine. De plus, la mobilité géographique au cours de leur carrière est facilitée.

Vous bénéficierez d'un exercice varié dans un cadre de travail agréable, avec :
- Des locaux récemment rénovés et adaptés, entièrement aménagés ;
- Des consultations au centre de santé et des visites à domicile et en EHPAD ;
- Une pratique centrée sur la médecine : les tâches administratives, la préparation des dossiers, les encaissements pris en charge par une équipe administrative ;
- Des réunions pluri professionnelles ;
- La possibilité d’être maître de stage universitaire ;
- La possibilité d’être associé à l’évolution du projet de santé, au développement du centre et à la promotion de l’exercice interprofessionnel sur le territoire ;
- PDSA : 4 à 5 WE ou fériés par an, uniquement en journée (8h 20 h).

Profil et compétences:
- Docteur en médecine, vous êtes inscrit à l’Ordre des Médecins et autorisés à exercer la médecine générale ;
- Vous disposez de qualités relationnelles vous permettant d’accueillir tous types de publics ;
- Vous aimez travailler en équipe ;
- Vous adhérez au projet de santé ;
- Vous êtes titulaire du permis B.

Spécificités:
- Contractuel 3 ans renouvelable ;
- Conditions de travail attractives : 35 heures hebdomadaires, sur 5 jours pour un temps plein, 80% sur 4 jours possible.
Rémunérations et avantages
- Salaire fixe garanti : rémunération statutaire + régime indemnitaire + prime annuelle basé sur la grille de Praticien Hospitalier 7 ème échelon ;
- Participation de l’employeur aux mutuelles santé et prévoyance maintien de salaire.`;

const lifestyle = `- Un environnement agréable, au pied des montagnes, à 1h15 de Toulouse, 1h 30 de la méditerranée.
- Une vie locale riche en associations et animations ;
- Equipements de proximité : écoles, collèges, lycée professionnel, lycée général à 17 Km, services publics ;
- Le territoire dispose d’une véritable offre culturelle : cinéma (2 salles), salles festives et culturelles ;
- Nombreux équipements et clubs sportifs ;
- Ski, randonnée et activités de plein air à proximité immédiate.`

const medicalStructure = `Les patients ont accès à un laboratoire d'analyses médicales à 24km (Villefranche de Rouergue), un centre de radiologie à 24km (Villefranche de Rouergue), aux plateaux techniques de Villefranche de Rouergue  à 24km, d'Albi à 32 km et de Montauban à 45 km.`

export const lavelanet = {
  reference: "LAVELANET201905",
  publishedAt: new Date('2019-05-27 10:00:00'),

  title: "Installation médecin généraliste à Lavelanet (82330)",
  advantage1: "Une équipe de praticiens salariés qui se consacrent entièrement à l'exercice de la médecine",
  advantage2: "Proximité immédiate d'un centre hospitalier.",
  advantage3: "Un environnement agréable, au pied des montagnes, à 1h15 de Toulouse et 1h 30 de la Méditerranée.",

  photos: [],

  address: {
    address: 'Rue de la Soulano, 09300 Lavelanet',
    street: '',
    zipCode: '09300',
    city: 'Lavelanet',
    geoCode: {
      lat: 42.930203,
      lng: 1.857974
    }
  },

  emergencyDistance: 0,
  structureType: 'Centre de santé',
  contractType: 'Salarié',
  secretariatType: ['Secrétariat sur place'],
  workCondition: workCondition,
  medicalStructure: medicalStructure,
  cartosante: 'https://cartosante.atlasante.fr/#c=report&chapter=list_geo&report=r01&selgeo1=tv.09160&selgeo2=fra.99',
  medicalStructureWebSite: '',

  lifestyle: lifestyle,

  lifestyleLinks: [
    {
      description: 'Mairie de Lavelanet',
      link: 'http://www.mairie-lavelanet.fr'
    },
    {
      description: 'Ariège tourisme',
      link: 'http://www.ariege-pyrenees-cathares.com'
    }
  ],

  financialAids: {
    types: ['Zone d\'Action Complémentaire (ZAC)', 'Zone de revitalisation rurale (ZRR)'],
    cesp: true,
    aids: ['PTMG', 'PTMA', 'PTMR', 'Exonération impôts'],
    description: 'Les aides possibles sont affichées à titre indicatif en tenant compte du zonage de la commune. Pour de plus amples informations, contactez le 0811 910 009 ou rendez vous à l\'adresse <a href="http://www.occitanie.paps.sante.fr">http://www.occitanie.paps.sante.fr</a>'
  },

  contacts: [
    {
      name: 'Dr Paubert',
      phone: null,
      position: 'Médecin généraliste',
      email: 'docteur.yvespaubert@gmail.com'
    }
  ]
}
