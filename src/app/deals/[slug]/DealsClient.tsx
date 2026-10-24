"use client";

import React, { useState } from "react";
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

  const handleSelectCoupon = (coupon: Coupon) => {
    setActiveCoupon(coupon);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Compact Executive Store Hero Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.heroInner}>
          <div className={styles.brandRow}>
            {store.logo ? (
              <img src={store.logo} alt={`${store.name} Logo`} className={styles.storeLogo} />
            ) : (
              <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
            )}
            <div className={styles.brandMeta}>
              <div className={styles.titleRow}>
                <h1 className={styles.storeTitle}>{store.name} Official Partner Clearances</h1>
                <span className={styles.verifiedBadge}>⚡ 100% Cart Validated</span>
              </div>
              <p className={styles.storeSubtitle}>
                {store.description || `Audited partner rates, cellular replenishment privileges, and verified checkout authorization for ${store.name}.`}
              </p>
            </div>
          </div>

          {/* Inline Trust Proof Bar */}
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>{coupons.length}</span>
              <span className={styles.trustLabel}>Verified Privileges</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>20%</span>
              <span className={styles.trustLabel}>Direct Savings</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>100%</span>
              <span className={styles.trustLabel}>Cart Clearance</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>Active</span>
              <span className={styles.trustLabel}>Today&apos;s Status</span>
            </div>
          </div>
        </div>
      </section>

      {/* Above-the-fold 2-Column Deals Grid */}
      <section className={styles.dealsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Exclusive {store.name} Partner Privileges</h2>
          <span className={styles.offersCount}>Showing {coupons.length} Verified Clearances</span>
        </div>

        <div className={styles.cardsGrid}>
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              store={store}
              onSelect={handleSelectCoupon}
            />
          ))}
        </div>
      </section>

      {/* Verification FAQ / Trust Guide */}
      <section className={styles.infoSection}>
        <h3 className={styles.infoHeading}>How to Redeem {store.name} Partner Privileges</h3>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>1</span>
            <h4 className={styles.stepTitle}>Authorize Privilege</h4>
            <p className={styles.stepDesc}>Click &quot;Unlock Privilege&quot; to copy the verified direct partner code.</p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>2</span>
            <h4 className={styles.stepTitle}>Direct Merchant Checkout</h4>
            <p className={styles.stepDesc}>We open the authorized {store.name} checkout portal in a secure new tab.</p>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepNum}>3</span>
            <h4 className={styles.stepTitle}>Instant Cart Savings</h4>
            <p className={styles.stepDesc}>Your 20% privilege applies immediately with zero expired codes or extra steps.</p>
          </div>
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
