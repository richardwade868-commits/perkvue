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
    <div className={styles.modalOverlay} onClick={handleModalClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={handleModalClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <div className={styles.modalHeader}>
          {store.logo ? (
            <div className={styles.logoWrapper}>
              <img src={store.logo} alt={store.name} className={styles.brandLogo} />
            </div>
          ) : (
            <div className={styles.fallbackLogo}>{store.name.charAt(0)}</div>
          )}
          <span className={styles.discountBadge}>{coupon.discount || "DEAL"}</span>
        </div>

        <h3 className={styles.modalTitle}>
          {isDirectDeal ? `Deal Activated for ${store.name}` : `Copy Code & Save at ${store.name}`}
        </h3>
        <p className={styles.modalSubtitle}>{coupon.title}</p>

        {isDirectDeal ? (
          <div className={styles.directDealBox}>
            <span className={styles.checkIcon}>✓</span>
            <div>
              <div className={styles.dealHeading}>Discount Activated Automatically</div>
              <div className={styles.dealNote}>No code needed. Your savings will apply at checkout.</div>
            </div>
          </div>
        ) : (
          <div className={styles.codeContainer}>
            <div className={styles.codeBox} onClick={handleManualCopy}>
              <span className={styles.codeText}>{coupon.code}</span>
              <button
                type="button"
                className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
                onClick={handleManualCopy}
              >
                {copied ? "✓ Copied" : "Copy Code"}
              </button>
            </div>
            <p className={styles.instructionText}>
              {copied ? "✓ Code copied to clipboard! Paste at checkout." : "Click to copy code and paste at checkout."}
            </p>
          </div>
        )}

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopButton}
          onClick={handleRedirect}
        >
          Continue to {store.name} →
        </a>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
