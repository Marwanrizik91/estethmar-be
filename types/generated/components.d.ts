import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    buttons: Attribute.Component<'components.link', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
        },
        number
      >;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    variant: Attribute.Enumeration<['default', 'outline']>;
  };
}

export interface ComponentsService extends Schema.Component {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsTestimony extends Schema.Component {
  collectionName: 'components_components_testimonies';
  info: {
    displayName: 'testimony';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    gender: Attribute.Enumeration<['male', 'female']>;
    occupation: Attribute.String & Attribute.Required;
    stars: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<5>;
  };
}

export interface LayoutFeaturedList extends Schema.Component {
  collectionName: 'components_layout_featured_lists';
  info: {
    displayName: 'Featured List';
    description: '';
  };
  attributes: {
    preHeading: Attribute.String & Attribute.Required;
    propertiesHeading: Attribute.String & Attribute.Required;
    propertiesSubHeading: Attribute.Text & Attribute.Required;
    projectsSubHeading: Attribute.Text & Attribute.Required;
    projectsHeading: Attribute.String;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'layout';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media;
    buttons: Attribute.Component<'components.link', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface LayoutServicesSection extends Schema.Component {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'Services Section';
    description: '';
  };
  attributes: {
    services: Attribute.Component<'components.service', true> &
      Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    image: Attribute.Media;
    heading: Attribute.String;
    subHeading: Attribute.Text;
  };
}

export interface LayoutTestimonialsSection extends Schema.Component {
  collectionName: 'components_layout_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
    testimonials: Attribute.Component<'components.testimony', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.cta': ComponentsCta;
      'components.link': ComponentsLink;
      'components.service': ComponentsService;
      'components.testimony': ComponentsTestimony;
      'layout.featured-list': LayoutFeaturedList;
      'layout.hero-section': LayoutHeroSection;
      'layout.services-section': LayoutServicesSection;
      'layout.testimonials-section': LayoutTestimonialsSection;
    }
  }
}
