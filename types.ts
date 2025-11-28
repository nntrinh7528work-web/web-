export interface ContactInfo {
  contact_person: string;
  address: string;
  tax_id: string;
  phone: string;
  fax: string;
  hotlines:Array<{ number: string; email: string }>;
  website: string;
}

export interface CompanyInfo {
  name: string;
  established: string;
  factory_established: string;
  capacity: string;
  description: string;
  contact: ContactInfo;
  cooperation_areas: string[];
}

export interface Specification {
  code: string;
  [key: string]: string; // Allow dynamic keys for various specs (softening_point, acid_value, etc.)
}

export interface Product {
  category: string;
  product_name: string;
  description: string;
  properties?: string[];
  applications: string[];
  packaging?: string;
  specifications: Specification[];
}

export interface AppData {
  company_info: CompanyInfo;
  products: Product[];
}

export enum ViewState {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  CONTACT = 'CONTACT'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}