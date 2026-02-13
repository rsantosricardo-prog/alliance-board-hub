/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: brandessence
 * Interface for EssnciadaMarca
 */
export interface EssnciadaMarca {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  mission?: string;
  /** @wixFieldType text */
  vision?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  brandImage?: string;
  /** @wixFieldType date */
  lastUpdated?: Date | string;
}


/**
 * Collection ID: conselheiros
 * Interface for Conselheiros
 */
export interface Conselheiros {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  position?: string;
  /** @wixFieldType text */
  institutionalBio?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  professionalPhoto?: string;
  /** @wixFieldType url */
  linkedInUrl?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}


/**
 * Collection ID: corevalues
 * Interface for Valores
 */
export interface Valores {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  valueName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  icon?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  exampleOfApplication?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: ebooks
 * Interface for Ebooks
 */
export interface Ebooks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  authorPhoto?: string;
  /** @wixFieldType url */
  authorLinkedIn?: string;
  /** @wixFieldType text */
  authorBio?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  authorName?: string;
  /** @wixFieldType text */
  subtitle?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  coverImage?: string;
  /** @wixFieldType url */
  downloadLink?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  language?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType text */
  ctaText?: string;
  /** @wixFieldType text */
  status?: string;
}


/**
 * Collection ID: events
 * @catalog This collection is an eCommerce catalog
 * Interface for Eventos
 */
export interface Eventos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  eventTitle?: string;
  /** @wixFieldType text */
  finalMessage?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType text */
  detailedAgenda?: string;
  /** @wixFieldType text */
  introduction?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType datetime */
  eventDateTime?: Date | string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType url */
  virtualLink?: string;
  /** @wixFieldType text */
  agendaDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  eventImage?: string;
  /** @wixFieldType url */
  cadeira?: string;
}


/**
 * Collection ID: executivecurations
 * Interface for ExecutiveCurationSubmissions
 */
export interface ExecutiveCurationSubmissions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  currentPosition?: string;
  /** @wixFieldType text */
  company?: string;
  /** @wixFieldType url */
  linkedInProfile?: string;
  /** @wixFieldType text */
  corporateEmail?: string;
  /** @wixFieldType text */
  whatsApp?: string;
  /** @wixFieldType text */
  leadershipYears?: string;
  /** @wixFieldType boolean */
  hasBeenCouncilor?: boolean;
  /** @wixFieldType text */
  strategicAreas?: string;
  /** @wixFieldType text */
  interestReason?: string;
  /** @wixFieldType text */
  valueProposition?: string;
  /** @wixFieldType text */
  referredBy?: string;
  /** @wixFieldType boolean */
  agreedToTerms?: boolean;
  /** @wixFieldType boolean */
  agreedToCuration?: boolean;
  /** @wixFieldType date */
  submissionDate?: Date | string;
  /** @wixFieldType text */
  status?: string;
}
