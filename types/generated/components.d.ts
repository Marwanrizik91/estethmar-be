import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    features: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Sea View', 'Mountain View', 'Resort', 'Near Beach']
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

export interface ComponentsProperty extends Schema.Component {
  collectionName: 'components_components_properties';
  info: {
    displayName: 'Property';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
    price: Attribute.BigInteger;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
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

export interface LayoutFeaturedList extends Schema.Component {
  collectionName: 'components_layout_featured_lists';
  info: {
    displayName: 'Featured List';
  };
  attributes: {
    preHeading: Attribute.String;
    heading: Attribute.String;
    subHeading: Attribute.Text;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.feature': ComponentsFeature;
      'components.link': ComponentsLink;
      'components.property': ComponentsProperty;
      'components.service': ComponentsService;
      'layout.featured-list': LayoutFeaturedList;
      'layout.hero-section': LayoutHeroSection;
      'layout.services-section': LayoutServicesSection;
    }
  }
}
