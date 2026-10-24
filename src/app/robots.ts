import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/deals/im8*',
          '/store/im8*',
        ],
      },
      // Strict block for Competitive Intelligence & SEO Scrapers
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'DotBot', 'MJ12bot', 'PetalBot', 'Bytespider', 'SEOkicks'],
        disallow: [
          '/deals/im8*',
          '/store/im8*',
        ],
      },
    ],
    sitemap: 'https://perkvue.com/sitemap.xml',
  };
}
