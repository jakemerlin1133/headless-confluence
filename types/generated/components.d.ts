import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    body: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQS';
  };
  attributes: {};
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    CallToActionLink: Schema.Attribute.String;
    CallToActionText: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    Subheading: Schema.Attribute.String;
  };
}

export interface SectionsServicesList extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_lists';
  info: {
    displayName: 'ServicesList';
  };
  attributes: {};
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {};
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    Background_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTA_LINK: Schema.Attribute.String;
    CTA_Text: Schema.Attribute.String;
    Subtitle: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface SharedFaqs extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQS';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.content': SectionsContent;
      'sections.faqs': SectionsFaqs;
      'sections.hero': SectionsHero;
      'sections.services-list': SectionsServicesList;
      'sections.team': SectionsTeam;
      'sections.testimonials': SectionsTestimonials;
      'shared.faqs': SharedFaqs;
    }
  }
}
