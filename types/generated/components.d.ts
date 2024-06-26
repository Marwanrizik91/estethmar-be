import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsContactForm extends Schema.Component {
  collectionName: 'components_components_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contact us'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<"Let's get this conversation started">;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'cta heading here'>;
    subHeading: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'cta subheading here'>;
    buttons: Attribute.Component<'components.link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
        },
        number
      >;
  };
}

export interface ComponentsInformationLine extends Schema.Component {
  collectionName: 'components_components_information_lines';
  info: {
    displayName: 'Information Line';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.Text;
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
    url: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    variant: Attribute.Enumeration<['default', 'outline']> &
      Attribute.DefaultTo<'default'>;
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

export interface ComponentsSubscribe extends Schema.Component {
  collectionName: 'components_components_subscribes';
  info: {
    displayName: 'subscribe';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
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

export interface LayoutContent extends Schema.Component {
  collectionName: 'components_layout_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    content: Attribute.Blocks;
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

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Discover More Properties'>;
    subHeading: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Stay up to date with our most seeked properties'>;
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
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Hero heading here'>;
    subHeading: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Hero sub heading here'>;
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

export interface LayoutInformationSection extends Schema.Component {
  collectionName: 'components_layout_information_sections';
  info: {
    displayName: 'Information Section';
    description: '';
  };
  attributes: {
    lines: Attribute.Component<'components.information-line', true>;
    title: Attribute.String;
  };
}

export interface LayoutPage extends Schema.Component {
  collectionName: 'components_layout_pages';
  info: {
    displayName: 'page';
  };
  attributes: {
    slug: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    content: Attribute.Blocks & Attribute.Required;
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
      'components.contact-form': ComponentsContactForm;
      'components.cta': ComponentsCta;
      'components.information-line': ComponentsInformationLine;
      'components.link': ComponentsLink;
      'components.service': ComponentsService;
      'components.subscribe': ComponentsSubscribe;
      'components.testimony': ComponentsTestimony;
      'layout.content': LayoutContent;
      'layout.featured-list': LayoutFeaturedList;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
      'layout.information-section': LayoutInformationSection;
      'layout.page': LayoutPage;
      'layout.services-section': LayoutServicesSection;
      'layout.testimonials-section': LayoutTestimonialsSection;
    }
  }
}
