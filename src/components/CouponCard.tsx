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

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 1. Instant Clipboard Copy (Fallback + Modern API for 100% reliability)
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
          // Continue
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

    // 3. Immediately trigger modal in current tab as well (for instant responsiveness)
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
      {/* Top Value Strip */}
      <div className={styles.cardHeader}>
        <span className={styles.discountBadge}>{coupon.discount}</span>
        <span className={styles.verifiedBadge}>
          <span className={styles.greenDot}></span> Verified Active
        </span>
      </div>

      {/* Main Content - Ultra Clean */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{coupon.title}</h3>
        <p className={styles.cardDesc}>{coupon.description}</p>
      </div>

      {/* Big Clickable Action Button */}
      <div className={styles.cardFooter}>
        <button
          type="button"
          onClick={handleAction}
          className={`${styles.ctaButton} ${isDirectDeal ? styles.dealButton : styles.codeButton}`}
        >
          {isDirectDeal ? (
            <>
              <span className={styles.buttonLabel}>Get Deal &amp; Open Store</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          ) : (
            <>
              <span className={styles.codePill}>{coupon.code}</span>
              <span className={styles.buttonLabel}>
                {copied ? "Copied!" : "Show Code & Open Site →"}
              </span>
            </>
          )}
        </button>

        <div className={styles.trustFooter}>
          <span>⚡ Auto-applied at checkout</span>
          <span>{coupon.uses_count ? `${coupon.uses_count.toLocaleString()} uses today` : "100% Success"}</span>
        </div>
      </div>
    </div>
  );
}
