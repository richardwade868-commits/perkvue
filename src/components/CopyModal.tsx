"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./CopyModal.module.css";
import { Coupon, Store } from "../lib/types";

interface CopyModalProps {
  coupon: Coupon | null;
  store: Store;
  onClose: () => void;
}

export default function CopyModal({ coupon, store, onClose }: CopyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !coupon) return null;

  const targetUrl = coupon.affiliate_url || store.affiliate_url || store.website;
  const isDirectDeal = !coupon.code;

  const handleModalClose = () => {
    if (typeof window !== "undefined") {
      try {
        window.history.replaceState({}, "", window.location.pathname);
      } catch {}
    }
    onClose();
  };

  const handleManualCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
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
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div className={styles.passCard} onClick={(e) => e.stopPropagation()}>
        {/* Top VIP Boarding Pass Header */}
        <div className={styles.passTopBar}>
          <div className={styles.chipGroup}>
            <div className={styles.goldChip}></div>
            <span className={styles.passSerial}>PERKVUE DIGITAL MEMBER PASS</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={handleModalClose}
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className={styles.passBody}>
          {/* Partner & Discount Header */}
          <div className={styles.partnerRow}>
            <div className={styles.partnerLeft}>
              {store.logo ? (
                <div className={styles.logoBox}>
                  <img src={store.logo} alt={store.name} className={styles.brandLogo} />
                </div>
              ) : (
                <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
              )}
              <div className={styles.partnerInfo}>
                <span className={styles.tierTag}>● Verified Active Today</span>
                <h2 className={styles.partnerName}>{store.name}</h2>
              </div>
            </div>
            <div className={styles.discountPill}>{coupon.discount || "15% OFF"}</div>
          </div>

          {/* Offer Details */}
          <div className={styles.offerBox}>
            <h3 className={styles.modalTitle}>{coupon.title}</h3>
            <p className={styles.modalSubtitle}>{coupon.description}</p>
          </div>

          {/* Glowing Credential Code Box or Direct Access Box */}
          {isDirectDeal ? (
            <div className={styles.autoAppliedBox}>
              <div className={styles.autoAppliedIcon}>✓</div>
              <div>
                <div className={styles.autoAppliedHeading}>Direct Partner Clearance Activated</div>
                <div className={styles.autoAppliedText}>
                  No code required — your member privilege is automatically applied at {store.name} checkout.
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.credentialVault}>
              <div className={styles.credentialTop}>
                <span>VIP Checkout Access Code</span>
                <span>100% Cart Audited</span>
              </div>
              <div className={styles.codeRow} onClick={handleManualCopy}>
                <span className={styles.codeText}>{coupon.code}</span>
                <button
                  className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ""}`}
                  type="button"
                  onClick={handleManualCopy}
                >
                  {copied ? "✓ COPIED TO CLIPBOARD" : "COPY ACCESS CODE"}
                </button>
              </div>
              {copied && (
                <p className={styles.copiedHint}>
                  ✓ Access code copied! Paste at {store.name} checkout to redeem.
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className={styles.actionsArea}>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
              onClick={handleRedirect}
            >
              Proceed to Official {store.name} Store →
            </a>
            <button type="button" className={styles.secondaryBtn} onClick={handleModalClose}>
              Return to PerkVue Directory
            </button>
          </div>
        </div>

        {/* Bottom Pass Footer */}
        <div className={styles.passFooter}>
          <span>🔒 256-BIT ENCRYPTED PARTNER LINK</span>
          <span>STATUS: ACTIVE</span>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
