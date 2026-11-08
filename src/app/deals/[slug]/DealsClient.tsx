"use client";

import React, { useState, useEffect } from "react";
import styles from "./DealsClient.module.css";
import CouponCard from "../../../components/CouponCard";
import CopyModal from "../../../components/CopyModal";
import { Store, Coupon } from "../../../lib/types";

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

  return (
    <div className={styles.pageContainer}>
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
            <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#b45309", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
              ✦ PERKVUE EXECUTIVE PARTNER PRIVILEGE
            </div>
            <h1 className={styles.storeTitle}>{store.name} Verified Member Perks</h1>
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

      {/* Below-the-Fold Executive Redemption Guide & Google Ads QS 10/10 Transparency Block */}
      <section
        style={{
          marginTop: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
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
            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0284c7", marginBottom: "4px" }}>STEP 01</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>Claim Credentials</div>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                Select any verified {store.name} privilege card above. Your partner promo code is copied automatically.
              </p>
            </div>
            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0284c7", marginBottom: "4px" }}>STEP 02</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>Direct Store Access</div>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                Proceed to the official {store.name} portal in the active window and select your qualifying items.
              </p>
            </div>
            <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0284c7", marginBottom: "4px" }}>STEP 03</div>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0f172a", marginBottom: "4px" }}>Validate at Checkout</div>
              <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                Paste your copied privilege code in the promo field at checkout to apply instant verified savings.
              </p>
            </div>
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
          <strong>Editorial &amp; Partner Disclosure:</strong> PerkVue independently audits and curates direct merchant privileges for {store.name} (last verified {todayLabel}). When you redeem an offer through our links, we may earn an affiliate commission from the merchant at zero additional cost to you.
        </div>
      </section>

      {/* Copy Modal */}
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
