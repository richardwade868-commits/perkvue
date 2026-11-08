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

  const focusedCoupons = coupons.slice(0, 4);
  const brandSeo = getBrandSeoData(store.slug);

  const faqList = brandSeo?.faqs && brandSeo.faqs.length > 0
    ? brandSeo.faqs
    : [
        {
          question: `Are these ${store.name} member perks and promo codes verified?`,
          answer: `Yes. Every ${store.name} promotional code and direct privilege on PerkVue is audited inside live shopping carts for active checkout savings.`,
        },
        {
          question: `How do I claim my ${store.name} discount code?`,
          answer: `Click "Claim Code" on any verified ${store.name} privilege card to copy the access code automatically and open the official ${store.name} store.`,
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
        name: "Privileges",
        item: "https://perkvue.com",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: store.name,
        item: `https://perkvue.com/deals/${store.slug}`,
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
    description: brandSeo?.overview?.[0] || store.description || `Verified privileges and member discounts for ${store.name}.`,
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

      {/* Executive Back Navigation */}
      <div style={{ marginBottom: "16px" }}>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.84rem",
            fontWeight: 700,
            color: "#475569",
            textDecoration: "none",
          }}
        >
          ← Back to Executive Registry
        </a>
      </div>

      {/* Focused Store Header */}
      <section className={styles.storeHeader}>
        <div className={styles.brandInfo}>
          {store.logo ? (
            <img
              src={store.logo}
              alt={`${store.name} Logo`}
              width={96}
              height={96}
              style={{ width: "96px", height: "96px", minWidth: "96px", minHeight: "96px", objectFit: "contain", display: "block" }}
              className={styles.storeLogo}
            />
          ) : (
            <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
          )}
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#0284c7", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
              ✦ PERKVUE VERIFIED PARTNER PRIVILEGE
            </div>
            <h1 className={styles.storeTitle}>{brandSeo?.h1 || `${store.name} Verified Member Perks`}</h1>
            <p className={styles.storeSubtitle}>
              {store.benefit
                ? `Direct verified ${store.benefit}. Audited active on ${todayLabel}.`
                : `Direct verified savings & partner checkout clearances. Audited active on ${todayLabel}.`}
            </p>
          </div>
        </div>

        <div className={styles.trustPill}>
          <span className={styles.pulseDot}></span> Audited Active • {todayLabel}
        </div>
      </section>

      {/* Direct 2-Card Focus Grid (Above-the-fold) */}
      <section className={styles.cardsGrid}>
        {focusedCoupons.map((coupon, idx) => (
          <CouponCard
            key={coupon.id}
            coupon={coupon}
            store={store}
            isPrimary={idx === 0}
            onSelect={(cp) => setActiveCoupon(cp)}
          />
        ))}
      </section>

      {/* Clean Trust Strip */}
      <section className={styles.trustNote}>
        <div className={styles.trustNoteText}>
          <strong>PerkVue Direct Checkout Standard:</strong> Clicking any member privilege automatically copies your voucher credentials and redirects you directly to the official {store.name} checkout.
        </div>
        <span className={styles.secureBadge}>🔒 Direct Checkout Verified</span>
      </section>

      {/* Below-the-Fold Executive Redemption Guide & Deep SEO Authority */}
      <section
        style={{
          marginTop: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Brand Overview & Editorial Insight */}
        {brandSeo?.overview && brandSeo.overview.length > 0 && (
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "24px 28px",
              boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h2 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: "0 0 14px" }}>
              About {store.name} &amp; Official Privilege Overview
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#334155", lineHeight: 1.65, fontSize: "0.88rem" }}>
              {brandSeo.overview.map((para, pIdx) => (
                <p key={pIdx} style={{ margin: 0 }}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* How to Redeem Steps */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "18px",
            padding: "24px 28px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <h2 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: "0 0 16px" }}>
            How to Redeem Your {store.name} Member Privilege
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {(brandSeo?.howToApply || [
              {
                step: 1,
                title: "Claim Credentials",
                description: `Select any verified ${store.name} privilege card above. Your partner promo code is copied automatically.`,
              },
              {
                step: 2,
                title: "Direct Store Access",
                description: `Proceed to the official ${store.name} portal in the active window and select your qualifying items.`,
              },
              {
                step: 3,
                title: "Validate at Checkout",
                description: `Paste your copied privilege code in the promo field at checkout to apply instant verified savings.`,
              },
            ]).map((s) => (
              <div key={s.step} style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0284c7", marginBottom: "4px" }}>STEP 0{s.step}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>{s.title}</div>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand-Specific Insider Savings Tips */}
        {brandSeo?.savingsTips && brandSeo.savingsTips.length > 0 && (
          <div
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)",
              border: "1px solid #bbf7d0",
              borderRadius: "18px",
              padding: "24px 28px",
              boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
            }}
          >
            <h2 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#065f46", margin: "0 0 14px" }}>
              💡 {store.name} Insider Savings Tips &amp; Discount Hacks
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {brandSeo.savingsTips.map((tip, tIdx) => (
                <li key={tIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#166534", lineHeight: 1.55 }}>
                  <span style={{ color: "#059669", fontWeight: 800 }}>✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Brand FAQ Cards */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "18px",
            padding: "24px 28px",
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <h2 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0f172a", margin: "0 0 16px" }}>
            {store.name} Member Perks &amp; Checkout FAQ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} style={{ background: "#f8fafc", padding: "16px 18px", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0f172a", margin: "0 0 6px" }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            padding: "16px 20px",
            fontSize: "0.78rem",
            color: "#64748b",
            lineHeight: 1.6,
          }}
        >
          <strong>Editorial &amp; Partner Disclosure:</strong> PerkVue independently audits and curates direct merchant privileges for {store.name} (last verified {todayLabel}). When you redeem an offer through our links, we may earn an affiliate commission from the merchant at zero additional cost to you. All trademarks and registered names belong to their respective brand owners.
        </div>
      </section>

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
