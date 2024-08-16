import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SeoManager = ({ page, keywords, title, description }) => {
  const commonData = {
    title: title || "Shri. Gokuldas S Shirodker Trust",
    description: description || "Welcome to Shri. Gokuldas S Shirodker Trust. Explore our mission, programs, and how we are making an impact in India.",
    keywords: keywords.join(", "),
    image: "images/IMG-20240812-WA0027.jpg",
    url: "https://www.sgsstrust.org",
    type: "WebSite",
    businessName: "Shri. Gokuldas S Shirodker Trust",
    streetAddress: "Margao goa",
    addressRegion: "Goa",
    postalCode: "403601", 
    addressCountry: "IN",
    telephone: "+91 9096609309",
    sameAs: [
      "https://www.instagram.com/savan_naik_259?igsh=M3Jydmpjdmd0NHh2",
      "https://www.linkedin.com/in/savan-naik-6b729628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    ],
    author: "Gokuldas S Shirodker",
    copyright: "Gokuldas S Shirodker",
    owner: "Gokuldas S Shirodker" 
  };

  const generateJsonLd = () => {
    return {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: commonData.businessName,
      image: commonData.image,
      url: commonData.url,
      telephone: commonData.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: commonData.streetAddress,
        addressLocality: commonData.addressRegion,
        postalCode: commonData.postalCode,
        addressCountry: commonData.addressCountry
      },
      sameAs: commonData.sameAs
    };
  };

  return (
    <Helmet>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={commonData.url} />
      <meta name="author" content={commonData.author} />
      <meta name="copyright" content={commonData.copyright} />
      <meta name="owner" content={commonData.owner} />
      
      <title>{commonData.title}</title>
      <meta name="description" content={commonData.description} />
      <meta name="keywords" content={commonData.keywords} />
      <meta property="og:title" content={commonData.title} />
      <meta property="og:description" content={commonData.description} />
      <meta property="og:image" content={commonData.image} />
      <meta property="og:url" content={commonData.url} />
      <script type="application/ld+json">
        {JSON.stringify(generateJsonLd())}
      </script>
    </Helmet>
  );
};

SeoManager.propTypes = {
  page: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string
};

export default SeoManager;
