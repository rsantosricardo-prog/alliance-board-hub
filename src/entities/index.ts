/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: brandessence
 * Interface for BrandEssence
 */
export interface BrandEssence {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
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
 * Interface for CoreValues
 */
export interface CoreValues {
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
 * Interface for Eventos
 */
export interface Eventos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  eventTitle?: string;
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
}
