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

  // STRICT REQUIREMENT: Only closes when user explicitly clicks the cross (✕) or back button
  const handleModalClose = () => {
    if (typeof window !== "undefined") {
      try {
        window.history.replaceState({}, "", window.location.pathname);
      } catch {
        // ignore
      }
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
        } catch {
          // ignore
        }
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
    // Note: No onClick on modalOverlay — clicking outside does NOT dismiss the modal!
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Only clicking this cross (✕) button closes the modal! */}
        <button
          className={styles.closeBtn}
          onClick={handleModalClose}
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>

        {/* Prominent Centered Brand Logo */}
        <div className={styles.logoWrapper}>
          {store.logo ? (
            <img
              src={store.logo}
              alt={store.name}
              width={84}
              height={84}
              style={{
                width: "84px",
                height: "84px",
                minWidth: "84px",
                minHeight: "84px",
                maxWidth: "84px",
                maxHeight: "84px",
                objectFit: "contain",
                display: "block"
              }}
              className={styles.brandLogo}
            />
          ) : (
            <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
          )}
        </div>

        {/* Centered Tested Active Badge */}
        <div className={styles.verifiedBadgeRow}>
          <span className={styles.verifiedPill}>⚡ 100% Tested &amp; Active Today</span>
        </div>

        {/* Modal Titles */}
        <h3 className={styles.modalTitle}>{coupon.title}</h3>
        <p className={styles.modalSubtitle}>{coupon.description}</p>

        {/* Main Offer Body */}
        {isDirectDeal ? (
          <div className={styles.autoAppliedBox}>
            <div className={styles.autoAppliedIcon}>✓</div>
            <div>
              <div className={styles.autoAppliedHeading}>Direct Promotion Activated</div>
              <div className={styles.autoAppliedText}>
                No coupon code needed. Discount automatically applied at checkout.
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.codeContainer}>
            <div className={styles.codeBox} onClick={handleManualCopy}>
              <span className={styles.codeText}>{coupon.code}</span>
              <button
                className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ""}`}
                type="button"
                onClick={handleManualCopy}
              >
                {copied ? "Copied! ✓" : "Copy Code"}
              </button>
            </div>
            {copied && (
              <p className={styles.copiedHint}>
                ✓ Code copied to clipboard! Paste it at checkout on {store.name}.
              </p>
            )}
          </div>
        )}

        {/* Stacked Action Buttons */}
        <div className={styles.actionsArea}>
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryCta}
            onClick={handleRedirect}
          >
            Continue to {store.name} →
          </a>
          <button type="button" className={styles.secondaryBtn} onClick={handleModalClose}>
            Back to Deals
          </button>
        </div>

        {/* Clean SSL Verification Strip */}
        <div className={styles.trustFooter}>
          <span>🔒 256-Bit SSL Encrypted Verification</span>
          <span>•</span>
          <span>Official Store Guarantee</span>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
