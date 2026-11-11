import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import DealsClient from "./DealsClient";
import { getStoreBySlug, IM8_STORE } from "../../../lib/storesData";
import { getBrandSeoData } from "../../../lib/brandSeoData";

// Pure static generation - 0% Vercel ISR Serverless invocations
export const dynamic = "force-static";

export async function generateStaticParams() {
  const pongbotSlugs = [{ slug: "pongbot" }, { slug: "pongbot-us" }, { slug: "pongbotsports" }, { slug: "pongbot-sports" }];
  const candySlugs = [{ slug: "candy-in-bulk" }, { slug: "candyinbulk" }, { slug: "candy-in-bulk-us" }, { slug: "swedish-candy" }];
  return [
    ...candySlugs,
    ...pongbotSlugs,
    { slug: "the-beard-struggle" },
    { slug: "thebeardstruggle" },
    { slug: "beard-struggle" },
    { slug: "warmnest-candle" },
    { slug: "warmnest" },
    { slug: "warmnestcandle" },
    { slug: "plated-skin" },
    { slug: "plated-skin-science" },
    { slug: "plated" },
    { slug: "platedskin" },
    { slug: "plated-skin-us" },
    { slug: "desktronic" },
    { slug: "desktronic-uk" },
    { slug: "desktronic-pl" },
    { slug: "deerrun-us" },
    { slug: "deerrun" },
    { slug: "deerruntreadmill" },
    { slug: "deer-run" },
    { slug: "joyfit" },
    { slug: "dc-house-us" },
    { slug: "dc-house" },
    { slug: "dchouse" },
    { slug: "im8-health-us" },
    { slug: "im8" },
    { slug: "im8health" },
    { slug: "amazon" },
    { slug: "nike" },
    { slug: "apple" },
    { slug: "target" },
    { slug: "walmart" },
    { slug: "adidas" },
    { slug: "samsung" },
    { slug: "starbucks" },
    { slug: "sephora" },
    { slug: "lululemon" },
    { slug: "spotify" },
    { slug: "bestbuy" },
    { slug: "ebay" },
    { slug: "renue-by-science" },
    { slug: "renuebyscience" },
    { slug: "commomy" },
    { slug: "commomy-decor" },
    { slug: "petals-and-tails" },
    { slug: "petalsandtails" },
    { slug: "enigwatch" },
    { slug: "uperfect" },
    { slug: "fosi-audio" },
    { slug: "fosiaudio" },
    { slug: "bouquets-by-post" },
    { slug: "bouquets-by-post-uk" },
    { slug: "bouquetsbypost" },
    { slug: "dreamcloud" },
    { slug: "dreamcloud-uk" },
    { slug: "dreamcloud-us" },
    { slug: "dreamcloudsleep" },
    { slug: "everblog" },
    { slug: "everblog-ai" },
    { slug: "everblog-us" },
    { slug: "young-electric-bikes" },
    { slug: "young-electric" },
    { slug: "young-electric-us" },
    { slug: "youngelectricbikes" },
    { slug: "maple-prime" },
    { slug: "maple-prime-us" },
    { slug: "mapleprime" },
    { slug: "parc-asterix" },
    { slug: "parc-asterix-fr" },
    { slug: "parcasterix" },
    { slug: "qidi-us" },
    { slug: "qidi-tech" },
    { slug: "qidi-tech-us" },
    { slug: "qidi3d" },
    { slug: "double-oak-essentials" },
    { slug: "doubleoakessentials" },
    { slug: "double-oak-essentials-us" }
  ];
}

interface DealsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DealsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const now = new Date();
  const monthYear = now.toLocaleString("en-US", { month: "short", year: "numeric" });
  const brandSeo = getBrandSeoData(slug);
  const data = getStoreBySlug(slug);
  const store = data ? data.store : IM8_STORE;
  const topDiscount = data?.coupons?.[0]?.discount || "20% Off";
  const seoTitle = brandSeo?.metaTitle || `${topDiscount} ${store.name} Discount Codes & Verified Promo Codes (${monthYear}) | PerkVue`;
  const seoDesc = brandSeo?.metaDescription || `Working ${store.name} discount codes, coupon codes, and member privileges verified for ${monthYear}. Claim up to ${topDiscount} + free shipping at ${store.name}.`;
  const seoKeywords = brandSeo?.keywords && brandSeo.keywords.length > 0
    ? brandSeo.keywords
    : [
        `${store.name.toLowerCase()} discount code`,
        `${store.name.toLowerCase()} coupon code`,
        `${store.name.toLowerCase()} promo code`,
        `${store.name.toLowerCase()} coupons ${now.getFullYear()}`,
      ];

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: seoKeywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    alternates: {
      canonical: `https://perkvue.com/deals/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: `https://perkvue.com/deals/${slug}`,
      siteName: "PerkVue",
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function DealsPage({ params }: DealsPageProps) {
  const { slug } = await params;
  const data = getStoreBySlug(slug);

  if (!data) {
    notFound();
  }

  return <DealsClient store={data.store} coupons={data.coupons} />;
}
