import { StructureType } from './jobOffer';
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

export interface JobOffer {
  reference: '';
  publishedAt: Date;

  title: '';
  advantage1: '';
  advantage2: '';
  advantage3: '';

  address: Address;
  emergencyDistance: number;
  structureType: StructureType;
  contractType: ContractType;
  secretariatType: SecretariatType;

  workCondition: '';
  medicalStructure: '';
  medicalStructureWebSite: '';

  lifestyleFamily: '';
  lefestyleTerritory: '';

  contacts: Contact[];

};

export const fakeJobOffer: JobOffer = {
  reference: '',
// tslint:disable-next-line: object-literal-sort-keys
  publishedAt: new Date(),

  title: '',
  advantage1: '',
  advantage2: '',
  advantage3: '',

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
  secretariatType: 'Secrétariat sur place',

  workCondition: '',
  medicalStructure: '',
  medicalStructureWebSite: '',

  lifestyleFamily: '',
  lefestyleTerritory: '',

  contacts: [

  ]

}




