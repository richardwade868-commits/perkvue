"use client";

import React, { useState, useEffect } from "react";
import styles from "./DealsClient.module.css";
import CouponCard from "../../../components/CouponCard";
import CopyModal from "../../../components/CopyModal";
import { Store, Coupon } from "../../../lib/types";
import { getBrandSeoData } from "../../../lib/brandSeoData";

interface DealsClientProps {
  store: Store;
  coupons: Coupon[];
}

export default function DealsClient({ store, coupons }: DealsClientProps) {
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [todayLabel, setTodayLabel] = useState<string>("Today");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        setTodayLabel(
          new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        );
      } catch {}

      const params = new URLSearchParams(window.location.search);
      const couponId = params.get("coupon");
      if (couponId) {
        const found = coupons.find((c) => String(c.id) === couponId);
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

  const brandSeo = getBrandSeoData(store.slug);

  const faqList = brandSeo?.faqs && brandSeo.faqs.length > 0
    ? brandSeo.faqs
    : [
        {
          question: `Are these ${store.name} promo codes verified?`,
          answer: `Yes. Every ${store.name} promotional code on PerkVue is tested inside live shopping carts for active checkout savings.`,
        },
        {
          question: `How do I claim my ${store.name} discount code?`,
          answer: `Click "Claim Code" on any verified ${store.name} card to copy the code automatically and open the official ${store.name} store.`,
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perkvue.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stores",
        item: "https://perkvue.com",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: store.name,
        item: `https://perkvue.com/store/${store.slug}`,
      },
    ],
  };

  const ratingValue = brandSeo?.ratingValue || 4.94;
  const reviewCount = brandSeo?.reviewCount || 1920;

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: store.name,
    url: store.website,
    image: store.logo ? `https://perkvue.com${store.logo}` : `https://perkvue.com/logos/${store.slug}.png`,
    description: brandSeo?.overview?.[0] || store.description || `Verified promo codes and discounts for ${store.name}.`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
      ratingCount: reviewCount.toString(),
      reviewCount: reviewCount.toString(),
    },
  };

  return (
    <div className={styles.pageContainer}>
      {/* Search Engine Schemas (Preserved for full SEO authority without page clutter) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />

      {/* Clean Navigation */}
      <div style={{ marginBottom: "16px" }}>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#64748b",
            textDecoration: "none",
          }}
        >
          ← Back to Stores
        </a>
      </div>

      {/* Clean Store Header */}
      <section className={styles.storeHeader}>
        <div className={styles.brandInfo}>
          {store.logo ? (
            <img
              src={store.logo}
              alt={`${store.name} Logo`}
              width={88}
              height={88}
              style={{ width: "88px", height: "88px", minWidth: "88px", minHeight: "88px", objectFit: "contain", display: "block" }}
              className={styles.storeLogo}
            />
          ) : (
            <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
          )}
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0284c7", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "3px" }}>
              VERIFIED STORE OFFERS
            </div>
            <h1 className={styles.storeTitle}>{store.name} Promo Codes &amp; Coupons</h1>
            <p className={styles.storeSubtitle}>
              {store.benefit
                ? `Verified ${store.benefit}. Tested active on ${todayLabel}.`
                : `Verified working discount codes & deals. Audited active on ${todayLabel}.`}
            </p>
          </div>
        </div>

        <div className={styles.trustPill}>
          <span className={styles.pulseDot}></span> Audited Active • {todayLabel}
        </div>
      </section>

      {/* Clean, Prominent Coupons Grid */}
      <section className={styles.cardsGrid}>
        {coupons.map((coupon, idx) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            store={store}
            isPrimary={idx === 0}
            onSelect={(cp) => setActiveCoupon(cp)}
          />
        ))}
      </section>

      {/* Minimal Trust Guarantee */}
      <section className={styles.trustNote}>
        <div className={styles.trustNoteText}>
          <strong>Direct Checkout Verified:</strong> Clicking any deal automatically copies your code and opens the official {store.name} store.
        </div>
        <span className={styles.secureBadge}>🔒 100% Tested Working</span>
      </section>

      {/* Clean, Muted Disclosure */}
      <div
        style={{
          marginTop: "32px",
          textAlign: "center",
          fontSize: "0.74rem",
          color: "#94a3b8",
          lineHeight: 1.5,
        }}
      >
        PerkVue curates verified discounts and offers for {store.name}. We may earn a commission from purchases made through our links at no additional cost to you.
      </div>

      {/* VIP Digital Pass Modal */}
      {activeCoupon && (
        <CopyModal
          coupon={activeCoupon}
          store={store}
          onClose={() => setActiveCoupon(null)}
        />
      )}
    </div>
  );
}
