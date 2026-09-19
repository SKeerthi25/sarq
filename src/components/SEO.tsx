import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaData?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'SARQ LTD | Domestic Construction, Extensions & Renovations London',
  description = 'SARQ LTD is a London domestic building contractor specialising in bespoke home extensions, loft conversions, structural basements and full house refurbishments across Battersea, Wandsworth, Clapham and Greater London.',
  canonicalUrl = 'https://www.sarqcons.co.uk',
  ogImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80',
  ogType = 'website',
  schemaData,
}) => {
  const fullTitle = title.includes('SARQ') ? title : `${title} | SARQ LTD Construction`;

  const defaultLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
    name: 'SARQ LTD',
    legalName: 'SARQ LTD',
    alternateName: 'SARQ Construction',
    url: 'https://www.sarqcons.co.uk',
    logo: 'https://www.sarqcons.co.uk/favicon.svg',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier domestic building contractor specialising in residential home extensions, loft conversions, basements and full house refurbishments in South West London.',
    telephone: '+447448492982',
    email: 'cons@sarqltd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat 51 Cranmer House, 60 Surrey Lane',
      addressLocality: 'Battersea, London',
      postalCode: 'SW11 3TB',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4784,
      longitude: -0.1656,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Battersea' },
      { '@type': 'AdministrativeArea', name: 'Wandsworth' },
      { '@type': 'AdministrativeArea', name: 'Clapham' },
      { '@type': 'AdministrativeArea', name: 'Putney' },
      { '@type': 'AdministrativeArea', name: 'Fulham' },
      { '@type': 'AdministrativeArea', name: 'Wimbledon' },
      { '@type': 'AdministrativeArea', name: 'Greater London' },
    ],
    priceRange: '£££',
  };

  const structuredData = schemaData ? schemaData : defaultLocalBusinessSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="SARQ LTD" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
