export type Language = 'vi' | 'en';

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
  CONTACT = 'CONTACT',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TranslationDictionary {
  nav: {
    home: string;
    products: string;
    contact: string;
    askAI: string;
  };
  hero: {
    title_prefix: string;
    title_highlight: string;
    cta_products: string;
    cta_contact: string;
    hotline_title: string;
    rep_title: string;
  };
  home: {
    about_title: string;
    factory_scale: string;
    factory_desc_prefix: string;
    factory_desc_capacity: string;
    cooperation: string;
    view_all_products: string;
  };
  products: {
    title: string;
    subtitle: string;
    search_placeholder: string;
    all_categories: string;
    no_results: string;
    view_detail: string;
  };
  detail: {
    applications: string;
    properties: string;
    packaging: string;
    packaging_label: string;
    specifications: string;
    close: string;
    contact_sales: string;
  };
  contact: {
    title: string;
    subtitle: string;
    info_title: string;
    factory_address: string;
    contact_person: string;
    tax_id: string;
    phone: string;
    fax: string;
    form_title: string;
    form_name: string;
    form_email: string;
    form_phone: string;
    form_message: string;
    form_submit: string;
    form_success: string;
  };
  chat: {
    header: string;
    placeholder: string;
    disclaimer: string;
    welcome: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}