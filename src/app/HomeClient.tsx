"use client";

import React, { useState, useMemo, useEffect } from "react";
import styles from "./page.module.css";
import { Store, Coupon } from "../lib/types";
import CopyModal from "../components/CopyModal";
import { trackEvent } from "../lib/telemetry";

interface HomeClientProps {
  stores: Store[];
  coupons: Coupon[];
}

const CATEGORIES = [
  "All Privileges",
  "Technology & Hardware",
  "Athletic & Performance",
  "Luxury & Wellness",
  "Everyday Essentials",
  "Lifestyle & Media",
];

const VAULT_ITEMS = [
  {
    key: "apple",
    name: "Apple Inc.",
    tier: "Tier 1 Global",
    benefit: "15% Sitewide Hardware & Audio Accessory Credits",
    code: "PERKVUE15",
    slug: "apple",
  },
  {
    key: "nike",
    name: "Nike Direct",
    tier: "Direct Partner",
    benefit: "20% Off Member Gear & Footwear Clearance",
    code: "PERKVUE15",
    slug: "nike",
  },
  {
    key: "sephora",
    name: "Sephora",
    tier: "Prestige Partner",
    benefit: "15% Beauty Insider & Skincare Direct Privilege",
    code: "PERKVUE15",
    slug: "sephora",
  },
];

const FAQS = [
  {
    q: "What is PerkVue and how does it work?",
    a: "PerkVue is an independent, curated registry of direct brand privileges and insider checkout clearances. We partner directly with flagship retailers to audit and index active savings, eliminating broken third-party coupon scrapers.",
  },
  {
    q: "Are all listed privileges verified and working today?",
    a: "Yes. Every voucher code and partner link is tested directly inside live retail shopping carts daily before indexing. If an offer expires, our automated audit engine immediately removes it from the public directory.",
  },
  {
    q: "How do I redeem my member privilege?",
    a: "Select any merchant from the directory below and click 'Unlock Code' or 'Claim Privilege'. You will be given direct checkout credentials or redirected to the official partner store with your discount automatically applied.",
  },
  {
    q: "Why is PerkVue completely free with zero ads?",
    a: "We maintain direct affiliate agreements with featured retailers, which allows us to provide a clean, ad-free, popup-free platform without selling user data or charging membership fees.",
  },
];

export default function HomeClient({ stores, coupons }: HomeClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Privileges");
  const [activeVaultTab, setActiveVaultTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);
  const [secretResults, setSecretResults] = useState<any[]>([]);
  const [isSecretLoading, setIsSecretLoading] = useState(false);

  const isSecretMode = search.trim().endsWith("--") || search.trim().includes("--");

  // Auto-open VIP Pass Modal if URL has ?coupon= param (from tab-under flow)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const couponId = params.get("coupon");
      if (couponId && coupons) {
        const found = coupons.find((c) => String(c.id) === couponId);
        if (found) {
          setActiveCoupon(found);
        }
      }
    }
  }, [coupons]);

  // Connect `--` secret search to server-side /api/vault-search
  useEffect(() => {
    const trimmed = search.trim();
    if (trimmed.endsWith("--") || trimmed.includes("--")) {
      const clean = trimmed.replace(/-+$/, "").trim().toLowerCase();
      if (clean === "telemetry" || clean === "analytics") {
        window.location.href = "/admin/telemetry";
        return;
      }
      if (clean.length > 0) {
        setIsSecretLoading(true);
        fetch(`/api/vault-search?q=${encodeURIComponent(trimmed)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data && Array.isArray(data.results)) {
              setSecretResults(data.results);
            } else {
              setSecretResults([]);
            }
          })
          .catch(() => setSecretResults([]))
          .finally(() => setIsSecretLoading(false));
      } else {
        setSecretResults([]);
      }
    } else {
      if (secretResults.length > 0) setSecretResults([]);
    }
  }, [search]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Privileges": stores.length };
    stores.forEach((s) => {
      if (s.category) {
        counts[s.category] = (counts[s.category] || 0) + 1;
      }
    });
    return counts;
  }, [stores]);

  // Search and Category Filtering (strictly public stores only on normal search)
  const filteredStores = useMemo(() => {
    let result = stores;

    if (selectedCategory !== "All Privileges") {
      result = result.filter((s) => s.category === selectedCategory);
    }

    const q = search.trim().toLowerCase();
    if (!q) return result;
    if (q.endsWith("--") || q.includes("--")) return [];

    return result.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.slug.includes(q) ||
        (s.benefit && s.benefit.toLowerCase().includes(q))
    );
  }, [search, selectedCategory, stores]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim().toLowerCase();
    if (q) {
      trackEvent({
        site: "PerkVue",
        eventType: "search",
        searchQuery: q.endsWith("--") ? "[secret-operator]" : q,
      });
    }
    if (q.endsWith("--") || q.includes("--")) {
      const key = q.replace(/-+$/, "").trim().replace(/[^a-z0-9-]/g, "");
      if (key === "telemetry" || key === "analytics") {
        window.location.href = "/admin/telemetry";
        return;
      }
      if (secretResults.length > 0) {
        window.location.href = secretResults[0].website || `/deals/${secretResults[0].slug}`;
        return;
      }
      window.location.href = `/deals/${key}`;
      return;
    }
    if (filteredStores.length > 0) {
      window.location.href = `/deals/${filteredStores[0].slug}`;
    }
  };

  const handlePerkUnlock = (coupon: Coupon) => {
    const storeObj = (coupon.store as Store) || stores[0];
    const targetUrl = coupon.affiliate_url || storeObj.affiliate_url || storeObj.website;

    trackEvent({
      site: "PerkVue",
      eventType: "coupon_click",
      storeSlug: storeObj.slug,
      storeName: storeObj.name,
      couponId: String(coupon.id),
      couponCode: coupon.code || "AUTO-DEAL",
      discount: coupon.discount,
      targetUrl,
    });

    if (coupon.code) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = coupon.code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch {}
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
    }

    try {
      const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
      window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
    } catch {}

    setActiveCoupon(coupon);
    window.location.href = targetUrl;
  };

  const currentVaultItem = VAULT_ITEMS[activeVaultTab];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PerkVue",
    url: "https://perkvue.com",
    description: "Curated member privileges, corporate partner clearances, and verified promo codes across global retail brands.",
  };

  return (
    <div className={styles.homeContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Ambient Luxury Lighting Mesh */}
      <div className={styles.ambientGlow} />

      {/* =========================================================
          1. SPLIT-SCREEN EDITORIAL HERO (LUXURY REWARDS PORTAL)
          ========================================================= */}
      <section className={styles.heroGrid}>
        {/* Left Editorial Column */}
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.pulseDot}></span> VERIFIED PARTNER PRIVILEGES ACTIVE TODAY
          </div>
          <h1 className={styles.heroTitle}>
            Executive Member Perks &amp; <br />
            <span className={styles.heroTitleHighlight}>Direct Partner Privileges.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Direct partner clearances, corporate-tier member credits, and verified private rates across global flagship retail brands. Zero expired offers, zero ad popups.
          </p>

          <div className={styles.heroActions}>
            <a href="#directory" className={styles.primaryCta}>
              Browse Stores ↓
            </a>
            <a href="#coupons" className={styles.secondaryCta}>
              View Top Perks
            </a>
          </div>

          <div className={styles.trustMetricRow}>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>100% Cart Audit</span>
              <span className={styles.metricLabel}>Tested live daily</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>$4.8M+ Saved</span>
              <span className={styles.metricLabel}>In member privileges</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.trustMetric}>
              <span className={styles.metricValue}>Zero Ad Popups</span>
              <span className={styles.metricLabel}>Private &amp; independent</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Member Pass Showcase */}
        <div className={styles.heroRight}>
          <div className={styles.vaultCard}>
            <div className={styles.vaultCardGlow}></div>

            <div className={styles.vaultCardTop}>
              <div className={styles.vaultCardBrand}>
                <div className={styles.chipIcon}></div>
                <span className={styles.vaultCardTitle}>PerkVue Member Vault Pass</span>
              </div>
              <span className={styles.vaultStatusBadge}>Active • Verified</span>
            </div>

            {/* Interactive Pass Switcher */}
            <div className={styles.vaultPreviewSelector}>
              {VAULT_ITEMS.map((item, idx) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveVaultTab(idx)}
                  className={`${styles.vaultTab} ${activeVaultTab === idx ? styles.vaultTabActive : ""}`}
                >
                  {item.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Pass Live Display */}
            <div className={styles.vaultDisplayBox}>
              <div className={styles.vaultDisplayHeader}>
                <h3 className={styles.vaultPartnerName}>{currentVaultItem.name}</h3>
                <span className={styles.vaultTierTag}>{currentVaultItem.tier}</span>
              </div>
              <p className={styles.vaultBenefit}>{currentVaultItem.benefit}</p>
              <div className={styles.vaultActionRow}>
                <span className={styles.vaultPassCode}>CODE: {currentVaultItem.code}</span>
                <a href={`/deals/${currentVaultItem.slug}`} className={styles.vaultCardLink}>
                  Unlock Privilege →
                </a>
              </div>
            </div>

            <div className={styles.vaultCardFooter}>
              <span>AUDIT: DIRECT CHECKOUT VALIDATION</span>
              <span>EXPIRY: DEC 31, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DIRECTORY CONTROLS & HORIZONTAL PARTNER ROWS
          ========================================================= */}
      <section id="directory" className={styles.directorySection}>
        <div className={styles.directoryHeader}>
          <div>
            <h2 className={styles.directoryTitle}>Official Merchant Registry</h2>
            <p className={styles.directorySubtitle}>
              Curated corporate partner privileges verified for instant cart clearance.
            </p>
          </div>
        </div>

        {/* Category Filters and Search Bar */}
        <div className={styles.toolbarRow}>
          <div className={styles.categoryPills}>
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.categoryPill} ${
                    selectedCategory === cat ? styles.categoryPillActive : ""
                  }`}
                >
                  {cat} {count > 0 && <span className={styles.pillCount}>({count})</span>}
                </button>
              );
            })}
          </div>

          <div style={{ position: "relative" }}>
            <form onSubmit={handleSearchSubmit} className={styles.directorySearch}>
              <svg
                className={styles.searchIcon}
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search partner registry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.directorySearchInput}
              />
            </form>

            {/* Secret Vault Dropdown when `--` is typed */}
            {isSecretMode && (secretResults.length > 0 || isSecretLoading) && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  width: "320px",
                  background: "#0f172a",
                  color: "#f8fafc",
                  borderRadius: "14px",
                  border: "1px solid #38bdf8",
                  boxShadow: "0 16px 36px rgba(2, 6, 23, 0.45)",
                  zIndex: 100,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    background: "rgba(2, 132, 199, 0.2)",
                    borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#38bdf8",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>🔓 VIP VAULT SEARCH</span>
                  <span>{isSecretLoading ? "Loading..." : `${secretResults.length} Found`}</span>
                </div>
                {secretResults.map((item) => (
                  <a
                    key={item.slug}
                    href={item.website || `/deals/${item.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      color: "#ffffff",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "13.5px",
                      fontWeight: 700,
                    }}
                  >
                    <span>{item.name}</span>
                    <span style={{ fontSize: "11.5px", color: "#38bdf8" }}>Open Pass →</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Horizontal Directory Rows */}
        <div className={styles.directoryList}>
          {filteredStores.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No verified partner privileges match &quot;{search}&quot; in this category.</p>
            </div>
          ) : (
            filteredStores.map((store, idx) => (
              <a
                key={store.id}
                href={`/deals/${store.slug}`}
                className={styles.partnerRow}
              >
                {/* Brand Index + Logo Container */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#64748b",
                      fontFamily: "monospace",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.partnerLogoWrap}>
                    <img src={store.logo} alt={store.name} className={styles.partnerLogo} />
                  </div>
                </div>

                {/* Partner Meta */}
                <div className={styles.partnerMeta}>
                  <div className={styles.partnerNameWrap}>
                    <h3 className={styles.partnerName}>{store.name}</h3>
                    <span className={styles.partnerTierBadge}>{store.badge || "Verified Partner"}</span>
                  </div>
                  <span className={styles.partnerCategory}>{store.category}</span>
                </div>

                {/* Primary Benefit */}
                <div className={styles.partnerBenefit}>
                  {store.benefit || "15% Sitewide Privilege with verified access code"}
                </div>

                {/* Audit Timestamp */}
                <div className={styles.partnerAudit}>
                  <span className={styles.auditStatus}>
                    <span className={styles.auditDot}></span> Verified Active
                  </span>
                  <span className={styles.auditTimestamp}>Audited in cart today</span>
                </div>

                {/* Claim Button */}
                <div className={styles.claimButtonWrap}>
                  <span className={styles.claimButton}>View Perks →</span>
                </div>
              </a>
            ))
          )}
        </div>
      </section>

      {/* =========================================================
          3. FEATURED MEMBER PERKS & ACCESS CODES (2-COLUMN EXECUTIVE GRID)
          ========================================================= */}
      {coupons && coupons.length > 0 && (
        <section
          id="coupons"
          style={{
            maxWidth: "1200px",
            margin: "0 auto 64px",
            padding: "0 24px",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h2 className={styles.directoryTitle}>Top Audited Member Perks &amp; Promo Codes</h2>
            <p className={styles.directorySubtitle}>
              Click any verified member pass below to copy the access code and open the official partner checkout.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "18px",
            }}
          >
            {coupons.slice(0, 8).map((coupon) => {
              const storeObj = (coupon.store as Store) || stores[0];
              return (
                <div
                  key={coupon.id}
                  onClick={() => handlePerkUnlock(coupon)}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderTop: "3px solid #0284c7",
                    borderRadius: "18px",
                    padding: "20px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "14px",
                        border: "1px solid #e2e8f0",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: "#ffffff",
                      }}
                    >
                      <img
                        src={storeObj.logo}
                        alt={storeObj.name}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            color: "#0284c7",
                            background: "#f0f9ff",
                            border: "1px solid #bae6fd",
                            padding: "2px 8px",
                            borderRadius: "999px",
                          }}
                        >
                          {coupon.discount}
                        </span>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748b" }}>
                          {storeObj.name}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          color: "#0f172a",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {coupon.title}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePerkUnlock(coupon);
                    }}
                    style={{
                      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                      color: "#38bdf8",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    Unlock Code →
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================
          4. EDITORIAL INTEGRITY STANDARDS (3-COLUMN TRUST GRID)
          ========================================================= */}
      <section id="standards" className={styles.standardsSection}>
        <div className={styles.standardsHeader}>
          <h2 className={styles.standardsTitle}>The PerkVue Verification Standard</h2>
          <p className={styles.standardsSubtitle}>
            Unlike legacy coupon aggregators, we maintain strict editorial guidelines to ensure every listed privilege works on first try.
          </p>
        </div>

        <div className={styles.standardsGrid}>
          <div className={styles.standardCard}>
            <div className={styles.standardNumber}>STANDARD 01</div>
            <h3 className={styles.standardHeading}>Live Checkout Testing</h3>
            <p className={styles.standardDesc}>
              Every promotional code is directly tested inside actual merchant checkout funnels before being indexed. We never list speculative or unverified codes.
            </p>
          </div>

          <div className={styles.standardCard}>
            <div className={styles.standardNumber}>STANDARD 02</div>
            <h3 className={styles.standardHeading}>Daily Dead-Link Purges</h3>
            <p className={styles.standardDesc}>
              Expired discounts waste shoppers&apos; time. Our daily audit sweeps remove expired vouchers immediately, keeping our directory 100% clean and functional.
            </p>
          </div>

          <div className={styles.standardCard}>
            <div className={styles.standardNumber}>STANDARD 03</div>
            <h3 className={styles.standardHeading}>Zero Spam &amp; Deceptive Clicks</h3>
            <p className={styles.standardDesc}>
              No popunder windows, no fake &quot;reveal code&quot; loops, and no arbitrary redirects. Clean access directly to authorized partner stores.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. EDITORIAL SPOTLIGHT BANNER
          ========================================================= */}
      <section className={styles.spotlightBanner}>
        <div className={styles.spotlightContent}>
          <div className={styles.spotlightTag}>Curated Collective</div>
          <h2 className={styles.spotlightHeading}>Elevate Your Daily Living &amp; Performance</h2>
          <p className={styles.spotlightText}>
            From premier cellular longevity supplements and clean nutrition to high-performance athletic footwear and everyday essentials, PerkVue curates the highest echelon of modern consumer privileges.
          </p>
        </div>
        <div className={styles.spotlightAction}>
          <a href="#directory" className={styles.spotlightBtn}>
            Browse All Privileges
          </a>
        </div>
      </section>

      {/* =========================================================
          6. MINIMALIST FAQ ACCORDION
          ========================================================= */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqSubtitle}>Everything you need to know about PerkVue partner privileges.</p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={styles.faqItem}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className={styles.faqQuestion}>
                <span>{faq.q}</span>
                <span>{openFaq === idx ? "−" : "+"}</span>
              </div>
              {openFaq === idx && <div className={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* VIP Digital Pass Modal */}
      {activeCoupon && (
        <CopyModal
          coupon={activeCoupon}
          store={(activeCoupon.store as Store) || stores[0]}
          onClose={() => setActiveCoupon(null)}
        />
      )}
    </div>
  );
}
