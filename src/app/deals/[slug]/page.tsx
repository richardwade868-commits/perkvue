import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import DealsClient from "./DealsClient";
import { getStoreBySlug, IM8_STORE } from "../../../lib/storesData";

// Pure static generation - 0% Vercel ISR Serverless invocations
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
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
    { slug: "fosiaudio" }
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
  const data = getStoreBySlug(slug);
  const store = data ? data.store : IM8_STORE;
  const topDiscount = data?.coupons?.[0]?.discount || "20% Off";
  const seoTitle = `${topDiscount} ${store.name} Discount Codes & Verified Promo Codes (${monthYear}) | PerkVue`;
  const seoDesc = `Working ${store.name} discount codes, coupon codes, and member privileges verified for ${monthYear}. Claim up to ${topDiscount} + free shipping at ${store.name}.`;

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: [
      `${store.name.toLowerCase()} discount code`,
      `${store.name.toLowerCase()} coupon code`,
      `${store.name.toLowerCase()} promo code`,
      `${store.name.toLowerCase()} coupons ${now.getFullYear()}`,
    ],
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
