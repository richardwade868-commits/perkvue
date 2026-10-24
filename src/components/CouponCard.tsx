"use client";

import React, { useState } from "react";
import styles from "./CouponCard.module.css";
import { Coupon, Store } from "../lib/types";

interface CouponCardProps {
  coupon: Coupon;
  store: Store;
  onSelect: (coupon: Coupon) => void;
}

export default function CouponCard({ coupon, store, onSelect }: CouponCardProps) {
  const [copied, setCopied] = useState(false);

  const isDirectDeal = !coupon.code;
  const targetUrl = coupon.affiliate_url || store.affiliate_url || store.website;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 1. Copy code if available
    if (coupon.code) {
      navigator.clipboard.writeText(coupon.code).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }

    // 2. Tabunder Conversion Engine: Open store in new tab
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }

    // 3. Open modal in current tab
    onSelect(coupon);
  };

  return (
    <div className={styles.cardContainer}>
      {/* Top Privilege Badge Strip */}
      <div className={styles.cardHeader}>
        <span className={styles.discountBadge}>{coupon.discount} PRIVILEGE</span>
        <span className={styles.verifiedBadge}>
          <span className={styles.greenDot}></span> Cart Audited Today
        </span>
      </div>

      {/* Card Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{coupon.title}</h3>
        <p className={styles.cardDesc}>{coupon.description}</p>
        
        {/* Quality Validation Badges */}
        <div className={styles.featurePills}>
          <span className={styles.featurePill}>✓ 100% Direct Clearance</span>
          <span className={styles.featurePill}>✓ Instant Cart Application</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className={styles.cardFooter}>
        <button
          type="button"
          onClick={handleClick}
          className={`${styles.ctaButton} ${isDirectDeal ? styles.dealButton : styles.codeButton}`}
        >
          {isDirectDeal ? (
            <>
              <span className={styles.buttonActionLabel}>Claim Direct Benefit</span>
              <span className={styles.arrowIcon}>→</span>
            </>
          ) : (
            <>
              <span className={styles.buttonCodeMask}>{coupon.code}</span>
              <span className={styles.buttonActionLabel}>
                {copied ? "Copied!" : "Unlock Privilege →"}
              </span>
            </>
          )}
        </button>

        <div className={styles.statsRow}>
          <span>Audited in official cart</span>
          <span>{coupon.uses_count ? `${coupon.uses_count.toLocaleString()} member redemptions` : "Tested Active"}</span>
        </div>
      </div>
    </div>
  );
}
