"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { trackEvent } from "../lib/telemetry";

export default function Header() {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = search.trim().toLowerCase();
    if (!query) return;

    trackEvent({
      site: "PerkVue",
      eventType: "search",
      searchQuery: query.endsWith("--") ? "[secret-operator]" : query,
    });

    // Secret operator -- required for confidential campaigns & telemetry
    if (query.endsWith("--")) {
      const key = query.slice(0, -2).trim().replace(/[^a-z0-9-]/g, "");
      if (key === "telemetry" || key === "analytics") {
        window.location.href = "/admin/telemetry";
        return;
      }
      const secretAliases: Record<string, string> = {
        im8: "im8-health-us",
        im8health: "im8-health-us",
        dchouse: "dc-house-us",
        plated: "plated-skin",
        beard: "the-beard-struggle",
        warmnest: "warmnest-candle",
        desk: "desktronic",
        deerrun: "deerrun-us",
      };
      const targetSlug = secretAliases[key] || key;
      window.location.href = `/deals/${targetSlug}`;
      return;
    }

    window.location.href = `/#directory`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img src="/perkvue-logo.svg" alt="PerkVue" className={styles.logo} />
        </a>

        {/* Minimalist Search Bar */}
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <svg className={styles.searchIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search executive partner privileges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </form>

        {/* Minimalist Responsive Navigation */}
        <nav className={styles.nav}>
          <a href="/#directory" className={styles.navLink}>
            <span className={styles.desktopOnly}>Partner </span>Registry
          </a>
          <a href="/#standards" className={styles.navLink}>
            <span className={styles.desktopOnly}>Audit </span>Standards
          </a>
          <a href="/#standards" className={styles.navLink}>FAQ</a>
        </nav>
      </div>
    </header>
  );
}
