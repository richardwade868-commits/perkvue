"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./Footer.module.css";
import { trackEvent, captureUrlTrackingParams } from "../lib/telemetry";

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleCopyrightClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5) {
      setShowSecret(true);
      setClicks(0);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "T" || e.key === "t")) {
      e.preventDefault();
      window.location.href = "/admin/telemetry";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      captureUrlTrackingParams();
      const pathname = window.location.pathname || "/";
      const isStore = pathname.startsWith("/deals/") || pathname.startsWith("/store/");
      const slug = isStore ? pathname.split("/").filter(Boolean)[1] || "" : "";
      trackEvent({
        site: "PerkVue",
        eventType: isStore ? "store_view" : "page_view",
        path: pathname,
        storeSlug: slug,
      });
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <img src="/perkvue-logo.svg" alt="PerkVue Logo" className={styles.footerLogo} />
          <p className={styles.brandDesc}>
            PerkVue is an independent executive curation of verified retail perks, direct partner checkout clearances, and member privileges.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h5 className={styles.colTitle}>Privilege Categories</h5>
          <ul className={styles.linkList}>
            <li><a href="/#directory">Technology &amp; Hardware</a></li>
            <li><a href="/#directory">Athletic &amp; Performance</a></li>
            <li><a href="/#directory">Luxury &amp; Wellness</a></li>
            <li><a href="/#directory">Everyday Essentials</a></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h5 className={styles.colTitle}>Verification Standards</h5>
          <ul className={styles.linkList}>
            <li>100% Tested Daily in Cart</li>
            <li>Direct Partner Redirection</li>
            <li>Zero Expired Clutter</li>
            <li>Zero Membership Fees</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p onClick={handleCopyrightClick} style={{ cursor: "default", userSelect: "none" }}>
            © {new Date().getFullYear()} PerkVue.com. All rights reserved. Trademarks belong to respective owners.
          </p>
          <div className={styles.legalLinks}>
            {showSecret && (
              <>
                <a href="/admin/telemetry" style={{ color: "#10b981", fontWeight: 700 }}>
                  📡 Live Telemetry
                </a>
                <span>•</span>
              </>
            )}
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
