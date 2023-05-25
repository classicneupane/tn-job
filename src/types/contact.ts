export type ContactField = 'photo' | 'name' | 'email' | 'address' | 'phone' | 'company' | 'tags' | 'bio' | 'note';

export interface ContactFormRef {
  getData: any;
}

export interface ContactAddress {
  id: string | number;
  label: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  gps?: string;
}

export interface ContactPhone {
  id: string | number;
  label: string;
  number: string;
  numberFormatted: string;
  countryCode: string;
}

export interface Contact {
  imageId: string;
  imageUrl: string;
  name: string;
  firstName: string;
  lastName: string;

  street: string;
  city: string;
  state: string;
  zip: string;
  gps: string;

  email: string;
  address: Array<ContactAddress>;
  phone: Array<ContactPhone>;
  company: string;
  bio: string;
  note: string;
  tags: Array<string> | Array<any>;
}
