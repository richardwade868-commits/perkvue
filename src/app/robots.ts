import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      // 100% Stealth Shield against Competitive Intelligence & SEO Scrapers
      // Blocks SEMrush and Ahrefs from crawling or indexing ANY page on PerkVue
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot', 'MJ12bot', 'PetalBot', 'Bytespider', 'SEOkicks'],
        disallow: ['/'],
      },
    ],
    sitemap: 'https://perkvue.com/sitemap.xml',
  };
}
