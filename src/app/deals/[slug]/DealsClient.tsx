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

  // Auto-open modal if URL has ?coupon= param (from tabunder flow)
  useEffect(() => {
    if (typeof window !== "undefined") {
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

  // Keep top 2 focused high-value deals (eliminate confusion & clutter)
  const focusedCoupons = coupons.slice(0, 2);

  return (
    <div className={styles.pageContainer}>
      {/* Focused Store Header */}
      <section className={styles.storeHeader}>
        <div className={styles.brandInfo}>
          {store.logo ? (
            <img src={store.logo} alt={`${store.name} Logo`} className={styles.storeLogo} />
          ) : (
            <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
          )}
          <div>
            <h1 className={styles.storeTitle}>{store.name} Exclusive Offers</h1>
            <p className={styles.storeSubtitle}>
              Direct verified 20% savings &amp; starter bundle discounts. Tested active today.
            </p>
          </div>
        </div>

        <div className={styles.trustPill}>
          <span className={styles.pulseDot}></span> Tested Active Today
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
          <strong>PerkVue Direct Checkout Standard:</strong> Clicking any offer automatically copies your code and redirects you directly to the official {store.name} checkout.
        </div>
        <span className={styles.secureBadge}>🔒 Direct Checkout Verified</span>
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
