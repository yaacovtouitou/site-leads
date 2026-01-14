import Script from 'next/script';

type JsonLdProps = {
  type: 'Organization' | 'Service' | 'FAQPage' | 'Article' | 'LocalBusiness' | 'BreadcrumbList' | 'Product';
  data: any;
};

export default function JSONLD({ type, data }: JsonLdProps) {
  return (
    <Script
      id={`json-ld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}
