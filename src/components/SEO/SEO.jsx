import { useEffect } from 'react';

/**
 * Reusable SEO Component for Single Page Applications
 * Dynamically updates document title, meta tags, Open Graph, Twitter cards, and Schema.org JSON-LD
 */
export function SEO({
  title = 'StudyFlow — Visual Coaching Website Builder & Student Operations Engine',
  description = 'Design, host, and launch your coaching institute website in 2 minutes with instant WhatsApp admission routers, smart QR attendance portals, and high-speed AWS cloud hosting.',
  keywords = 'coaching institute website builder, tuition class website maker, WhatsApp lead router, QR attendance portal, verified topper showcase, coaching management India, studyflow',
  canonical = window.location.href,
  ogType = 'website',
  ogImage = 'https://studyflow.in/og-image.jpg',
  jsonLd = null,
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);
    const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    setMetaTag('name', 'keywords', keywordsStr);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:type', ogType);
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    if (ogImage) {
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 6. Dynamic JSON-LD Structured Data Injection
    const schemaId = 'studyflow-dynamic-seo-schema';
    let scriptTag = document.getElementById(schemaId);
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogType, ogImage, jsonLd]);

  return null;
}

export default SEO;
