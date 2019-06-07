const workCondition = `Le Centre Intercommunal de Santé (CIS) de Salviac ouvrira ses portes au second semeste 2019. Il s’agit d’un centre de santé monosite qui accueillera 3 médecins généralistes, des infirmiers, des kinésithérapeutes ainsi que d’autres paramédicaux.

Les locaux se composent de 3 cabinets de médecins (25m² chacun), de 2 cabinets infirmiers, d'1 cabinet de kinésithérapie, de 2 cabinets partagés (podologue, osthéopathe, psychologue, ...), d'1 accueil secrétariat, d'1 salle d'attente, d'1 salle de réunion, d'un espace cafétéria, de 2 bureaux et d'1 pôle gérontologique et d'1 logement pour les stagiaires et remplaçants.

Le CIS prend en charge la gestion économique et administrative de la patientèle et de la structure afin d’optimiser le temps médical des médecins (secrétariat sur place + plateforme téléphonique).

Les professionnels de santé du CIS consacrent tout leur temps à la pratique médicale ou paramédicale, ils sont salariés par la communauté de communes qui gère la partie administrative. La séparation entre rémunération et actes permet un investissement dans les actions de promotion de la santé ou de santé publique sans préoccupation financière.

Le choix du salariat permet de bénéficier de droits sociaux, de formations, d’une durée de travail définie par contrat et donc d’une qualité de vie professionnelle et privée protégée.

La possibilité reste toutefois offerte, au choix du praticien, de s'installer en tant que libéral dans la structure. Les praticiens souhaitant devenir maitre de stage seront soutenus dans leur projet.

Le CIS remplit donc une réelle mission de service public, il s’inscrit dans une politique locale et nationale de santé, complémentaire à l’offre libérale, il lutte contre l’exclusion, aide à réduire les inégalités sociales en santé du territoire.`;

const lifestyle = `Situé entre la vallée de la Dordogne au nord et la vallée du Lot au sud, la commune offre tous les services et commerces nécessaires : crèche, écoles, collège, accueils de loisir extra et périscolaire, médiathèques, piscines, musées, salle de spectacle, équipements sportifs, nombreux restaurants, etc. Les autres services et commerces (lycées, gares, hôpitaux…) se trouvent à Gourdon (15 km), Sarlat et Cahors (35 km). 

Un accompagnement du professionnel et de ses proches sera fait pour aider à la recherche d'un logement et aux démarches liées à l'installation.

Ce territoire est entouré du fameux Parc Naturel Régional des Causses du Quercy (labellisé Géoparc mondial de l’UNESCO) à l’est et de l’incontournable Périgord Noir à l’ouest. Riche de ses châteaux, de ses sites préhistoriques, de ses rivières Lot et Dordogne, de ses grottes et gouffres, sur des terres préservées parcourues d’une multitude de sentiers de randonnée, il vous offre un cadre de vie exceptionnel au milieu de paysages d’une diversité remarquable.

Les activités culturelles et les divertissements y sont fortement développés : salle de spectacles l’Arsénic, rencontres Cinéma de Gindou, compagnies professionnelles de danse et de théâtre, festivals de musique classique, école de musique, résidences pour artistes, fêtes votives, marchés de producteurs locaux, et aux alentours, festival de musiques actuelles Ecaussystème à Gignac, Jazz à Souillac, festival de blues, de danse contemporaine et Lot of Saveurs avec ses chefs étoilés à Cahors, etc.

Et bien sûr, une richesse gastronomique exceptionnelle que beaucoup nous envient (foie gras, cèpes, truffes, magrets, confits, agneaux fermiers du Quercy, fromages de brebis et Cabécous, châtaignes, noix …) qui s’accompagne à merveille de vins du terroir renommés, rouge, rosé ou blanc, comme le Malbec, les Côtes du Lot, le Vin de Domme, le Pécharmant…)`

const medicalStructure = `Le CIS s’inscrit dans un projet plus vaste de « Pôle de santé » qui regroupe une quarantaine de professionnels de santé (3 médecins, 16 infirmières, 2 dentistes, 2 kinésithérapeutes, 2 Ehpad (80 lits), 1 SSIAD (40 lits), 2 pharmacies, 1 podologuepédicure, 1 psychologue, 2 ostéopathes et 1 permanence Protection maternelle et infantile) pour le territoire des 15 communes et 5 500 habitants de la Communauté de communes Cazals-Salviac. 
 
Il complètera l’offre existante :
- Salviac (1210 habitants) : 1 médecin, 2 cabinets infirmiers (5 infirmières), 1 pharmacie, 1 Ehpad (40 lits), 1 permanence PMI
- Cazals (7 km, 620 habitants) : 1 maison médicale avec 2 médecins, 2 dentistes, 1 cabinet infirmier (6), 1 SSIAD (40 lits), des permanences partagées : 1 podologuepédicure, 1 psychologue clinicienne/psychothérapeute, 2 ostéopathes, 1 assistante sociale du Département Hors maison médicale : 1 kinésithérapeute, 1 infirmière, 1 pharmacie, 1 Ehpad (40 lits)
- Dégagnac (5 km, 640 habitants) : 1 médecin en cours de recrutement, 1 cabinet infirmier (3), 1 kinésithérapeute
- Gindou (7 km, 311 habitants) : 1 infirmière

Le CIS travaillera en partenariat et coordination avec partenariat et coordination avec :
- Centre hospitalier de Gourdon : urgences/UHCD/SMUR, HAD, chirurgie ambulatoire, scanner, médecine polyvalente, gériatrie, SSR à orientation gériatrique, consultations externes et spécialistes, service social, Ehpad (183 lits) avec unité Alzheimer
- CMP J-P Falret de Gourdon : service de gérontopsychiatrie
- Réseau ICARE 46 : soins palliatifs et pathologies chroniques complexes
- Montfaucon : centre de rééducation fonctionnelle`

export const salviac = {
  reference: "SALVIAC201905",
  publishedAt: new Date('2019-06-06 17:00:00'),

  address: {
    address: 'Lieu dit les Crozes, 46340 Salviac',
    zipCode: '46340',
    city: 'Salviac',
    geoCode: {
      lat: 44.681209,
      lng: 1.265864
    }
  },

  emergencyDistance: 10,
  structureType: 'Centre de santé',
  contractType: 'Salarié',
  secretariatType: ['Secrétariat sur place'],
  workCondition: workCondition,
  medicalStructure: medicalStructure,
  cartosante: '',
  medicalStructureWebSite: '',

  lifestyle: lifestyle,

  lifestyleLinks: [
    {
      description: 'Office du tourisme',
      link: 'http://www.tourisme-cazals-salviac.com'
    },
    {
      description: 'Site officiel de la commune de Salviac',
      link: 'http://www.salviac46.fr'
    }
  ],

  title: "Installation médecin généraliste à Salviac (46340)",
  advantage1: "Une équipe de praticiens salariés qui se consacrent entièrement à l'exercice de la médecine.",
  advantage2: "Le CIS s’inscrit dans un projet plus vaste de « Pôle de santé » qui regroupe une quarantaine de professionnels de santé.",
  advantage3: "Un environnement agréable alliant nature, culture et gastronomie.",


  financialAids: {
    types: ['ZAC', 'ZRR'],
    cesp: true,
    aids: ['PTMG', 'PTMA', 'PTMR', 'exoneration-fiscale-pdsa'],
    description: 'Les aides possibles sont affichées à titre indicatif en tenant compte du zonage de la commune. Pour de plus amples informations, contactez le 0811 910 009 ou rendez vous à l\'adresse <a href="http://www.occitanie.paps.sante.fr">http://www.occitanie.paps.sante.fr</a>'
  },

  contacts: [
    {
      name: 'Christophe CLEMENT',
      phone: '05 65 41 70 73',
      position: 'Responsable du CIS',
      email: 'christophe.clement@cc-cazalssalviac.fr'
    }
  ],
  photos: [
    {
      header: true,
      name: 'SALVIAC201905_01.jpg',
      description: 'Centre de santé'
    },
    {
      header: false,
      name: 'SALVIAC201905_02.jpg',
      description: 'Centre de santé'
    },
    {
      header: false,
      name: 'SALVIAC201905_03.jpg',
      description: 'Centre de santé'
    },
  ]
}
