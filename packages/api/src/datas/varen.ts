const workCondition = `La Maison de Santé Pluriprofessionnelle de VAREN (82330) recherche un médecin généraliste pour rejoindre une équipe dynamique composée de 3 MG, 3 IDE et 1 IDE ASALEE, 1 pédicure-podologue, 1 orthophoniste, 1 diététicienne, 1 sage-femme, 1 psychologue, 1 masseur-kinésithérapeute ainsi que 2 pharmaciens.

L’un des médecins généralistes de la MSP partant très prochainement à la retraite (juillet 2019), il est à la recherche d’un successeur pour prendre en charge sa patientèle.

Pour répondre aux besoins du territoire rural dans laquelle elle se situe, l'équipe de la MSP a développé plusieurs projets professionnels et accueil des stagiaires.

Le futur médecin aura également la possibilité d'effectuer des visites dans l'EHPAD qui se trouve à proximité.

Les conditions matérielles permettent de se consacrer à sa pratique:  Loyers attractifs, mise à disposition d’un service secrétariat/accueil, salle de repos avec coin cuisine, bureau tout équipé, (mobilier, téléphonie, internet).`

const lifestyle = `Varen est une commune du département du Tarn-Et-Garonne à la frontière du Tarn et de l’Aveyron, entre Albi (45km), Montauban (55km) et Villefranche de Rouergue (35km). 

Les paysages sont variés: avec ses fameuses Gorges de l'Aveyron (le site de Saint-Antonin-Noble-Val est à seulement 15min), ses falaises calcaires, les causses environnants, ses grottes sauvages ou aménagées, ses prairies agricoles et ses vastes forêts. Dans les environs immédiats se trouvent de magnifiques villes comme Saint-Antonin-Noble-Val, Cordes-sur-Ciel et Najac avec son château qui domine la ville.

Le village a conservé de son passé d'ancien doyenné, un beau patrimoine architectural comme en témoignent l'église romane du XIème siècle et le château du XVème siècle. 
Le cadre de vie est agréable et le passage de l’Aveyron offre de nombreuses possibilités de baignade et de canoë. 
 
Varen dispose également de services de proximité:  Poste, Restaurant, épicerie, boulangerie, marché et des moyennes surfaces à proximité.

La crèche la plus proche se situe à Milhars (4 km), l'école élémentaire à Varen, le collège à Saint Antonin Nobleval (11 km) et le lycée général à Villefranche de Rouergue (24 km).

Les plus importantes communes environnantes sont Gaillac à 30 mn, Albi à 40 mn et Toulouse à 1h30.`;

const medicalStructure = `Les patients ont accès à un laboratoire d'analyses médicales à 24km (Villefranche de Rouergue), un centre de radiologie à 24km (Villefranche de Rouergue), aux plateaux techniques de Villefranche de Rouergue  à 24km, d'Albi à 32 km et de Montauban à 45 km.`

export const varen = {
  reference: "VAREN201905",
  publishedAt: new Date('2019-05-27 12:00:00'),

  title: "Installation médecin généraliste à Varen (82330)",
  advantage1: "Une maison de santé dynamique avec de nombreux projets pluri-professionnels",
  advantage2: "Un bureau tout équipé, un loyer attractif et des services communs",
  advantage3: "Un cadre de vie exceptionnel dans un village médiéval, construit autour de son château au bord de l’Aveyron",

  photos: [
    {
      header: false,
      name: 'VAREN201905_01.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_02.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_03.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_04.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_05.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_06.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_07.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_08.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_09.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_10.jpg',
      description: 'Maison de santé de Varen'
    },
    {
      header: false,
      name: 'VAREN201905_11.jpg',
      description: 'Maison de santé de Varen'
    },
  ],

  address: {
    address: 'Le Bourg, 82330 Varen',
    street: '',
    zipCode: '82330',
    city: 'Varen',
    geoCode: {
      lat: 44.157388,
      lng: 1.892512
    }
  },

  emergencyDistance: 22,
  structureType: 'Maison de santé',
  contractType: 'Libéral',
  secretariatType: ['Secrétariat sur place'],
  workCondition: workCondition,
  medicalStructure: medicalStructure,
  cartosante: 'https://cartosante.atlasante.fr/#c=report&chapter=list_geo&report=r01&selgeo1=tv.09160&selgeo2=fra.99',
  medicalStructureWebSite: '',

  lifestyle: lifestyle,

  lifestyleLinks: [],

  financialAids: {
    types: ['ZAC', 'ZRR'],
    cesp: true,
    aids: ['PTMG', 'PTMA', 'PTMR', 'exoneration-fiscale-pdsa'],
    description: 'Les aides possibles sont affichées à titre indicatif en tenant compte du zonage de la commune. Pour de plus amples informations, contactez le 0811 910 009 ou rendez vous à l\'adresse <a href="http://www.occitanie.paps.sante.fr">http://www.occitanie.paps.sante.fr</a>'
  },

  contacts: [
    {
      name: 'Dr Bouvier-Mouysset',
      phone: '05 24 57 37 01',
      position: 'Médecin généraliste',
      email: 'maisondesantevaren@gmail.com'
    },
    {
      name: 'Dr Fabre',
      phone: '05 24 57 37 01',
      position: 'Médecin généraliste',
      email: 'maisondesantevaren@gmail.com'
    }
  ]
}
