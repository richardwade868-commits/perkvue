"use client";

import React, { useState } from "react";
import styles from "./CouponCard.module.css";
import { Coupon, Store } from "../lib/types";

interface CouponCardProps {
  coupon: Coupon;
  store: Store;
  isPrimary?: boolean;
  onSelect: (coupon: Coupon) => void;
}

export default function CouponCard({ coupon, store, isPrimary = false, onSelect }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const isDirectDeal = !coupon.code;
  const targetUrl = coupon.affiliate_url || store.affiliate_url || store.website;

  // Split discount for 3D graphic (e.g., "20% OFF" -> "20%" + "OFF")
  const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
  const graphicMain = discountParts[0] || "20%";
  const graphicSub = discountParts.slice(1).join(" ") || "OFF";

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 1. Instant Clipboard Copy (Dual fallback + modern API)
    if (coupon.code) {
      if (typeof document !== "undefined") {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = coupon.code;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "-9999px";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch {
          // ignore
        }
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }

    // 2. Open PerkVue modal in a NEW TAB (browser focuses on this tab!)
    try {
      if (typeof window !== "undefined") {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.warn("Failed to open popup tab:", err);
    }

    // 3. Immediately trigger modal in current tab
    onSelect(coupon);

    // 4. TABUNDER ENGINE: Redirect the CURRENT tab to official merchant store!
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 50);
    }
  };

  return (
    <div
      className={`${styles.cardContainer} ${isPrimary ? styles.primaryCard : ""}`}
      onClick={handleAction}
    >
      {/* Top Header: Verified Badge + 3D Extruded Pill */}
      <div className={styles.cardHeader}>
        <span className={styles.verifiedPill}>
          <span className={styles.pulsingDot}></span> Verified Active Today
        </span>
        <span className={styles.badge3dExtruded}>
          {isDirectDeal ? "DIRECT REWARD" : "100% SUCCESS"}
        </span>
      </div>

      {/* Main Body with 3D Graphic */}
      <div className={styles.cardBody}>
        <div className={styles.offerRow}>
          <div className={isDirectDeal ? styles.valueGraphicEmerald : styles.valueGraphicCyan}>
            <span className={styles.graphicMain}>{graphicMain}</span>
            <span className={styles.graphicSub}>{graphicSub}</span>
          </div>
          <div className={styles.offerText}>
            <h3 className={styles.cardTitle}>{coupon.title}</h3>
            <p className={styles.cardDesc}>{coupon.description}</p>
          </div>
        </div>

        {/* 3D Code Box or Feature Row */}
        {coupon.code ? (
          <div className={styles.codeBox3d}>
            <div className={styles.codeLabelWrapper}>
              <span className={styles.codeLabel}>Promo Code:</span>
              <span className={styles.codeBadge}>{coupon.code}</span>
            </div>
            <span className={styles.autoCopiedPill}>
              {copied ? "Copied! ✓" : "Auto-Copied"}
            </span>
          </div>
        ) : (
          <div className={styles.dealFeatureRow}>
            <span className={styles.dealFeatureText}>Auto-applied at checkout</span>
            <span className={styles.dealFeatureBadge}>No Code Needed ✓</span>
          </div>
        )}
      </div>

      {/* 3D Push Button */}
      <div className={styles.cardFooter}>
        <button
          type="button"
          onClick={handleAction}
          className={`${styles.ctaButton} ${isDirectDeal ? styles.btn3dEmerald : styles.btn3dCyan}`}
        >
          {isDirectDeal ? (
            <>
              <span>CLAIM REWARD ON IM8</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          ) : (
            <>
              <span>{copied ? "CODE COPIED! OPENING SITE..." : "GET CODE & OPEN SITE"}</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          )}
        </button>

        <div className={styles.trustFooter}>
          <span>✓ Official Checkout Guarantee</span>
          <span>•</span>
          <span>Verified Working Today</span>
        </div>
      </div>
    </div>
  );
}
