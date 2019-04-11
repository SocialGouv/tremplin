import { Photo, StructureType } from './jobOffer';
export type StructureType = 'Hôpital' | 'Clinique' | 'Maison de santé' | 'Centre de santé' | 'Cabinet de groupe' | 'Cabinet individuel'
export type ContractType = 'Libéral' | 'Salarié';
export type SecretariatType = 'Secrétariat sur place' | 'Plateforme téléphonique' | 'Rendez-vous en ligne' | 'Pas de secretariat';
export type Address = Readonly<{
  address: string;
  street: string;
  zipCode: string;
  city: string;
  geoCode: GeoCode;
}>;
export type GeoCode = Readonly<{
  lat: number;
  lng: number;
}>;
export type Contact = Readonly<{
  name: '';
  phone: '';
  position: '';
  email: '';
}>;

export type Photo = Readonly<{
  name: string;
  header: boolean;
  description: string;
}>;

export type Link = Readonly<{
  description: string;
  link: string;
}>;

export interface JobOffer {
  reference: '';
  publishedAt: Date;

  title: '';
  advantage1: '';
  advantage2: '';
  advantage3: '';

  photos: Photo[];

  address: Address;
  emergencyDistance: number;
  structureType: StructureType;
  contractType: ContractType;
  secretariatType: SecretariatType[];

  workCondition: '';
  medicalStructure: '';
  medicalStructureWebSite: '';

  lifestyle: '';
  lifestyleLinks: Link[];

  contacts: Contact[];

};

export const fakeJobOffer: JobOffer = {
  reference: '',
// tslint:disable-next-line: object-literal-sort-keys
  publishedAt: new Date('2019-04-01 10:00:00'),

  title: '',
  advantage1: '',
  advantage2: '',
  advantage3: '',

  photos: [],

  address: {
    address: '',
    city: '',
    geoCode: {
      lat: 45,
      lng: 1
    },
    street: '',
    zipCode: ''
  },
  emergencyDistance: 50,
  structureType: 'Clinique',
  contractType: 'Libéral',
  secretariatType: ['Secrétariat sur place'],

  workCondition: '',
  medicalStructure: '',
  medicalStructureWebSite: '',

  lifestyle: '',
  lifestyleLinks: [],

  contacts: [

  ]

}




