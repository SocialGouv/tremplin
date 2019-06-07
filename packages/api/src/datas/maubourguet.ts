const workCondition = `L’équipe de 5 médecins en place cherche 2 nouveaux confrères en activité libérale à temps plein pour renforcer l’effectif et anticiper 2 départs en retraite.

Cabinet médical pluridisciplinaire (non labellisé) accueillant :
- 5 médecins généralistes, 1 médecin remplaçant,
- 1 dentiste, 1 ostéopathe, 1 diététicienne, 1 psychologue,
- 2 secrétaires.

Bâtiment en cours d’extension pour compléter l’offre de soins existante avec des spécialités variées: 1 kiné, 1 podologue, 2 IDE, 1 cabinet pour interne de médecine.
générale.

Bâtiment aux normes d’accessibilité avec parking dédié dans un environnement très agréable.
Cabinet entièrement informatisé, équipé ; logiciel utilisé : Axisanté
La collectivité est propriétaire des locaux et employeur du pôle secrétariat. Pas de SCI, ni de SCM.
Un bail professionnel est proposé au médecin généraliste comprenant loyer et prestation de service de secrétariat ( accueil téléphonique, prise de rdv, agenda, démarches administratives.)
Montant plafond du bail : 1 600 € TTC/mois pour une activité à temps plein; 950 € TTC/mois pour une activité à mi-temps.
Les 3 premiers mois sont gratuits.`;

const lifestyle = `la ville de Maubourguet offre un cadre de vie privilégié au coeur du Sud-Ouest.

La ville est dotée de tous commerces et services. La politique enfance et jeunesse est active et soutenue par la Communauté de communes Adour-Madiran : crèche , centre de loisirs, école maternelle et primaire, RAM. La ville dispose d'un collège et les lycées généraux et professionnels les plus proches sont à 10 km (Vic-en-Bigorre).

La vie locale est animée avec des offres associatives et culturelles nombreuses . Maubourguet est à 10 mn de Marciac , connu pour son festival international de Jazz. 

Localisée au nord des Hautes-Pyrénées, entre le Gers et les Pyrénées-Atlantiques, idéalement située entre mer et montagne – à moins de 2 h des plages de l’Océan Atlantique, à moins d’1h30 des stations de ski pyrénéennes et des activités de pleine nature 

A 30 mn de l’autoroute A64 et de l’aéroport international TarbesLourdes-Pyrénées.`

const medicalStructure = `Proximité immédiate : plusieurs groupes infirmiers, 4 kinésithérapeutes, 3 dentistes (2 nouvelles installations en 2019), 1 podologue, 2 pharmacies, laboratoire d’analyses biologiques, EHPAD de 80lits, 1 SSIAD de 30 places, SAAD, ambulances, pompiers, centre de dialyse. Proche ( à 10mn) : Laboratoire de radiologie, hôpital gériatrique proposant une filière complète de prise en charge de la personne âgée, équipe mobile gériatrique . Nombreuses structures médico-sociales en charge du handicap dans le secteur proche : ESAT, IMpro, EPAS . Plateau technique : Centre hospitalier de Bigorre, hôpital pivot à 30mn : centre médico-chirurgical, maternité de niveau IIB (pédiatre 24h/24, service de néonatalogie), urgences, réanimation polyvalente, UHCD, SAMU, SMUR, IRM, Scanner. Polyclinique de l’Ormeau, établissement médico-chirurgical privé, maternité de niveau I. Réseaux de santé : Arcade, soins palliatifs.`

export const maubourguet = {
  reference: "MAUBOURGUET201905",
  publishedAt: new Date('2019-05-27 15:00:00'),

  title: "Installation médecin généraliste à Maubourguet (65700)",
  advantage1: "Un cabinet médical pluridisciplinaire dynamique comprenant 5 médecins généralistes",
  advantage2: "Des conditions attractives pour se consacrer pleinement à l'exercice de la médecine",
  advantage3: "Entre mer et montagne, Maubourguet offre un cadre de vie privilégié au coeur du Sud-Ouest",

  photos: [
    {
      header: false,
      name: 'MAUBOURGUET201905_01.jpg',
      description: 'Accueil'
    },
    {
      header: false,
      name: 'MAUBOURGUET201905_02.jpg',
      description: 'Bâtiment'
    }, {
      header: false,
      name: 'MAUBOURGUET201905_03.jpg',
      description: 'Equipe'
    }, {
      header: false,
      name: 'MAUBOURGUET201905_04.jpg',
      description: 'Salle d\'attente'
    }
  ],

  address: {
    address: 'Route de Lafitole, 65700 Maubourguet',
    zipCode: '65700',
    city: 'Maubourguet',
    geoCode: {
      lat: 43.470187,
      lng: 0.035730
    }
  },

  emergencyDistance: 27,
  structureType: 'Maison de santé',
  contractType: 'Libéral',
  secretariatType: ['Secrétariat sur place'],
  workCondition: workCondition,
  medicalStructure: medicalStructure,
  cartosante: 'https://cartosante.atlasante.fr/#c=report&chapter=list_geo&report=r01&selgeo1=tv.65304&selgeo2=fra.99',
  medicalStructureWebSite: '',

  lifestyle: lifestyle,

  lifestyleLinks: [
    {
      description: 'Office du tourisme Marciac',
      link: 'http://www.marciactourisme.com/'
    },
    {
      description: 'Office du tourisme du paus du Val d\'Adour',
      link: 'https://www.tourisme-gers.com/maubourguet/office_de_tourisme_du_pays_du_val_d_adour_maubourguet-165487.html'
    },
    {
      description: 'Site officiel de Maubourguet',
      link: 'http://www.maubourguet.fr/'
    }
  ],

  financialAids: {
    types: ['ZAC', 'ZRR'],
    cesp: true,
    aids: ['PTMG', 'PTMA', 'PTMR', 'exoneration-fiscale-pdsa'],
    description: 'Les aides possibles sont affichées à titre indicatif en tenant compte du zonage de la commune. Pour de plus amples informations, contactez le 0811 910 009 ou rendez vous à l\'adresse <a href="http://www.occitanie.paps.sante.fr">http://www.occitanie.paps.sante.fr</a>'
  },

  contacts: [
    {
      name: 'Isabelle CARCHAN',
      phone: '06 07 31 15 78',
      position: 'Chargée de missions',
      email: 'i.carchan@val-adour.com'
    }
  ]
}
