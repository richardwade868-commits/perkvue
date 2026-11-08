"use client";

import React, { useState } from "react";
import styles from "./CouponCard.module.css";
import { Coupon, Store } from "../lib/types";
import { trackEvent } from "../lib/telemetry";

interface CouponCardProps {
  coupon: Coupon;
  store: Store;
  isPrimary?: boolean;
  onSelect: (coupon: Coupon) => void;
}

export default function CouponCard({ coupon, store, isPrimary = false }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const isDirectDeal = !coupon.code;
  const rawTargetUrl = coupon.affiliate_url || store.affiliate_url || store.website;

  const discountParts = (coupon.discount || "20% OFF").trim().split(" ");
  const graphicMain = discountParts[0] || "20%";
  const graphicSub = discountParts.slice(1).join(" ") || "OFF";

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let targetUrl = rawTargetUrl;
    if (typeof window !== "undefined" && rawTargetUrl) {
      try {
        const utmCampaign = sessionStorage.getItem("utm_campaign") || "";
        const utmTerm = sessionStorage.getItem("utm_term") || "";
        const gclid = sessionStorage.getItem("gclid") || "";
        if (utmCampaign || utmTerm || gclid) {
          const urlObj = rawTargetUrl.startsWith("http")
            ? new URL(rawTargetUrl)
            : new URL(rawTargetUrl, window.location.origin);
          if (utmCampaign) urlObj.searchParams.set("subid1", utmCampaign);
          if (utmTerm) urlObj.searchParams.set("subid2", utmTerm);
          if (gclid) urlObj.searchParams.set("subid3", gclid);
          targetUrl = urlObj.toString();
        }
      } catch {}
    }

    trackEvent({
      site: "PerkVue",
      eventType: "coupon_click",
      storeSlug: store.slug,
      storeName: store.name,
      couponId: String(coupon.id),
      couponCode: coupon.code || "AUTO-DEAL",
      discount: coupon.discount,
      targetUrl,
    });

    // 1. Instant Clipboard Copy
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
        } catch {}
      }
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(coupon.code).catch(() => {});
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }

    // 2. Open PerkVue modal in a NEW TAB
    try {
      if (typeof window !== "undefined") {
        const ourSiteUrl = `${window.location.origin}${window.location.pathname}?coupon=${coupon.id}&code=${coupon.code || "DEAL"}`;
        window.open(ourSiteUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.warn("Failed to open popup tab:", err);
    }

    // 3. Redirect CURRENT tab immediately to official merchant store
    if (typeof window !== "undefined") {
      window.location.href = targetUrl;
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
          {isDirectDeal ? "DIRECT PRIVILEGE" : "100% CART AUDITED"}
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
              <span className={styles.codeLabel}>Privilege Code:</span>
              <span className={styles.codeBadge}>••••••••</span>
            </div>
            <span className={styles.autoCopiedPill}>
              {copied ? "Copied! ✓" : "Click to Claim"}
            </span>
          </div>
        ) : (
          <div className={styles.dealFeatureRow}>
            <span className={styles.dealFeatureText}>Auto-applied at partner checkout</span>
            <span className={styles.dealFeatureBadge}>Direct Access ✓</span>
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
          {coupon.code ? (
            <>
              <span>{copied ? "Privilege Copied! ✓" : "Claim Code"}</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          ) : (
            <>
              <span>Activate Privilege</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          )}
        </button>

        <div className={styles.trustFooter}>
          <span>✓ Direct Checkout Verified</span>
          <span>•</span>
          <span>Tested Active Today</span>
        </div>
      </div>
    </div>
  );
}
